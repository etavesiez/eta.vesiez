import React, { useState, useEffect } from 'react';
import './QuoteForm.css';
import { Scrollbar } from 'react-scrollbars-custom';
import { Send, CheckCircle, X } from 'lucide-react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [contactMethod, setContactMethod] = useState<'email' | 'phone'>('email');
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);


  // Form fields from devis.json
  const [fields, setFields] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>({});

  const [contactEmail, setContactEmail] = useState<string>('');
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}texte/devis.json`)
      .then(res => res.json())
      .then((data) => {
        setFields(data);
        // Init formData with empty values
        const initial: any = {};
        data.forEach((f: any) => {
          if (f.type === 'select') initial[f.champ] = [];
          else initial[f.champ] = '';
        });
        setFormData(initial);
      });
    fetch(`${import.meta.env.BASE_URL}texte/contact.json`)
      .then(res => res.json())
      .then((data) => {
        setContactEmail(data.email || '');
      });
  }, []);


  // Pour les champs select (multi ou simple)
  const handleSelectChange = (champ: string, value: string) => {
    setFormData((prev: any) => {
      const current = prev[champ] || [];
      // Cherche le field concerné
      const field = fields.find((f: any) => f.champ === champ);
      let updated = [...current];
      // Si on décoche une catégorie principale
      const isMainCategory = field && field.options && field.options.some((opt: any) => typeof opt === 'object' && opt.label === value);
      if (current.includes(value)) {
        updated = updated.filter((v: string) => v !== value);
        // Si c'est une catégorie principale, retirer aussi toutes ses sous-options
        if (isMainCategory) {
          const mainOption = field.options.find((opt: any) => typeof opt === 'object' && opt.label === value);
          if (mainOption && Array.isArray(mainOption.sousOptions)) {
            mainOption.sousOptions.forEach((sous: any) => {
              const sousLabel = typeof sous === 'string' ? sous : sous.label;
              const sousKey = `${value} - ${sousLabel}`;
              updated = updated.filter((v: string) => v !== sousKey);
            });
          }
        }
        return { ...prev, [champ]: updated };
      } else {
        updated = [...updated, value];
        return { ...prev, [champ]: updated };
      }
    });
  };

  // Pour les autres champs
  const handleInputChange = (champ: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [champ]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    // Envoi via fetch à Formsubmit.co sans rechargement
    const formDataToSend = new FormData();
    Object.entries({ ...formData, preferredContact: contactMethod }).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formDataToSend.append(key, (value as unknown[]).map(v => String(v)).join(', '));
      } else {
        formDataToSend.append(key, value !== undefined && value !== null ? String(value) : '');
      }
    });
    if (formData.email) {
      formDataToSend.append('_replyto', formData.email);
    }
    formDataToSend.append('_subject', 'Nouvelle demande de devis ETA Vesiez');
    formDataToSend.append('_captcha', 'false');
    // Pas de _next pour éviter la redirection

    try {
      const response = await fetch(`https://formsubmit.co/${contactEmail}`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi');
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError("L'envoi du devis a échoué. Si vous utilisez Instagram ou Facebook, ouvrez ce site dans un navigateur externe (Safari, Chrome...) pour envoyer votre demande, ou contactez-nous directement par mail ou téléphone. Merci !");
    }
  };


  const resetForm = () => {
    setSubmitted(false);
    // Réinitialise tous les champs
    const initial: any = {};
    fields.forEach((f: any) => {
      if (f.type === 'select') initial[f.champ] = [];
      else initial[f.champ] = '';
    });
    setFormData(initial);
  };

  // Détection Instagram, Facebook, TikTok in-app browser
  const isInAppBrowser = typeof navigator !== 'undefined' &&
    (/Instagram|FBAN|FBAV|FB_IAB|TikTok/i.test(navigator.userAgent));

  if (!isOpen) return null;

  // DEBUG: log et contenu des fields
  console.log('QuoteForm rendu, isOpen:', isOpen, 'fields:', fields.length, fields);
  if (fields.length > 0) {
    fields.forEach((f, i) => {
      console.log(`Field[${i}]`, f);
    });
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-green/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content with custom Scrollbar */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl animate-in fade-in zoom-in duration-200 flex flex-col overflow-hidden"
        style={{ maxHeight: '90vh', height: '90vh' }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-brand-gold hover:text-brand-brown transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {fields.length > 0 ? (
          <div
            style={{
              maxWidth: '100%',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 0,
              flex: 1,
              height: '100%'
            }}
          >
            <Scrollbar
              style={{ flex: 1, minHeight: 0, height: '100%' }}
              contentProps={{ style: { display: 'flex', flexDirection: 'column', minHeight: 0, height: '100%' } }}
              trackYProps={{ style: { background: 'transparent', width: 10, right: 0 } }}
              thumbYProps={{
                style: { background: '#4D3529', borderRadius: 6, width: 8, minHeight: 40, transition: 'background 0.2s' },
                className: 'custom-scrollbar-thumb',
              }}
              trackXProps={{ style: { display: 'none' } }}
            >
              <div className="pt-16 p-8 min-h-0 flex-1 flex flex-col">
                {isInAppBrowser && (
                  <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-lg text-center font-semibold">
                    Attention&nbsp;: L’envoi du formulaire peut ne pas fonctionner depuis Instagram, Facebook ou TikTok. <br />
                    Merci d’ouvrir ce site dans un navigateur externe (Safari, Chrome…) pour envoyer votre demande de devis.
                  </div>
                )}
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-brand-cream" />
                  </div>
                  <h3 className="text-2xl font-block font-bold text-brand-green mb-4">Demande envoyée !</h3>
                  <p className="text-brand-brown mb-8">
                    {(() => {
                      // Cherche le champ texte obligatoire qui sert de nom
                      const nameField = fields.find(
                        (f) => (f.type === 'text' || f.type === 'input') && (f.obligatoire || f.required)
                      );
                      const nameValue = nameField ? formData[nameField.champ] : '';
                      return nameValue && nameValue.trim() !== ''
                        ? `Merci M./Mme ${nameValue}, Louis Vésiez a bien reçu votre demande de devis.`
                        : 'Merci M./Mme, Louis Vésiez a bien reçu votre demande de devis.';
                    })()}
                    <br/>
                    Il vous recontactera très prochainement par {contactMethod === 'email' ? 'email' : 'téléphone'}.
                    {isInAppBrowser && (
                      <>
                        <br/>
                        <span className="block mt-4 text-red-700 font-semibold">Attention&nbsp;: Si vous n’avez pas de réponse sous 24h, ouvrez ce site dans un navigateur externe (Safari, Chrome…) ou contactez-nous directement. Instagram, Facebook ou TikTok peuvent empêcher l’envoi du mail.</span>
                      </>
                    )}
                  </p>
                  <div className="flex justify-center gap-4">
                    <button 
                      onClick={onClose}
                      className="px-6 py-2 border-2 border-brand-green text-brand-green font-bold rounded-full hover:bg-brand-green hover:text-brand-cream transition-colors"
                    >
                      Fermer
                    </button>
                    <button 
                      onClick={resetForm}
                      className="px-6 py-2 bg-brand-gold text-brand-brown font-bold rounded-full hover:bg-opacity-90 transition-colors"
                    >
                      Nouvelle demande
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg text-center">
                      {submitError}
                    </div>
                  )}

                  {/* Texte d'en-tête et explication depuis devis.json (nouveau format) */}
                  {(() => {
                    const headerField = fields.find((f) => f.titre && f.explication);
                    if (headerField) {
                      return <>
                        <h3 className="text-2xl font-block font-bold text-brand-green mb-2 text-center">{headerField.titre}</h3>
                        <p className="text-brand-brown/70 mb-8">{headerField.explication}</p>
                      </>;
                    }
                    return null;
                  })()}

                  <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                    {fields.map((field) => {
                      if (field.type === 'select') {
                        // Multi-select (checkboxes) avec sous-catégories
                        return (
                          <div key={field.champ}>
                            <label className="block text-sm font-block font-bold text-brand-green mb-3 uppercase tracking-wide">
                              {field.label}
                            </label>
                            <div className="flex flex-col sm:flex-row gap-x-8">
                              {/* Découpe les options en deux colonnes égales */}
                              {(() => {
                                const colCount = 2;
                                const options = field.options;
                                const perCol = Math.ceil(options.length / colCount);
                                return Array.from({ length: colCount }).map((_, colIdx) => (
                                  <div key={colIdx} className="flex flex-col gap-3 flex-1">
                                    {options.slice(colIdx * perCol, (colIdx + 1) * perCol).map((option: any) => {
                                      if (typeof option === 'object' && option !== null && option.label && Array.isArray(option.sousOptions)) {
                                        const mainChecked = ((formData[field.champ] as string[]) || []).includes(String(option.label));
                                        return (
                                          <div key={option.label} className="flex flex-col gap-1">
                                            <label className="flex items-center space-x-3 cursor-pointer group py-1 quote-checkbox-label">
                                              <input
                                                type="checkbox"
                                                className="accent-brand-gold h-5 w-5 cursor-pointer"
                                                checked={mainChecked}
                                                onChange={() => handleSelectChange(field.champ, option.label)}
                                              />
                                              <span className={`text-sm ${mainChecked ? 'text-brand-green font-semibold' : 'text-brand-brown'}`}>{option.label}</span>
                                            </label>
                                            <div className="ml-6 flex flex-col gap-1">
                                              {option.sousOptions.map((sous: any) => {
                                                // Supporte string ou objet {label, type}
                                                const sousLabel = typeof sous === 'string' ? sous : sous.label;
                                                const sousType = typeof sous === 'object' && sous.type ? sous.type : undefined;
                                                const sousKey = `${option.label} - ${sousLabel}`;
                                                const sousChecked = ((formData[field.champ] as string[]) || []).includes(String(sousKey));
                                                return (
                                                  <label key={sousKey} className={`flex items-center space-x-3 cursor-pointer group ${!mainChecked ? 'opacity-50 pointer-events-none' : ''} py-1 quote-checkbox-label`}>
                                                    <input
                                                      type="checkbox"
                                                      className="accent-brand-gold h-5 w-5 cursor-pointer"
                                                      checked={sousChecked}
                                                      disabled={!mainChecked}
                                                      onChange={() => handleSelectChange(field.champ, sousKey)}
                                                    />
                                                    <span className={`text-xs ${sousChecked ? 'text-brand-green font-semibold' : 'text-brand-brown'}`}>
                                                      {sousLabel}
                                                      {sousType === 'supplément' && (
                                                        <span className="ml-1 text-brand-gold font-semibold">(supplément)</span>
                                                      )}
                                                      {sousType === 'choix' && (
                                                        <span className="ml-1 text-brand-green/60">(choix)</span>
                                                      )}
                                                    </span>
                                                  </label>
                                                );
                                              })}
                                            </div>
                                          </div>
                                        );
                                      }
                                      // Option simple (string)
                                      return (
                                        <label key={typeof option === 'string' ? option : ''} className="flex items-center space-x-3 cursor-pointer group py-1 quote-checkbox-label">
                                          <input
                                            type="checkbox"
                                            className="accent-brand-gold h-5 w-5 cursor-pointer"
                                            checked={((formData[field.champ] as string[]) || []).includes(String(option))}
                                            onChange={() => handleSelectChange(field.champ, option)}
                                          />
                                          <span className={`text-sm ${(formData[field.champ] || []).includes(option) ? 'text-brand-green font-semibold' : 'text-brand-brown'}`}>
                                            {typeof option === 'string' ? option : ''}
                                          </span>
                                        </label>
                                      );
                                    })}
                                  </div>
                                ));
                              })()}
                            </div>
                          </div>
                        );
                      }
                      if (field.type === 'textarea') {
                        return (
                          <div key={field.champ}>
                            <label htmlFor={field.champ} className="block text-sm font-bold text-brand-green mb-2 uppercase tracking-wide">
                              {field.label}
                            </label>
                            <textarea
                              id={field.champ}
                              rows={3}
                              required={!!field.obligatoire}
                              placeholder={field.placeholder}
                              className="w-full px-4 py-3 rounded-lg bg-brand-cream/30 border border-brand-cream focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
                              value={formData[field.champ] || ''}
                              onChange={(e) => handleInputChange(field.champ, e.target.value)}
                            />
                          </div>
                        );
                      }
                      if (field.type === 'email' || field.type === 'tel' || field.type === 'text') {
                        // Pour email/tel, on propose le choix du mode de contact si champ email ou tel
                        if (field.type === 'email' || field.type === 'tel') {
                          const isEmail = field.type === 'email';
                          const isPhone = field.type === 'tel';
                          return (
                            <div key={field.champ}>
                              <div className="flex items-center gap-2 mb-2">
                                <input
                                  type="radio"
                                  name="contactMethod"
                                  checked={contactMethod === (isEmail ? 'email' : 'phone')}
                                  onChange={() => setContactMethod(isEmail ? 'email' : 'phone')}
                                  className="accent-brand-gold"
                                />
                                <span className="text-xs text-brand-brown font-medium cursor-pointer">
                                  {isEmail ? 'Par Email' : 'Par Téléphone'}
                                </span>
                              </div>
                              <input
                                type={field.type}
                                required={
                                  (isEmail && contactMethod === 'email') ||
                                  (isPhone && contactMethod === 'phone')
                                }
                                placeholder={field.placeholder}
                                className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-colors ${
                                  contactMethod === (isEmail ? 'email' : 'phone')
                                    ? 'border-brand-green bg-white ring-brand-green'
                                    : 'border-gray-200 bg-gray-50'
                                }`}
                                value={formData[field.champ] || ''}
                                onChange={(e) => handleInputChange(field.champ, e.target.value)}
                              />
                            </div>
                          );
                        }
                        // Champ text classique
                        // Champ text classique
                        return (
                          <div key={field.champ}>
                            <label htmlFor={field.champ} className="block text-sm font-bold text-brand-green mb-2 uppercase tracking-wide">
                              {field.label}
                            </label>
                            <input
                              type={field.type}
                              required={field.champ === 'name' ? true : !!field.obligatoire}
                              placeholder={field.placeholder}
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none"
                              value={formData[field.champ] || ''}
                              onChange={(e) => handleInputChange(field.champ, e.target.value)}
                            />
                          </div>
                        );
                      }
                      return null;
                    })}

                    <button
                      type="submit"
                      className="w-full py-3 bg-brand-gold text-brand-brown font-bold rounded-full hover:bg-opacity-90 transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 text-base shadow-sm"
                    >
                      <Send className="h-5 w-5" />
                      Envoyer la demande
                    </button>
                    <div style={{ height: '2rem' }} />
                  </form>
                </>
              )}
              
            </div>
            </Scrollbar>
         </div>

             
         
        ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <span className="text-brand-brown/60">Chargement du formulaire…</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
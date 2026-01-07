import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
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

  useEffect(() => {
    fetch('/texte/devis.json')
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
  }, []);


  // Pour les champs select (multi ou simple)
  const handleSelectChange = (champ: string, value: string) => {
    setFormData((prev: any) => {
      const current = prev[champ] || [];
      if (current.includes(value)) {
        return { ...prev, [champ]: current.filter((v: string) => v !== value) };
      } else {
        return { ...prev, [champ]: [...current, value] };
      }
    });
  };

  // Pour les autres champs
  const handleInputChange = (champ: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [champ]: value }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Form submitted:", { ...formData, preferredContact: contactMethod });
    setSubmitted(true);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-green/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-brand-gold hover:text-brand-brown transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-brand-cream" />
              </div>
              <h3 className="text-2xl font-block font-bold text-brand-green mb-4">Demande envoyée !</h3>
              <p className="text-brand-brown mb-8">
                Merci M/Mme {formData.name}. Louis Vésiez a bien reçu votre demande de devis.<br/>
                Il vous recontactera très prochainement par {contactMethod === 'email' ? 'email' : 'téléphone'}.
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
              <h3 className="text-2xl font-block font-bold text-brand-green mb-2 pr-10">Demander un devis</h3>
              <p className="text-brand-brown/70 mb-8">
                Sélectionnez vos prestations et expliquez votre besoin. Je vous réponds rapidement.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {fields.map((field) => {
                  if (field.type === 'select') {
                    // Multi-select (checkboxes)
                    return (
                      <div key={field.champ}>
                        <label className="block text-sm font-block font-bold text-brand-green mb-3 uppercase tracking-wide">
                          {field.label}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {field.options.map((option: string) => (
                            <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors flex-shrink-0 ${
                                (formData[field.champ] || []).includes(option) ? 'bg-brand-green border-brand-green' : 'border-gray-300 bg-white group-hover:border-brand-gold'
                              }`}>
                                {(formData[field.champ] || []).includes(option) && <CheckCircle className="h-3 w-3 text-white" />}
                              </div>
                              <input
                                type="checkbox"
                                className="hidden"
                                checked={(formData[field.champ] || []).includes(option)}
                                onChange={() => handleSelectChange(field.champ, option)}
                              />
                              <span className={`text-sm ${(formData[field.champ] || []).includes(option) ? 'text-brand-green font-medium' : 'text-brand-brown'}`}>
                                {option}
                              </span>
                            </label>
                          ))}
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
                    // Contact info: handle radio for contactMethod
                    if (field.type === 'email' || field.type === 'tel') {
                      return null; // handled below
                    }
                    return (
                      <div key={field.champ}>
                        <input
                          type={field.type}
                          required={!!field.obligatoire}
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

                {/* Contact Info & Preference (email/tel) */}
                <div className="bg-brand-cream/30 p-6 rounded-xl space-y-4">
                  <label className="block text-sm font-bold text-brand-green uppercase tracking-wide">
                    Vos coordonnées
                  </label>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Votre Nom / Entreprise"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none"
                      value={formData.nom || ''}
                      onChange={(e) => handleInputChange('nom', e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="flex items-center gap-2 text-xs text-brand-brown mb-2 font-medium cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          checked={contactMethod === 'email'}
                          onChange={() => setContactMethod('email')}
                          className="accent-brand-gold"
                        />
                        Par Email
                      </label>
                      <input
                        type="email"
                        required={contactMethod === 'email'}
                        placeholder="email@exemple.com"
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-colors ${
                          contactMethod === 'email'
                            ? 'border-brand-green bg-white ring-brand-green'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                        value={formData.email || ''}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="flex items-center gap-2 text-xs text-brand-brown mb-2 font-medium cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          checked={contactMethod === 'phone'}
                          onChange={() => setContactMethod('phone')}
                          className="accent-brand-gold"
                        />
                        Par Téléphone
                      </label>
                      <input
                        type="tel"
                        required={contactMethod === 'phone'}
                        placeholder="06 12 34 56 78"
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-colors ${
                          contactMethod === 'phone'
                            ? 'border-brand-green bg-white ring-brand-green'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                        value={formData.telephone || ''}
                        onChange={(e) => handleInputChange('telephone', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-gold text-brand-brown font-bold rounded-full hover:bg-opacity-90 transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 text-base shadow-sm"
                >
                  <Send className="h-5 w-5" />
                  Envoyer la demande
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
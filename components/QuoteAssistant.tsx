import React, { useState } from 'react';
import { generateEmailDraft } from '../services/geminiService';
import { Sparkles, Copy, Check } from 'lucide-react';

const QuoteAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [draft, setDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setDraft('');
    setCopied(false);
    
    const result = await generateEmailDraft(input);
    setDraft(result);
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(draft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-brand-gold/30 mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-brand-gold" />
        <h3 className="text-lg font-bold text-brand-green">Assistant de Rédaction Intelligent</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Décrivez votre besoin simplement (ex: "Je veux planter 10 hectares de patates semaine prochaine"), et notre assistant rédigera un email professionnel pour vous.
      </p>
      
      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Décrivez votre besoin ici..."
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent min-h-[80px]"
        />
        
        <button
          onClick={handleGenerate}
          disabled={isLoading || !input.trim()}
          className={`w-full py-2 px-4 rounded-md font-semibold text-white transition-all ${
            isLoading || !input.trim() 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-brand-green hover:bg-brand-brown'
          }`}
        >
          {isLoading ? 'Rédaction en cours...' : 'Générer le brouillon'}
        </button>

        {draft && (
          <div className="relative mt-4 bg-gray-50 p-4 rounded-md border border-gray-200">
            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700">{draft}</pre>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
              title="Copier le texte"
            >
              {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-600" />}
            </button>
            <div className="mt-2 text-xs text-gray-400 text-center">
              Copiez ce texte et collez-le dans votre application d'email.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteAssistant;
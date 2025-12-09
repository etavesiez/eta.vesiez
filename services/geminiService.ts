import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateEmailDraft = async (userInput: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Tu es un assistant virtuel pour le site web de l'entreprise agricole "ETA Vesiez". 
      Ton but est d'aider un client à rédiger un email formel et poli à envoyer à l'entreprise pour demander un devis ou des informations.
      
      L'utilisateur va te donner ses besoins (ex: "j'ai besoin d'un tracteur pour 2 jours" ou "prix pour arracher 5 hectares").
      
      Génère uniquement le corps du message de l'email (pas l'objet, pas les headers).
      Le ton doit être professionnel, courtois et en français.
      
      Demande utilisateur: "${userInput}"`,
    });

    return response.text || "Désolé, je n'ai pas pu générer le brouillon. Veuillez réessayer.";
  } catch (error) {
    console.error("Error generating email draft:", error);
    return "Une erreur est survenue lors de la communication avec l'assistant intelligent.";
  }
};
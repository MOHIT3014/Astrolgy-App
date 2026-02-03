import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'hi';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en', // Default to English
      setLanguage: (language) => set({ language }),
      toggleLanguage: () => set((state) => ({ 
        language: state.language === 'en' ? 'hi' : 'en' 
      })),
    }),
    {
      name: 'language-storage', // name of the item in the storage (must be unique)
    }
  )
);

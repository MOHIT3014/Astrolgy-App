import { useLanguage } from "@/store/use-language";
import { en } from "@/messages/en";
import { hi } from "@/messages/hi";

export const useTranslations = () => {
  const { language } = useLanguage();
  
  const translations = language === 'hi' ? hi : en;
  
  return translations;
};

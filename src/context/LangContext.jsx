import { createContext, useState } from "react";

export const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const handleChangeLang = (language) => {
    setLang(language);
  };
  return (
    <LangContext.Provider value={{ lang, handleChangeLang }}>
      {children}
    </LangContext.Provider>
  );
}

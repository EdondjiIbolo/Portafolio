import { useEffect, useState } from "react";
import useLang from "./useLang";

export default function useChangeLang() {
  const { lang } = useLang();
  const [doc, setDoc] = useState([]);
  useEffect(() => {
    const getFile = async (lang) => {
      const file = await fetch(`./assets/lang/${lang}.json`);
      const res = await file.json();

      setDoc(res);
    };
    getFile(lang);
  }, [lang]);
  return { doc };
}

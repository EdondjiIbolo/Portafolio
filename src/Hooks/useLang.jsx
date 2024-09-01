import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export default function useLang() {
  const contex = useContext(LangContext);
  if (contex === undefined) {
    throw new Error("Must have a provider");
  }
  return contex;
}

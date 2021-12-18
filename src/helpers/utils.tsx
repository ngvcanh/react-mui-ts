import { AppConfig } from "./constants"

export const getLanguageClient = () => {
  return window.localStorage.i18nextLng 
  ?? document.querySelector("html")?.lang 
  ?? AppConfig.LANGUAGE_DEFAULT;
}
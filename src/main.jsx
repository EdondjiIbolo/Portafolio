import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LangProvider } from "./context/LangContext.jsx";

createRoot(document.getElementById("root")).render(
  <LangProvider>
    <App />
  </LangProvider>
);

import { useState } from "react";
import useLang from "../Hooks/useLang";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [srcImage, setSrcImage] = useState("assets/icons/sun.svg");
  const LANGUAGES = ["en", "es", "cn"];
  const handleMode = () => {
    document.body.classList.toggle("dark");
    if (darkMode) {
      setSrcImage("assets/icons/sun.svg");

      setDarkMode(false);
      return;
    }
    setSrcImage("assets/icons/moon.svg");
    setDarkMode(true);
  };

  return (
    <header className="header">
      <div className="switches">
        <div id="toggle-theme" className="toggle-theme" onClick={handleMode}>
          <img
            id="toggle-icon"
            src={srcImage}
            alt="icon them"
            className="toggle-theme__icon"
          />
          <p id="toggle-text" className="toggle-theme__text">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </p>
        </div>
      </div>
      <div id="flags" className="flags">
        {LANGUAGES.map((lang, index) => (
          <Flag key={index} lang={lang} />
        ))}
      </div>
      <div id="toogle-colors" className="colors">
        <ItemsColors
          dataColor={"hsl(214,84%,56%)"}
          color={"colors__item--blue"}
        />
        <ItemsColors
          dataColor={"hsl(150,84%,56%)"}
          color={"colors__item--green"}
        />
        <ItemsColors
          dataColor={"hsl(276,84%,56%)"}
          color={"colors__item--purple"}
        />
        <ItemsColors
          dataColor={"hsl(46,84%,56%)"}
          color={"colors__item--orange"}
        />
      </div>
    </header>
  );
}

function ItemsColors({ dataColor, color }) {
  const className = `colors__item ${color}`;
  const changeColors = (e) => {
    document.documentElement.style.setProperty(
      "--primary-color",
      e.target.dataset.color
    );
  };
  return (
    <div
      data-color={dataColor}
      className={className}
      onClick={changeColors}
    ></div>
  );
}
function Flag({ lang }) {
  const { handleChangeLang, lang: language } = useLang();
  const classname = language === lang ? "flags__item active" : "flags__item";
  const handleClick = () => {
    handleChangeLang(lang);
  };
  return (
    <div className={classname} onClick={handleClick}>
      <img className="flags__img" src={`assets/icons/${lang}.svg`} alt="" />
    </div>
  );
}

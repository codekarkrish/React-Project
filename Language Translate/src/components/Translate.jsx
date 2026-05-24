import React, { useState } from "react";
import "./Translator.css";

import languages from "../data/language.json";

const Translator = () => {
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("ne");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    setTranslatedText(
      `Translated "${inputText}" from ${languages[fromLang].name} to ${languages[toLang].name}`
    );
  };

  const reverseLanguages = () => {
    const temp = fromLang;
    setFromLang(toLang);
    setToLang(temp);
  };

  const clearInput = () => {
    setInputText("");
    setTranslatedText("");
  };

  return (
    <div className="container">

      <div className="row1">

        <select
          value={fromLang}
          onChange={(e) => setFromLang(e.target.value)}
        >
          {Object.entries(languages).map(([code, lang]) => (
            <option key={code} value={code}>
              {lang.name}
            </option>
          ))}
        </select>

        <button
          className="reversesvg"
          onClick={reverseLanguages}
        >
          ⇄
        </button>

        <select
          value={toLang}
          onChange={(e) => setToLang(e.target.value)}
        >
          {Object.entries(languages).map(([code, lang]) => (
            <option key={code} value={code}>
              {lang.name}
            </option>
          ))}
        </select>

      </div>

      <div className="row2">

        <div className="inputText">

          <button
            className="removeinput"
            onClick={clearInput}
          >
            ✕
          </button>

          <textarea
            placeholder="Enter text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

        </div>

        <div className="outputText">
          {translatedText}
        </div>

      </div>

      <div className="row3">

        <button
          className="btn"
          onClick={handleTranslate}
        >
          Translate
        </button>

      </div>

    </div>
  );
};

export default Translator;
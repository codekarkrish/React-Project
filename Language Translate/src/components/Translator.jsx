import { useState } from "react";
import LanguageSelector from "./LanguageSelector";

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("hi");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${encodeURIComponent(
        text
      )}`;

      const response = await fetch(url);

      const data = await response.json();

      const translated = data[0]
        .map((item) => item[0])
        .join("");

      setTranslatedText(translated);
    } catch (error) {
      console.error(error);
      alert("Translation failed");
    }

    setLoading(false);
  };

  return (
    <div className="translator-container">
      <textarea
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="language-selectors">
        <LanguageSelector value={fromLang} onChange={setFromLang} />

        <span>➡️</span>

        <LanguageSelector value={toLang} onChange={setToLang} />
      </div>

      <button onClick={handleTranslate}>
        {loading ? "Translating..." : "Translate"}
      </button>

      <div className="output-box">
        <h3>Translated Text:</h3>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default Translator;
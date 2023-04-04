import { Language, ParsedLangCode } from "@types";

export const malformedLanguage: Language = {
  tag: "!GD2w@5&9ExiH0*JfIWN@v9w9%r3gjNT",
  description: ""
};

export const unknownLanguage: Language = {
  tag: "zazazaza",
  description: ""
};

export const goldenLanguage: Language = { 
  tag: "es", 
  description: "Spanish/Castilian" 
};

export const goldenLangCodes = [
  "af",
  "sq",
  "ar-dz",
  "ar-bh",
  "ar-eg",
  "ar-iq",
  "ar-jo",
  "ar-kw",
  "ar-lb",
  "ar-ly",
  "ar-ma",
  "ar-om",
  "ar-qa",
  "ar-sa",
  "ar-sy",
  "ar-tn",
  "ar-ae",
  "ar-ye",
  "eu",
  "be",
  "bg",
  "ca",
  "zh-hk",
  "zh-cn",
  "zh-sg",
  "zh-tw",
  "hr",
  "cs",
  "da",
  "nl-be",
  "nl",
  "en",
  "en-au",
  "en-bz",
  "en-ca",
  "en-ie",
  "en-jm",
  "en-nz",
  "en-za",
  "en-tt",
  "en-gb",
  "en-us",
  "et",
  "fo",
  "fa",
  "fi",
  "fr-be",
  "fr-ca",
  "fr-lu",
  "fr",
  "fr-ch",
  "gd",
  "de-at",
  "de-li",
  "de-lu",
  "de",
  "de-ch",
  "el",
  "he",
  "hi",
  "hu",
  "is",
  "id",
  "ga",
  "it",
  "it-ch",
  "ja",
  "ko",
  "ko",
  "ku",
  "lv",
  "lt",
  "mk",
  "ml",
  "ms",
  "mt",
  "no",
  "nb",
  "nn",
  "pl",
  "pt-br",
  "pt",
  "pa",
  "rm",
  "ro",
  "ro-md",
  "ru",
  "ru-md",
  "sr",
  "sk",
  "sl",
  "es-ar",
  "es-bo",
  "es-cl",
  "es-co",
  "es-cr",
  "es-do",
  "es-ec",
  "es-sv",
  "es-gt",
  "es-hn",
  "es-mx",
  "es-ni",
  "es-pa",
  "es-py",
  "es-pe",
  "es-pr",
  "es",
  "es-uy",
  "es-ve",
  "sv",
  "sv-fi",
  "th",
  "ts",
  "tn",
  "tr",
  "uk",
  "ur",
  "ve",
  "vi",
  "cy",
  "xh",
  "ji",
  "zu"
];

export const goldenParsedLangCodes: {[key: string]: ParsedLangCode} = {
  "af": {
    primarySubTag: "af",
    extendedSubTags: []
  },
  "sq": {
    primarySubTag: "sq",
    extendedSubTags: []
  },
  "ar-dz": {
    primarySubTag: "ar",
    extendedSubTags: ["dz"]
  },
  "ar-bh": {
    primarySubTag: "ar",
    extendedSubTags: ["bh"]
  },
  "ar-eg": {
    primarySubTag: "ar",
    extendedSubTags: ["eg"]
  },
  "ar-iq": {
    primarySubTag: "ar",
    extendedSubTags: ["iq"]
  },
  "ar-jo": {
    primarySubTag: "ar",
    extendedSubTags: ["jo"]
  },
  "ar-kw": {
    primarySubTag: "ar",
    extendedSubTags: ["kw"]
  },
};
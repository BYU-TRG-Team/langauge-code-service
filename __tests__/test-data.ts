import Language from "@language";
import { IANALanguage } from "@typings";

export const TEST_MALFORMED_LANG_TAG = "en!";
export const TEST_UNKNOWN_LANG_TAG = "fr";
export const TEST_ES_GOLDEN_IANA_LANGUAGE: IANALanguage = { 
  tag: "es", 
  description: "Spanish/Castilian" 
};
export const TEST_EN_GOLDEN_IANA_LANGUAGE: IANALanguage = { 
  tag: "en", 
  description: "English" 
};
export const TEST_ES_GOLDEN_LANGUAGE: Language = new Language(
  {
    primary: "es",
    extended: []
  },
  "Spanish/Castilian" 
);
export const TEST_EN_GOLDEN_LANGUAGE: Language = new Language(
  {
    primary: "en",
    extended: []
  },
  "English"  
);
export const TEST_IANA_LANGUAGE_REGISTRY_RESPONSE = `
%%
Type: language
Subtag: es
Description: Spanish
Description: Castilian
Added: 2005-10-16
Suppress-Script: Latn
%%
Type: language
Subtag: en
Description: English
Added: 2005-10-16
Suppress-Script: Latn
`;
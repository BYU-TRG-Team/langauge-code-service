import Language from "../src/language";
import { IANALanguage } from "../src/types";
export declare const TEST_MALFORMED_LANG_TAG = "en!";
export declare const TEST_UNKNOWN_LANG_TAG = "fr";
export declare const TEST_ES_GOLDEN_IANA_LANGUAGE: IANALanguage;
export declare const TEST_EN_GOLDEN_IANA_LANGUAGE: IANALanguage;
export declare const TEST_ES_GOLDEN_LANGUAGE: Language;
export declare const TEST_EN_GOLDEN_LANGUAGE: Language;
export declare const TEST_IANA_LANGUAGE_REGISTRY_RESPONSE = "\n%%\nType: language\nSubtag: es\nDescription: Spanish\nDescription: Castilian\nAdded: 2005-10-16\nSuppress-Script: Latn\n%%\nType: language\nSubtag: en\nDescription: English\nAdded: 2005-10-16\nSuppress-Script: Latn\n";

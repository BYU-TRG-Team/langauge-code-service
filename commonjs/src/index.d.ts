import { IANALanguage } from "./types";
import Language from "./language";
/**
 * Retrieves all languages from the IANA Language Subtag Registry.
 */
export declare const getAllLanguages: () => IANALanguage[];
/**
 * Retrieves a language using a provided language tag.
 *
 * The primary subtag of the provided language tag will be used to query the IANA Language Subtag Registry.
 * Extended subtags will be derived from the provided language tag.
 *
 * Errors will be thrown if the provided language tag does not follow BCP 47 format or if its primary subtag does not exist in the IANA Language Subtag Registry.
 */
export declare const getLanguage: (langTag: string) => Language;
export * from "./types";

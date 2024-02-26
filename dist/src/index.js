import { languageRegistry } from "./data.js";
import { IANA_LANGUAGE_REGISTRY_URL } from "./language-registry-fetcher/constants.js";
import Language from "./language.js";
const BCP47Validator = new RegExp("^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$");
/**
 * Retrieves all languages from the IANA Language Subtag Registry.
 */
export const getAllLanguages = () => languageRegistry;
/**
 * Retrieves a language using a provided language tag.
 *
 * The primary subtag of the provided language tag will be used to query the IANA Language Subtag Registry.
 * Extended subtags will be derived from the provided language tag.
 *
 * Errors will be thrown if the provided language tag does not follow BCP 47 format or if its primary subtag does not exist in the IANA Language Subtag Registry.
 */
export const getLanguage = (langTag) => {
    if (!BCP47Validator.test(langTag)) {
        throw new Error(`
      Error: Language tag "${langTag}" does not follow BCP 47 format.
    `);
    }
    const subtags = langTag.split("-").map(subTag => subTag.toLowerCase()).reduce((prev, curr, index) => ({
        primary: index === 0 ? curr : prev.primary,
        extended: index === 0 ? prev.extended : [...prev.extended, curr]
    }), {
        primary: "",
        extended: []
    });
    const matchedLanguage = languageRegistry.find((language) => language.tag === subtags.primary);
    if (matchedLanguage === undefined) {
        throw new Error(`
      Error: Language subtag "${subtags.primary}" does not exist in the IANA Language Subtag Registry

      Please see ${IANA_LANGUAGE_REGISTRY_URL} for supported subtags.
    `);
    }
    return new Language(subtags, matchedLanguage.description);
};
export * from "./types.js";
//# sourceMappingURL=index.js.map
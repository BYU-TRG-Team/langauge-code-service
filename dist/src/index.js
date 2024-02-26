import { languageRegistry } from "./data.js";
class LanguageCodeService {
    constructor() {
        this.languages = languageRegistry;
        this.BCP47Validator = new RegExp("^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$");
    }
    validateLangCode(langTag) {
        const parsedLangTag = this.parseLangCode(langTag);
        if (parsedLangTag == null) {
            return {
                OK: false,
                error: `Error: Language tag "${langTag}" does not follow BCP 47 format.`
            };
        }
        if (this.getLanguage(langTag) == null) {
            return {
                OK: false,
                error: `Error: Language subtag "${parsedLangTag.primarySubTag}" does not exist in the IANA Language Subtag Registry\nPlease see https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry for supported subtags.`
            };
        }
        return {
            OK: true,
            error: ""
        };
    }
    parseLangCode(langTag) {
        if (!this.BCP47Validator.test(langTag)) {
            return null;
        }
        const subTags = langTag.split("-");
        return {
            primarySubTag: subTags[0],
            extendedSubTags: subTags.slice(1, subTags.length + 1)
        };
    }
    getLanguage(langTag) {
        const parsedLangTag = this.parseLangCode(langTag);
        if (parsedLangTag == null) {
            return null;
        }
        const primarySubTag = parsedLangTag.primarySubTag.toLowerCase();
        const matchedLanguages = this.languages.filter((language) => language.tag.toLowerCase() === primarySubTag);
        return matchedLanguages.length > 0 ? matchedLanguages[0] : null;
    }
    getAllLanguages() {
        return this.languages;
    }
}
export default LanguageCodeService;
export * from "./types.js";
//# sourceMappingURL=index.js.map
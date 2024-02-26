import { Language, ParsedLangCode } from "./types";
declare class LanguageCodeService {
    private languages;
    private BCP47Validator;
    validateLangCode(langTag: string): {
        OK: boolean;
        error: string;
    };
    parseLangCode(langTag: string): (ParsedLangCode | null);
    getLanguage(langTag: string): Language | null;
    getAllLanguages(): Language[];
}
export default LanguageCodeService;
export * from "./types";

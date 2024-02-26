var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import LanguageCodeService from "../../src/index.js";
import { goldenLangCodes, goldenLanguage, goldenParsedLangCodes, malformedLanguage, unknownLanguage } from "../test-data.js";
describe("test getAllLanguages method", () => {
    const languageCodeService = new LanguageCodeService();
    test("should return a list of one or more languages", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(languageCodeService.getAllLanguages().length).toBeGreaterThanOrEqual(1);
    }));
});
describe("test getLanguage method", () => {
    const languageCodeService = new LanguageCodeService();
    test("should return the correct data for the golden language", () => {
        const language = languageCodeService.getLanguage(goldenLanguage.tag);
        expect(language === null || language === void 0 ? void 0 : language.tag).toBe(goldenLanguage.tag);
        expect(language === null || language === void 0 ? void 0 : language.description).toBe(goldenLanguage.description);
    });
    test("should return null for malformed language", () => {
        const language = languageCodeService.getLanguage(malformedLanguage.tag);
        expect(language).toBeNull();
    });
    test("should return null for unknown language", () => {
        const language = languageCodeService.getLanguage(unknownLanguage.tag);
        expect(language).toBeNull();
    });
});
describe("test validateLangCode method", () => {
    const languageCodeService = new LanguageCodeService();
    test("should return OK for all golden language codes", () => {
        goldenLangCodes.forEach(langCode => {
            const validationResponse = languageCodeService.validateLangCode(langCode);
            expect(validationResponse.OK).toBeTruthy();
        });
    });
    test("should return null for malformed language", () => {
        const validationResponse = languageCodeService.validateLangCode(malformedLanguage.tag);
        expect(validationResponse.OK).toBeFalsy();
    });
    test("should return null for unknown language", () => {
        const validationResponse = languageCodeService.validateLangCode(unknownLanguage.tag);
        expect(validationResponse.OK).toBeFalsy();
    });
});
describe("parseLangCode method", () => {
    const languageCodeService = new LanguageCodeService();
    test("should return valid data for all golden parsed language codes", () => {
        Object.keys(goldenParsedLangCodes).forEach(langCode => {
            const parsedLangCode = languageCodeService.parseLangCode(langCode);
            expect(parsedLangCode).toStrictEqual(goldenParsedLangCodes[langCode]);
        });
    });
    test("should return null for malformed language", () => {
        const parsedLangCode = languageCodeService.parseLangCode(malformedLanguage.tag);
        expect(parsedLangCode).toBeNull();
    });
    test("should return null for unknown language", () => {
        const parsedLangCode = languageCodeService.parseLangCode(malformedLanguage.tag);
        expect(parsedLangCode).toBeNull();
    });
});
//# sourceMappingURL=index.test.js.map
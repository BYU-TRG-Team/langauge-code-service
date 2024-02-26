var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllLanguages, getLanguage, } from "../../src/index.js";
import { TEST_EN_GOLDEN_IANA_LANGUAGE, TEST_ES_GOLDEN_IANA_LANGUAGE, TEST_ES_GOLDEN_LANGUAGE, TEST_MALFORMED_LANG_TAG, TEST_UNKNOWN_LANG_TAG, } from "../test-data.js";
jest.mock("@data");
describe("test getAllLanguages method", () => {
    test("should return a list of languages", () => __awaiter(void 0, void 0, void 0, function* () {
        const languages = getAllLanguages();
        expect(languages.length).toStrictEqual(2);
        expect(languages).toContainEqual(TEST_EN_GOLDEN_IANA_LANGUAGE);
        expect(languages).toContainEqual(TEST_ES_GOLDEN_IANA_LANGUAGE);
    }));
});
describe("test getLanguage method", () => {
    test("should return the correct data for a golden language", () => {
        const language = getLanguage(TEST_ES_GOLDEN_LANGUAGE.tag);
        expect(language).toEqual(TEST_ES_GOLDEN_LANGUAGE);
    });
    test("should throw an error for a malformed lang tag", () => {
        expect(() => getLanguage(TEST_MALFORMED_LANG_TAG)).toThrowError();
    });
    test("should throw an error for an unknown lang tag", () => {
        expect(() => getLanguage(TEST_UNKNOWN_LANG_TAG)).toThrowError();
    });
});
//# sourceMappingURL=index.test.js.map
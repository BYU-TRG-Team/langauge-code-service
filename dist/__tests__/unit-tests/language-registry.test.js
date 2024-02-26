var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { retrieveLanguageRegistry } from "../../src/language-registry-fetcher/helpers.js";
describe("test retrieveLanguageRegistry method", () => {
    test("should return a list of one or more languages", () => __awaiter(void 0, void 0, void 0, function* () {
        const languages = yield retrieveLanguageRegistry();
        expect(languages.length).toBeGreaterThanOrEqual(1);
    }));
    test("should return a list of languages where each tag matches BCP 47 format", () => __awaiter(void 0, void 0, void 0, function* () {
        const languages = yield retrieveLanguageRegistry();
        const subTagValidator = new RegExp("^[a-zA-Z]{1,8}$");
        languages.forEach(language => {
            expect(subTagValidator.test(`${language.tag}`)).toBeTruthy();
        });
    }));
});
//# sourceMappingURL=language-registry.test.js.map
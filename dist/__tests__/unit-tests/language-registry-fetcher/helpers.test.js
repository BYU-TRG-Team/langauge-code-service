var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { retrieveLanguageRegistry } from "../../../src/language-registry-fetcher/helpers.js";
import { TEST_EN_GOLDEN_IANA_LANGUAGE, TEST_ES_GOLDEN_IANA_LANGUAGE, TEST_IANA_LANGUAGE_REGISTRY_RESPONSE } from "../../test-data.js";
import { Response } from "node-fetch";
describe("test retrieveLanguageRegistry method", () => {
    test("should return a list of languages", () => __awaiter(void 0, void 0, void 0, function* () {
        jest.spyOn(Response.prototype, "text").mockResolvedValue(TEST_IANA_LANGUAGE_REGISTRY_RESPONSE);
        const languages = yield retrieveLanguageRegistry();
        expect(languages.length).toStrictEqual(2);
        expect(languages).toContainEqual(TEST_EN_GOLDEN_IANA_LANGUAGE);
        expect(languages).toContainEqual(TEST_ES_GOLDEN_IANA_LANGUAGE);
    }));
});
//# sourceMappingURL=helpers.test.js.map
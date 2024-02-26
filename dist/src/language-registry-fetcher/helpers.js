var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
import { IANA_LANGUAGE_REGISTRY_URL } from "./constants.js";
import { IANA_LANGUAGE_TAG } from "./types.js";
export const retrieveLanguageRegistry = () => __awaiter(void 0, void 0, void 0, function* () {
    const languages = new Array();
    const rawLangRegistry = yield (yield fetch(IANA_LANGUAGE_REGISTRY_URL)).text();
    rawLangRegistry
        .split("%%")
        .filter((blob) => blob.includes(`${IANA_LANGUAGE_TAG.Type}: language`) && !blob.includes(`${IANA_LANGUAGE_TAG.Scope}: private-use`))
        .forEach((blob) => {
        const language = {
            tag: "",
            description: "",
        };
        const blobSections = blob.split(/:|\n/);
        let index = 0;
        while (index < blobSections.length) {
            if (blobSections[index] === IANA_LANGUAGE_TAG.Description) {
                let description = "";
                index += 1;
                while (index < blobSections.length && !(blobSections[index] in IANA_LANGUAGE_TAG)) {
                    description += blobSections[index];
                    index += 1;
                }
                if (language.description.length > 0) {
                    language.description += "/";
                }
                language.description += description.trim();
            }
            else if (blobSections[index] === IANA_LANGUAGE_TAG.Subtag) {
                let tag = "";
                index += 1;
                while (index < blobSections.length && !(blobSections[index] in IANA_LANGUAGE_TAG)) {
                    tag += blobSections[index];
                    index += 1;
                }
                language.tag += tag.trim();
            }
            else {
                index += 1;
            }
        }
        languages.push(language);
    });
    return languages;
});
//# sourceMappingURL=helpers.js.map
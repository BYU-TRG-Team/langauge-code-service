"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveLanguageRegistry = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const constants_1 = require("./constants");
const types_1 = require("./types");
const retrieveLanguageRegistry = () => __awaiter(void 0, void 0, void 0, function* () {
    const languages = new Array();
    const rawLangRegistry = yield (yield (0, node_fetch_1.default)(constants_1.IANA_LANGUAGE_REGISTRY_URL)).text();
    rawLangRegistry
        .split("%%")
        .filter((blob) => blob.includes(`${types_1.IANA_LANGUAGE_TAG.Type}: language`) && !blob.includes(`${types_1.IANA_LANGUAGE_TAG.Scope}: private-use`))
        .forEach((blob) => {
        const language = {
            tag: "",
            description: "",
        };
        const blobSections = blob.split(/:|\n/);
        let index = 0;
        while (index < blobSections.length) {
            if (blobSections[index] === types_1.IANA_LANGUAGE_TAG.Description) {
                let description = "";
                index += 1;
                while (index < blobSections.length && !(blobSections[index] in types_1.IANA_LANGUAGE_TAG)) {
                    description += blobSections[index];
                    index += 1;
                }
                if (language.description.length > 0) {
                    language.description += "/";
                }
                language.description += description.trim();
            }
            else if (blobSections[index] === types_1.IANA_LANGUAGE_TAG.Subtag) {
                let tag = "";
                index += 1;
                while (index < blobSections.length && !(blobSections[index] in types_1.IANA_LANGUAGE_TAG)) {
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
exports.retrieveLanguageRegistry = retrieveLanguageRegistry;
//# sourceMappingURL=helpers.js.map
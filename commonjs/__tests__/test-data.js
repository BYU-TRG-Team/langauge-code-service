"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_IANA_LANGUAGE_REGISTRY_RESPONSE = exports.TEST_EN_GOLDEN_LANGUAGE = exports.TEST_ES_GOLDEN_LANGUAGE = exports.TEST_EN_GOLDEN_IANA_LANGUAGE = exports.TEST_ES_GOLDEN_IANA_LANGUAGE = exports.TEST_UNKNOWN_LANG_TAG = exports.TEST_MALFORMED_LANG_TAG = void 0;
const _language_1 = __importDefault(require("../src/language"));
exports.TEST_MALFORMED_LANG_TAG = "en!";
exports.TEST_UNKNOWN_LANG_TAG = "fr";
exports.TEST_ES_GOLDEN_IANA_LANGUAGE = {
    tag: "es",
    description: "Spanish/Castilian"
};
exports.TEST_EN_GOLDEN_IANA_LANGUAGE = {
    tag: "en",
    description: "English"
};
exports.TEST_ES_GOLDEN_LANGUAGE = new _language_1.default({
    primary: "es",
    extended: []
}, "Spanish/Castilian");
exports.TEST_EN_GOLDEN_LANGUAGE = new _language_1.default({
    primary: "en",
    extended: []
}, "English");
exports.TEST_IANA_LANGUAGE_REGISTRY_RESPONSE = `
%%
Type: language
Subtag: es
Description: Spanish
Description: Castilian
Added: 2005-10-16
Suppress-Script: Latn
%%
Type: language
Subtag: en
Description: English
Added: 2005-10-16
Suppress-Script: Latn
`;
//# sourceMappingURL=test-data.js.map
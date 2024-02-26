import Language from "../src/language.js";
export const TEST_MALFORMED_LANG_TAG = "en!";
export const TEST_UNKNOWN_LANG_TAG = "fr";
export const TEST_ES_GOLDEN_IANA_LANGUAGE = {
    tag: "es",
    description: "Spanish/Castilian"
};
export const TEST_EN_GOLDEN_IANA_LANGUAGE = {
    tag: "en",
    description: "English"
};
export const TEST_ES_GOLDEN_LANGUAGE = new Language({
    primary: "es",
    extended: []
}, "Spanish/Castilian");
export const TEST_EN_GOLDEN_LANGUAGE = new Language({
    primary: "en",
    extended: []
}, "English");
export const TEST_IANA_LANGUAGE_REGISTRY_RESPONSE = `
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
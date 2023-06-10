import {
  getAllLanguages,
  getLanguage,
} from "@";

import { 
  TEST_EN_GOLDEN_IANA_LANGUAGE,
  TEST_ES_GOLDEN_IANA_LANGUAGE,
  TEST_ES_GOLDEN_LANGUAGE,
  TEST_MALFORMED_LANG_TAG,
  TEST_UNKNOWN_LANG_TAG,
} from "@tests/test-data";

jest.mock("@data");

describe("test getAllLanguages method", () => {
  test("should return a list of languages", async () => {
    const languages = getAllLanguages();

    expect(languages.length).toStrictEqual(2);
    expect(languages).toContainEqual(TEST_EN_GOLDEN_IANA_LANGUAGE);
    expect(languages).toContainEqual(TEST_ES_GOLDEN_IANA_LANGUAGE);
  });
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
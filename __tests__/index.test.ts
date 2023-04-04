import LanguageCodeService from "@";
import { goldenLangCodes, goldenLanguage, goldenParsedLangCodes, malformedLanguage, unknownLanguage } from "./test_data";

describe("test getAllLanguages method", () => {
  const languageCodeService = new LanguageCodeService();

  test("should return a list of one or more languages", async () => {
    expect(languageCodeService.getAllLanguages().length).toBeGreaterThanOrEqual(1);
  });
});

describe("test getLanguage method", () => {
  const languageCodeService = new LanguageCodeService();

  test("should return the correct data for the golden language", () => {
    const language = languageCodeService.getLanguage(goldenLanguage.tag);
  
    expect(language?.tag).toBe(goldenLanguage.tag);
    expect(language?.description).toBe(goldenLanguage.description); 
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

  test ("should return OK for all golden language codes", () => {
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

  test ("should return valid data for all golden parsed language codes", () => {
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
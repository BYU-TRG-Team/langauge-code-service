import { retrieveLanguageRegistry } from  "@language-registry-fetcher/helpers";

describe("test retrieveLanguageRegistry method", () => {
  test("should return a list of one or more languages", async () => {
    const languages = await retrieveLanguageRegistry();

    expect(languages.length).toBeGreaterThanOrEqual(1);
  });

  test("should return a list of languages where each tag matches BCP 47 format", async () => {
    const languages = await retrieveLanguageRegistry();
    const subTagValidator = new RegExp("^[a-zA-Z]{1,8}$");

    languages.forEach(language => {
      expect(subTagValidator.test(`${language.tag}`)).toBeTruthy();
    });
  });
});
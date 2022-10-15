import { fetchLanguages } from "../src/helpers"

describe("test fetchLanguages method", () => {
  test("should return a list of one or more languages", async () => {
    const languages = await fetchLanguages();

    expect(languages.length).toBeGreaterThanOrEqual(1)
  })

  test("should return a list of languages where each tag matches BCP 47 format", async () => {
    const languages = await fetchLanguages()
    const subTagValidator = new RegExp("^[a-zA-Z]{1,8}$")

    languages.forEach(language => {
      expect(subTagValidator.test(`${language.tag}`)).toBeTruthy()
    })
  })
})
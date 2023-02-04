import { languageRegistry } from "./data"
import { Language, ParsedLangCode } from "./types"

class LanguageCodeService {
  private languages = languageRegistry
  private BCP47Validator = new RegExp("^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$")

  public validateLangCode(langTag: string): { OK: boolean, error: string }  {
    const parsedLangTag = this.parseLangCode(langTag)

    if (parsedLangTag == null) {
      return {
        OK: false,
        error: `Error: Language tag "${langTag}" does not follow BCP 47 format.`
      }
    }

    if (this.getLanguage(langTag) == null) {
      return {
        OK: false,
        error: `Error: Language subtag "${parsedLangTag.primarySubTag}" does not exist in the IANA Language Subtag Registry\nPlease see https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry for supported subtags.`
      }
    }

    return {
      OK: true,
      error: ""
    }
  }

  public parseLangCode(langTag: string): (ParsedLangCode | null) {
    if (!this.BCP47Validator.test(langTag)) {
      return null
    }

    const subTags = langTag.split("-")
    
    return {
      primarySubTag: subTags[0],
      extendedSubTags: subTags.slice(1, subTags.length + 1)
    }

  }
  
  public getLanguage(langTag: string): Language | null {
    const parsedLangTag = this.parseLangCode(langTag)

    if (parsedLangTag == null) {
      return null
    }

    let matchedLanguages = this.languages.filter((language) => language.tag == parsedLangTag.primarySubTag)

    return matchedLanguages.length > 0 ? matchedLanguages[0] : null
  }

  public getAllLanguages(): Language[] {
    return this.languages
  }
}

export default LanguageCodeService
export * from "./types"
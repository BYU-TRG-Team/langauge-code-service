# Language Code Service

Library for interfacing with ISO 639 language codes.

## Usage

```
import LanguageCodeService from "language-code-service"

const languageCodeService = new LanguageCodeService()

await languageCodeService.init()
```

## Methods

```
# Needs to be called during initialization to load languages from the IANA Language Subtag Registry

async init()
```

```
# Validates that a language code follows BCP 47 format and that the primary subtag exists in the IANA Language Subtag Registry

validateLangCode(langTag: string): { OK: boolean, error: string }
```

```
# Parses the subtags for a given language code

parseLangCode(langTag: string): (ParsedLangCode | {
  primarySubTag: string,
  extendedSubTags: string[]
})
```


```
# Retrieves a language from the IANA Language Subtag Registry

getLanguage(langTag: string): {
  tag: string;
  description: string
} | null
```

```
# Retrieves all languages from the IANA Language Subtag Registry

getAllLanguages(): {
  tag: string;
  description: string
}[]
```

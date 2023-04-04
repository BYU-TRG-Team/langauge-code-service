# Language Code Service

Library for interfacting with the IANA Language Subtag Registry.

The IANA Language Subtag Registry is not fetched in real time and is instead cached within the library upon every release. 

## Usage

```
import LanguageCodeService from "language-code-service";

const languageCodeService = new LanguageCodeService();
```

## Methods
```
# Validates that a given language code conforms to BCP 47 and that the primary subtag exists in the IANA Language Subtag Registry.

validateLangCode(langTag: string): { OK: boolean, error: string }
```

```
# Returns subtags for a given language code.

parseLangCode(langTag: string): (null | {
  primarySubTag: string,
  extendedSubTags: string[]
})
```

```
# Retrieves a language using a given language code. The primary subtag of the language code will be used to query the IANA Language Subtag Registry.

getLanguage(langTag: string): {
  tag: string;
  description: string
} | null
```

```
# Retrieves all languages from the IANA Language Subtag Registry.

getAllLanguages(): {
  tag: string;
  description: string
}[]
```

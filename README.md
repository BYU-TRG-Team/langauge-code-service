# Language Code Service

Library for interfacing with the IANA Language Subtag Registry.

The IANA Language Subtag Registry is not fetched in real time and is instead cached within the library upon every release. 

**NOTE: This library is now deprecated and is no longer published as an NPM package**

A version can be published to a branch in this repo on an as needed basis using the following instructions:

```
# Checkout new local branch
TARGET_RELEASE_VERSION=<release version>
git checkout -b "release/v${TARGET_RELEASE_VERSION}"
git reset --hard "v${TARGET_RELEASE_VERSION}"

# Build library
npm ci
npm run build
rm .gitignore
cat .npmignore | xargs rm -rf

# Commit changes
git add .
git commit -m "Release ${TARGET_RELEASE_VERSION} (published)" --no-verify

# Push branch to remote and add tag
git push origin "release/v${TARGET_RELEASE_VERSION}"
git tag "release-${TARGET_RELEASE_VERSION}"
git push origin "release-${TARGET_RELEASE_VERSION}"
```

## Types

```
interface IANALanguage {
  tag: string,
  description: string
}
```

```
interface Subtags {
  primary: string;
  extended: string[];
}
```

```
class Language {
  readonly subtags: Subtags;
  readonly description: string;
  get tag(): string;
}
```

## Methods

```
/** 
 * Retrieves all languages from the IANA Language Subtag Registry.
 */
getAllLanguages(): IANALanguage[]
```
```
/** 
 * Retrieves a language using a provided language tag. 
 * 
 * The primary subtag of the provided language tag will be used to query the IANA Language Subtag Registry. 
 * Extended subtags will be derived from the provided language tag.
 *
 * Errors will be thrown if the provided language tag does not follow BCP 47 format or if its primary subtag does not exist in the IANA Language Subtag Registry.
 */
getLanguage = (langTag: string): Language
```

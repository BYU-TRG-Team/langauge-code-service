import fetch from "node-fetch";
import { IANA_LANGUAGE_REGISTRY_URL, IANA_LANGUAGE_TAGS } from "@language_registry_fetcher/constants";
import { Language } from "@typings";

export const retrieveLanguageRegistry = async () => {
  const languages = new Array<Language>();
  const rawLangRegistry = await (await fetch(IANA_LANGUAGE_REGISTRY_URL)).text();

  rawLangRegistry
    .split("%%")
    .filter((blob) => blob.includes(`${IANA_LANGUAGE_TAGS.Type}: language`) && !blob.includes(`${IANA_LANGUAGE_TAGS.Scope}: private-use`))
    .forEach((blob) => {
      const language = {
        tag: "",
        description: "",
      } as Language;
      const blobSections = blob.split(/:|\n/);

      let index = 0;
      while (index < blobSections.length) {
        if (blobSections[index] === IANA_LANGUAGE_TAGS.Description) {
          let description = "";
          index += 1;
            
          while (index < blobSections.length && !(blobSections[index] in IANA_LANGUAGE_TAGS)) {
            description += blobSections[index];
            index += 1;
          }

          if (language.description.length > 0) {
            language.description += "/";
          }

          language.description += description.trim();
        } else if (blobSections[index] === IANA_LANGUAGE_TAGS.Subtag) {
          let tag = "";
          index += 1;
            
          while (index < blobSections.length && !(blobSections[index] in IANA_LANGUAGE_TAGS)) {
            tag += blobSections[index];
            index += 1;
          }

          language.tag += tag.trim();
        } else {
          index += 1;
        }
      }

      languages.push(language);
    }); 
  
  return languages;
};
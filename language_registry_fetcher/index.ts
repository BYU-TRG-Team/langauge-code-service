import { retrieveLanguageRegistry } from "./helpers";
import { writeFile } from "fs";

const fetchLanguages = async () => {
  const languages = await retrieveLanguageRegistry()

  writeFile(
    "../src/data.ts",
    `
    import { Language } from "../src/types"

    // Fetched on ${(new Date()).toUTCString()}
    export const languageRegistry: Language[] = ${JSON.stringify(languages)}
    `,
    function (err) {
      if (err) {
          console.error('Crap happens');
      }
    }
  )
}

fetchLanguages()
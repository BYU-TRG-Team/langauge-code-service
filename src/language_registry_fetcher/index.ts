import { retrieveLanguageRegistry } from "@language_registry_fetcher/helpers";

const exportLanguageRegistryToStdOut = async () => {
  const languages = await retrieveLanguageRegistry();

  console.log(languages);
};

exportLanguageRegistryToStdOut();
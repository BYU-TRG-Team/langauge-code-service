import { retrieveLanguageRegistry } from "@language-registry-fetcher/helpers";

const exportLanguageRegistryToStdOut = async () => {
  const languages = await retrieveLanguageRegistry();

  console.dir(
    languages, {"maxArrayLength": null}
  );
};

exportLanguageRegistryToStdOut();
import { retrieveLanguageRegistry } from  "@language-registry-fetcher/helpers";
import { TEST_EN_GOLDEN_IANA_LANGUAGE, TEST_ES_GOLDEN_IANA_LANGUAGE, TEST_IANA_LANGUAGE_REGISTRY_RESPONSE } from "@tests/test-data";
import { Response } from "node-fetch";

describe("test retrieveLanguageRegistry method", () => {
  test("should return a list of languages", async () => {
    jest.spyOn(Response.prototype, "text").mockResolvedValue(TEST_IANA_LANGUAGE_REGISTRY_RESPONSE);

    const languages = await retrieveLanguageRegistry();

    expect(languages.length).toStrictEqual(2);
    expect(languages).toContainEqual(TEST_EN_GOLDEN_IANA_LANGUAGE);
    expect(languages).toContainEqual(TEST_ES_GOLDEN_IANA_LANGUAGE);
  });
});
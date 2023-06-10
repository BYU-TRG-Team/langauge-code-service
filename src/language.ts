import { Subtags } from "@typings";

class Language {
  constructor(
    public readonly subtags: Subtags, 
    public readonly description: string
  ) {}

  get tag() {
    return [
      this.subtags.primary,
      ...this.subtags.extended
    ].join("-");
  }
}

export default Language;
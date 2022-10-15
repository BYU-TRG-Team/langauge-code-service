export interface Language {
  tag: string;
  description: string
}

export interface ParsedLangCode {
  primarySubTag: string,
  extendedSubTags: string[]
}
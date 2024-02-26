import { Subtags } from "./types";
declare class Language {
    readonly subtags: Subtags;
    readonly description: string;
    constructor(subtags: Subtags, description: string);
    get tag(): string;
}
export default Language;

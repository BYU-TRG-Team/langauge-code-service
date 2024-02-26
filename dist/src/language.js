class Language {
    constructor(subtags, description) {
        this.subtags = subtags;
        this.description = description;
    }
    get tag() {
        return [
            this.subtags.primary,
            ...this.subtags.extended
        ].join("-");
    }
}
export default Language;
//# sourceMappingURL=language.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Language;
//# sourceMappingURL=language.js.map
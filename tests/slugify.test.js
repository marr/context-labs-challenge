import { describe, expect, it } from "vitest";
import slugify from "~/utils/slugify";

describe("slugify", () => {
    it("replaces spaces and hyphenates", () => {
        const slug = slugify('David Marr')
        expect(slug).toBe('david-marr');
    });
    
    it("strips tags", () => {
        let slug = slugify('David<br>Marr')
        expect(slug).toBe('davidmarr');
        slug = slugify('David <strong>Marr</strong>');
        expect(slug).toBe('david-marr');
    });
});
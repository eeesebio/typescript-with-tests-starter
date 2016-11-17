"use strict";

import "jest";

import { Bidule } from "./bidule";

describe("Bidule ", () => {
    it("Should be able to create a bidule with no name", () => {
        const bidule = new Bidule();
        expect(bidule).not.toBe(undefined);
        expect(bidule.getName()).toBe(undefined);
    });
    it("Should be able to create a bidule with a name", () => {
        const bidule = new Bidule("machin");
        expect(bidule).not.toBe(undefined);
        expect(bidule.getName()).toBe("machin");
    });
});

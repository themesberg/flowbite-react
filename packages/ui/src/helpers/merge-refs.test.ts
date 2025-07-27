import { describe, expect, it, mock } from "bun:test";
import type { RefObject } from "react";
import { mergeRefs } from "./merge-refs";

describe("mergeRefs", () => {
  it("should handle multiple mutable refs", () => {
    const ref1: RefObject<string> = { current: null };
    const ref2: RefObject<string> = { current: null };
    const value = "test";

    const mergedRef = mergeRefs([ref1, ref2]);
    mergedRef(value);

    expect(ref1.current).toBe(value);
    expect(ref2.current).toBe(value);
  });

  it("should handle callback refs", () => {
    const callbackRef = mock();
    const value = "test";

    const mergedRef = mergeRefs([callbackRef]);
    mergedRef(value);

    expect(callbackRef).toHaveBeenCalledWith(value);
  });

  it("should handle mixture of mutable and callback refs", () => {
    const mutableRef: RefObject<string> = { current: null };
    const callbackRef = mock();
    const value = "test";

    const mergedRef = mergeRefs([mutableRef, callbackRef]);
    mergedRef(value);

    expect(mutableRef.current).toBe(value);
    expect(callbackRef).toHaveBeenCalledWith(value);
  });

  it("should handle null and undefined refs", () => {
    const ref1: RefObject<string> = { current: null };
    const value = "test";

    const mergedRef = mergeRefs([ref1, null, undefined]);
    mergedRef(value);

    expect(ref1.current).toBe(value);
  });
});

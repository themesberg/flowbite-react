import { describe, expect, it } from 'vitest';
import { mergeDeep } from './merge-deep';

describe('Helpers / Merge deep', () => {
  it('should merge keys that do not exist in target', () => {
    const target = {};
    const source = { foo: 'bar' };

    const result = mergeDeep(target, source);

    expect(result).to.deep.equal({ foo: 'bar' });
  });

  it('should merge keys that do not exist in source', () => {
    const target = { foo: 'bar' };
    const source = {};

    const result = mergeDeep(target, source);

    expect(result).to.deep.equal({ foo: 'bar' });
  });

  it('should override target key if source key is identical', () => {
    const target = { foo: { bar: 'baz' } };
    const source = { foo: { bar: 'foobar' } };

    const result = mergeDeep(target, source);

    expect(result).to.deep.equal({ foo: { bar: 'foobar' } });
  });

  it('should merge keys and do not mutate target and source', () => {
    const target = {
      foo: { a: 1, b: { c: 2, f: { g: 3 } } },
      baz: 5,
    };

    const source = {
      foo: { b: { c: 3, d: 3 } },
      bar: { a: 1 },
    };

    const result = mergeDeep(target, source);

    expect(result).to.deep.equal({ foo: { a: 1, b: { c: 3, d: 3, f: { g: 3 } } }, baz: 5, bar: { a: 1 } });

    expect(target).to.deep.equal({
      foo: { a: 1, b: { c: 2, f: { g: 3 } } },
      baz: 5,
    });

    expect(source).to.deep.equal({
      foo: { b: { c: 3, d: 3 } },
      bar: { a: 1 },
    });

    result.foo.b.c = 97;
    result.baz = 98;
    result.bar.a = 99;

    expect(result).to.deep.equal({ foo: { a: 1, b: { c: 97, d: 3, f: { g: 3 } } }, baz: 98, bar: { a: 99 } });

    expect(target).to.deep.equal({
      foo: { a: 1, b: { c: 2, f: { g: 3 } } },
      baz: 5,
    });

    expect(source).to.deep.equal({
      foo: { b: { c: 3, d: 3 } },
      bar: { a: 1 },
    });
  });
});

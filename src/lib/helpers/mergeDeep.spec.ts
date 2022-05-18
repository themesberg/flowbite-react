import { mergeDeep } from './mergeDeep';

describe('Helper / mergeDeep (Deeply merge two objects)', () => {
  describe('given two unknown values', () => {
    describe('both containing an array with same key', () => {
      it('should only keep elements in latter object', () => {
        const combineMe = {
          a: {
            fruit: ['apples', 'bananas'],
          },
          b: 2,
          c: 3,
        };
        const withThis = {
          a: {
            fruit: ['lemons'],
          },
          d: 4,
          e: 5,
        };

        expect(mergeDeep(combineMe, withThis)).toEqual({
          a: {
            fruit: ['lemons'],
          },
          b: 2,
          c: 3,
          d: 4,
          e: 5,
        });
      });
    });

    describe('containing different objects', () => {
      it('should combine them', () => {
        const combineMe = {
          a: {
            fruit: 'apple',
          },
          b: 2,
        };
        const withThis = {
          b: 2,
          c: {
            vegetable: 'carrot',
          },
          d: 4,
          e: 5,
        };

        expect(mergeDeep(combineMe, withThis)).toEqual({
          a: { fruit: 'apple' },
          b: 2,
          c: { vegetable: 'carrot' },
          d: 4,
          e: 5,
        });
      });
    });

    describe('with identical items', () => {
      it("shouldn't duplicate them", () => {
        const combineMe = {
          a: 1,
          b: 2,
          c: 3,
        };
        const withThis = {
          b: 2,
          d: 4,
          e: 5,
        };

        expect(mergeDeep(combineMe, withThis)).toEqual({
          a: 1,
          b: 2,
          c: 3,
          d: 4,
          e: 5,
        });
      });
    });

    it('should combine all of their unique properties', () => {
      const combineMe = {
        a: 1,
        b: 2,
        c: 3,
      };
      const withThis = {
        d: 4,
        e: 5,
      };

      expect(mergeDeep(combineMe, withThis)).toEqual({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
      });
    });

    it('should combine all of their unique nested properties', () => {
      const combineMe = {
        a: {
          fruit: 'apple',
        },
        b: 2,
        c: 3,
      };
      const withThis = {
        a: {
          vegetable: 'carrot',
        },
        d: 4,
        e: 5,
      };

      expect(mergeDeep(combineMe, withThis)).toEqual({
        a: {
          fruit: 'apple',
          vegetable: 'carrot',
        },
        b: 2,
        c: 3,
        d: 4,
        e: 5,
      });
    });
  });
});

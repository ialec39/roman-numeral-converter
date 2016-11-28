var converter = require('../../../app/converter');

describe('Roman Numeral Converter', () => {
  describe('base symbols', () => {
    describe('numerals to numbers', () => {
      it('should return 1 when given "I"', () => {
        expect(converter.convertNumeral('I')).toEqual(1);
      });
      it('should return 5 when given "V"', () => {
        expect(converter.convertNumeral('V')).toBe(5);
      });
      it('should return 10 when given "X"', () => {
        expect(converter.convertNumeral('X')).toBe(10);
      });
      it('should return 50 when given "L"', () => {
        expect(converter.convertNumeral('L')).toBe(50);
      });
      it('should return 100 when given "C"', () => {
        expect(converter.convertNumeral('C')).toBe(100);
      });
      it('should return 500 when given "D"', () => {
        expect(converter.convertNumeral('D')).toBe(500);
      });
      it('should return 1000 when given "M"', () => {
        expect(converter.convertNumeral('M')).toBe(1000);
      });

      describe('lower case', () => {
        it('should return 1 when given "i"', () => {
          expect(converter.convertNumeral('i')).toEqual(1);
        });
      });
    });

    describe('numbers to numerals', () => {
      it('should return "I" when given 1', () => {
        expect(converter.convertNumber(1)).toEqual('I');
      });
      it('should return "V" when given 5', () => {
        expect(converter.convertNumber(5)).toEqual('V');
      });
      it('should return "X" when given 10', () => {
        expect(converter.convertNumber(10)).toEqual('X');
      });
      it('should return "L" when given 50', () => {
        expect(converter.convertNumber(50)).toEqual('L');
      });
      it('should return "C" when given 100', () => {
        expect(converter.convertNumber(100)).toEqual('C');
      });
      it('should return "D" when given 500', () => {
        expect(converter.convertNumber(500)).toEqual('D');
      });
      it('should return "M" when given 1000', () => {
        expect(converter.convertNumber(1000)).toEqual('M');
      });
    });
  });

  describe('combining symbols', () => {
    it('should return 2 when given "II"', () => {
      expect(converter.convertNumeral('II')).toEqual(2);
    });
    it('should return 6 when given "VI"', () => {
      expect(converter.convertNumeral('VI')).toEqual(6);
    });
    it('should return 4 when given "IV"', () => {
      expect(converter.convertNumeral('IV')).toEqual(4);
    });
    it('should return 1904 when given "MCMIV"', () => {
      expect(converter.convertNumeral('MCMIV')).toEqual(1904);
    });
    it('should return 3999 when given "MMMCMXCIX"', () => {
      expect(converter.convertNumeral('MMMCMXCIX')).toEqual(3999);
    });
  });

  describe('complex numbers', () => {
    it('should return "II" when given 2', () => {
      expect(converter.convertNumber(2)).toEqual('II');
    });
    it('should return "VI" when given 6', () => {
      expect(converter.convertNumber(6)).toEqual('VI');
    });
    it('should return "IV" when given 4', () => {
      expect(converter.convertNumber(4)).toEqual('IV');
    });
    it('should return "MCMIV" when given 1904', () => {
      expect(converter.convertNumber(1904)).toEqual('MCMIV');
    });
    it('should return "MMMCMXCIX" when given 3999', () => {
      expect(converter.convertNumber(3999)).toEqual('MMMCMXCIX');
    });
  });

  describe('invalid nueral', () => {
    it('should return 0 when given W', () => {
      expect(converter.convertNumeral('W')).toEqual(undefined);
    });
  });
});

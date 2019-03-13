Intl = require("intl")
import { currencyFilter } from '@/filters/CurrencyFilter';
import { dateFilter } from '@/filters/DateFilter';

describe('Date filter', () => {

    it('should return an empty string', () => {
        expect(dateFilter(null)).toBe('');
    });

    it('should return the formatted date dd/mm/yyyy', () => {
        const d = '2018-09-20T01:01:42.490Z';
        expect(dateFilter(d)).toBe('20/09/2018');
    });

});

describe('Currency filter', () => {

    it('should return an empty string', () => {
        expect(currencyFilter(null)).toBe('');
    });

    it('should return the formatted currency: £xxx,xxx,xxx.xx', () => {
        expect(currencyFilter(75000000)).toBe('£75,000,000.00');
    });

});
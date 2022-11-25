import { elementalForms } from "../src/main";

describe('Testing elemental forms empty string', () => {
    test('empty string should result in empty array', () => {
        expect(elementalForms('')).toEqual([]);
    });
});

describe('Testing elemental forms with word', () => {
    test('using the word "snack"', () => {
        expect(elementalForms('snack')).toEqual([
            ['Sulfur (S)', 'Nitrogen (N)', 'Actinium (Ac)', 'Potassium (K)'],
            ['Sulfur (S)', 'Sodium (Na)', 'Carbon (C)', 'Potassium (K)'],
            ['Tin (Sn)', 'Actinium (Ac)', 'Potassium (K)']
        ]);
    });
});

describe('Testing elemental forms with word', () => {
    test('using the word "beach"', () => {
        expect(elementalForms('beach')).toEqual([
            [ 'Beryllium (Be)', 'Actinium (Ac)', 'Hydrogen (H)' ]
        ]);
    });
});

describe('Testing elemental forms with word upper case', () => {
    test('using the word "SNACK"', () => {
        expect(elementalForms('SNACK')).toEqual([
            ['Sulfur (S)', 'Nitrogen (N)', 'Actinium (Ac)', 'Potassium (K)'],
            ['Sulfur (S)', 'Sodium (Na)', 'Carbon (C)', 'Potassium (K)'],
            ['Tin (Sn)', 'Actinium (Ac)', 'Potassium (K)']
        ]);
    });
});

describe('Testing elemental forms with word upper case', () => {
    test('using the word "SnAcK"', () => {
        expect(elementalForms('SnAcK')).toEqual([
            ['Sulfur (S)', 'Nitrogen (N)', 'Actinium (Ac)', 'Potassium (K)'],
            ['Sulfur (S)', 'Sodium (Na)', 'Carbon (C)', 'Potassium (K)'],
            ['Tin (Sn)', 'Actinium (Ac)', 'Potassium (K)']
        ]);
    });
});

describe('Testing elemental forms with word upper case', () => {
    test('using the word "bEaCh"', () => {
        expect(elementalForms('bEaCh')).toEqual([
            [ 'Beryllium (Be)', 'Actinium (Ac)', 'Hydrogen (H)' ]
        ]);
    });
});


describe('Testing elemental forms with not formable word', () => {
    test('using the word "hylk"', () => {
        expect(elementalForms('hylk')).toEqual([]);
    });
});


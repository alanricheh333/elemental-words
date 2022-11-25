"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../src/main");
describe('Testing elemental forms empty string', () => {
    test('empty string should result in empty array', () => {
        expect((0, main_1.elementalForms)('')).toEqual([]);
    });
});
describe('Testing elemental forms with word', () => {
    test('using the word "snack"', () => {
        expect((0, main_1.elementalForms)('snack')).toEqual([
            ['Sulfur (S)', 'Nitrogen (N)', 'Actinium (Ac)', 'Potassium (K)'],
            ['Sulfur (S)', 'Sodium (Na)', 'Carbon (C)', 'Potassium (K)'],
            ['Tin (Sn)', 'Actinium (Ac)', 'Potassium (K)']
        ]);
    });
});
describe('Testing elemental forms with word', () => {
    test('using the word "beach"', () => {
        expect((0, main_1.elementalForms)('beach')).toEqual([
            ['Sulfur (S)', 'Nitrogen (N)', 'Actinium (Ac)', 'Potassium (K)'],
            ['Sulfur (S)', 'Sodium (Na)', 'Carbon (C)', 'Potassium (K)'],
            ['Tin (Sn)', 'Actinium (Ac)', 'Potassium (K)']
        ]);
    });
});
//# sourceMappingURL=main.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBaseTemp = exports.toBaseTemp = exports.fromBaseDistance = exports.toBaseDistance = void 0;
const M_PER_UNIT = {
    m: 1,
    cm: 0.01,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
};
const toBaseDistance = (value, unit) => value * M_PER_UNIT[unit];
exports.toBaseDistance = toBaseDistance;
const fromBaseDistance = (value, unit) => value / M_PER_UNIT[unit];
exports.fromBaseDistance = fromBaseDistance;
const toBaseTemp = (value, unit) => {
    switch (unit) {
        case 'c':
            return value + 273.15;
        case 'f':
            return (value + 459.67) * (5 / 9);
        case 'k':
            return value;
    }
};
exports.toBaseTemp = toBaseTemp;
const fromBaseTemp = (value, unit) => {
    switch (unit) {
        case 'c':
            return value - 273.15;
        case 'f':
            return value * (9 / 5) - 459.67;
        case 'k':
            return value;
    }
};
exports.fromBaseTemp = fromBaseTemp;

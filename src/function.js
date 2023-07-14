"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
function calculate(operation, x, y) {
    switch (operation) {
        case 'additon':
            return additon(x, y);
        case 'subtraction':
            return subtraction(x, y);
        case 'multiplication':
            return multiplication(x, y);
        case 'division':
            return division(x, y);
        default:
            throw new Error('Invalid operation');
    }
    function additon(x, y) {
        return x + y;
    }
    function subtraction(x, y) {
        return x - y;
    }
    function multiplication(x, y) {
        return x * y;
    }
    function division(x, y) {
        return x / y;
    }
}
exports.calculate = calculate;

export function calculate(operation: string, x: number, y: number) {

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

    function additon(x: number, y: number): number {
        return x + y;
    }
    function subtraction(x: number, y: number): number {
        return x - y;
    }
    function multiplication(x: number, y: number): number {
        return x * y;
    }
    function division(x: number, y: number): number {
        return x / y;
    }
}

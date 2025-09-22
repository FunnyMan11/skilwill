// ფუნქცია, რომელიც ასრულებს მათემატიკურ ოპერაციებს
function calculate(a, b, operation) {
    // შევამოწმოთ, არის თუ არა a და b რიცხვები
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return false;
    }
    
    // შევამოწმოთ, არის თუ არა operation ვალიდური ოპერაცია
    const validOperations = ['+', '-', '*', '/'];
    if (!validOperations.includes(operation)) {
        return false;
    }
    
    // შევასრულოთ ოპერაცია
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            // შევამოწმოთ, არ არის თუ b ნული (ნულზე გაყოფა)
            if (b === 0) {
                return false;
            }
            return a / b;
        default:
            return false;
    }
}

// ტესტირების მაგალითები
console.log("=== კალკულატორის ტესტირება ===");

// ვალიდური ოპერაციები
console.log("calculate(10, 5, '+'):", calculate(10, 5, '+')); // 15
console.log("calculate(10, 5, '-'):", calculate(10, 5, '-')); // 5
console.log("calculate(10, 5, '*'):", calculate(10, 5, '*')); // 50
console.log("calculate(10, 5, '/'):", calculate(10, 5, '/')); // 2

// არავალიდური შემთხვევები
console.log("calculate('10', 5, '+'):", calculate('10', 5, '+')); // false
console.log("calculate(10, '5', '+'):", calculate(10, '5', '+')); // false
console.log("calculate(10, 5, '%'):", calculate(10, 5, '%')); // false
console.log("calculate(10, 0, '/'):", calculate(10, 0, '/')); // false (ნულზე გაყოფა)
console.log("calculate(null, 5, '+'):", calculate(null, 5, '+')); // false
console.log("calculate(10, undefined, '+'):", calculate(10, undefined, '+')); // false

// უარყოფითი რიცხვებით
console.log("calculate(-5, 3, '+'):", calculate(-5, 3, '+')); // -2
console.log("calculate(10, -2, '*'):", calculate(10, -2, '*')); // -20

// ათწილადი რიცხვებით
console.log("calculate(3.5, 2.1, '+'):", calculate(3.5, 2.1, '+')); // 5.6
console.log("calculate(7.2, 1.2, '/'):", calculate(7.2, 1.2, '/')); // 6

// ფუნქცია, რომელიც ადარებს ორ პარამეტრს
function compareValues(a, b) {
    if (a === b) {
        return "ტოლია";
    } else {
        return "არ არის ტოლი";
    }
}

// ფუნქცია, რომელიც ფარენჰეიტს გარდაქმნის ცელსიუსად
function fahrenheitToCelsius(fahrenheit) {
    // შევამოწმოთ, არის თუ არა პარამეტრი რიცხვი
    if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
        return false;
    }
    
    // ფარენჰეიტიდან ცელსიუსში გარდაქმნის ფორმულა: (F - 32) * 5/9
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

// ტესტირების მაგალითები
console.log("=== ტესტირება ===");

// compareValues ფუნქციის ტესტები
console.log("compareValues(5, 5):", compareValues(5, 5)); // "ტოლია"
console.log("compareValues(5, '5'):", compareValues(5, '5')); // "არ არის ტოლი"
console.log("compareValues('hello', 'hello'):", compareValues('hello', 'hello')); // "ტოლია"
console.log("compareValues(true, 1):", compareValues(true, 1)); // "არ არის ტოლი"

// fahrenheitToCelsius ფუნქციის ტესტები
console.log("fahrenheitToCelsius(32):", fahrenheitToCelsius(32)); // 0
console.log("fahrenheitToCelsius(212):", fahrenheitToCelsius(212)); // 100
console.log("fahrenheitToCelsius(68):", fahrenheitToCelsius(68)); // 20
console.log("fahrenheitToCelsius('invalid'):", fahrenheitToCelsius('invalid')); // false
console.log("fahrenheitToCelsius(null):", fahrenheitToCelsius(null)); // false

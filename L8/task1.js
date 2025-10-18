// Recursive expo function
function expo(number, power, callback) {
    // Base case: if power is 0, return 1
    if (power === 0) {
        return callback(1);
    }
    
    // Base case: if power is 1, return the number itself
    if (power === 1) {
        return callback(number);
    }
    
    // Recursive case: multiply number by the result of expo(number, power-1)
    return expo(number, power - 1, function(result) {
        return callback(result * number);
    });
}

function calculateExpo() {
    const number = parseInt(document.getElementById('number').value);
    const power = parseInt(document.getElementById('power').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(number) || isNaN(power)) {
        resultDiv.innerHTML = 'Please enter valid numbers!';
        resultDiv.style.display = 'block';
        return;
    }
    
    if (power < 0) {
        resultDiv.innerHTML = 'Power must be a non-negative integer!';
        resultDiv.style.display = 'block';
        return;
    }
    
    // Calculate using recursive expo function
    expo(number, power, function(result) {
        resultDiv.innerHTML = `${number}<sup>${power}</sup> = ${result}`;
        resultDiv.style.display = 'block';
    });
}

// Test the function with some examples
console.log('Testing expo function:');
expo(2, 3, function(result) {
    console.log('2^3 =', result); // Should be 8
});

expo(5, 3, function(result) {
    console.log('5^3 =', result); // Should be 125
});

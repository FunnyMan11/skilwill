// Get DOM elements
const numbersInput = document.getElementById('numbersInput');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');
const resultValue = document.getElementById('resultValue');

// Calculate average
calculateBtn.addEventListener('click', () => {
    const inputValue = numbersInput.value.trim();
    
    // Check if input is empty
    if (!inputValue) {
        numbersInput.classList.add('error');
        setTimeout(() => numbersInput.classList.remove('error'), 300);
        alert('გთხოვთ, შეიყვანოთ რიცხვები');
        return;
    }
    
    // Split by colon and convert to numbers
    const numbers = inputValue.split(':').map(num => parseFloat(num.trim()));
    
    // Check if all values are valid numbers
    const hasInvalidNumbers = numbers.some(num => isNaN(num));
    
    if (hasInvalidNumbers) {
        numbersInput.classList.add('error');
        setTimeout(() => numbersInput.classList.remove('error'), 300);
        alert('გთხოვთ, შეიყვანოთ მხოლოდ რიცხვები ":" სიმბოლოთი გამოყოფილი');
        return;
    }
    
    // Calculate average
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    
    // Display result
    resultValue.textContent = average.toFixed(2);
    result.classList.remove('hidden');
});

// Allow Enter key to calculate
numbersInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        calculateBtn.click();
    }
});

// Remove error state on input
numbersInput.addEventListener('input', () => {
    numbersInput.classList.remove('error');
});


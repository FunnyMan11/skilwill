// Async function for deep copy with object validation
async function deepCopy(obj) {
    return new Promise((resolve, reject) => {
        // Check if argument is an object
        if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
            reject(new Error('Argument must be a valid object (not null, not array)'));
            return;
        }
        
        try {
            // Perform deep copy using JSON methods
            const copiedObj = JSON.parse(JSON.stringify(obj));
            resolve(copiedObj);
        } catch (error) {
            reject(new Error('Failed to perform deep copy: ' + error.message));
        }
    });
}

// Function to perform deep copy and display results
async function performDeepCopy() {
    const jsonInput = document.getElementById('jsonInput').value;
    const resultDiv = document.getElementById('result');
    const comparisonDiv = document.getElementById('comparison');
    
    try {
        // Parse the JSON input
        const originalObj = JSON.parse(jsonInput);
        
        // Perform deep copy
        const copiedObj = await deepCopy(originalObj);
        
        // Display success result
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '✅ Deep copy successful!\n\nCopied Object:\n' + JSON.stringify(copiedObj, null, 2);
        resultDiv.style.display = 'block';
        
        // Show comparison
        comparisonDiv.style.display = 'grid';
        document.getElementById('originalObject').innerHTML = '<pre>' + JSON.stringify(originalObj, null, 2) + '</pre>';
        document.getElementById('copiedObject').innerHTML = '<pre>' + JSON.stringify(copiedObj, null, 2) + '</pre>';
        
        // Test that it's actually a deep copy
        if (originalObj !== copiedObj) {
            console.log('✅ Objects are different references (deep copy successful)');
        }
        
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '❌ Error: ' + error.message;
        resultDiv.style.display = 'block';
        comparisonDiv.style.display = 'none';
    }
}

// Test functions
async function testSimpleObject() {
    document.getElementById('jsonInput').value = '{"name": "John", "age": 30, "city": "New York"}';
    await performDeepCopy();
}

async function testNestedObject() {
    document.getElementById('jsonInput').value = '{"user": {"name": "Jane", "address": {"city": "London", "country": "UK"}}, "active": true}';
    await performDeepCopy();
}

async function testArrayObject() {
    document.getElementById('jsonInput').value = '{"items": [{"id": 1, "name": "Item 1"}, {"id": 2, "name": "Item 2"}], "count": 2}';
    await performDeepCopy();
}

async function testInvalidInput() {
    document.getElementById('jsonInput').value = '["this", "is", "an", "array"]';
    await performDeepCopy();
}

function testWithInvalidInput() {
    document.getElementById('jsonInput').value = 'null';
    performDeepCopy();
}

// Test the function with various inputs
console.log('Testing deepCopy function:');

// Test with valid object
deepCopy({name: "Test", value: 42})
    .then(result => console.log('Valid object test:', result))
    .catch(error => console.log('Valid object error:', error.message));

// Test with invalid input (array)
deepCopy([1, 2, 3])
    .then(result => console.log('Array test result:', result))
    .catch(error => console.log('Array test error:', error.message));

// Test with null
deepCopy(null)
    .then(result => console.log('Null test result:', result))
    .catch(error => console.log('Null test error:', error.message));

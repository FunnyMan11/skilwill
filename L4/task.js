// 1. ფუნქცია, რომელიც ჩაანაცვლებს valueToReplace-ს valueToReplaceWith-ით (string.replace()-ის გარეშე)
function customReplace(string, valueToReplace, valueToReplaceWith) {
    let result = '';
    let i = 0;
    
    while (i < string.length) {
        // ვამოწმებთ შეესაბამება თუ არა valueToReplace მიმდინარე პოზიციიდან
        let match = true;
        for (let j = 0; j < valueToReplace.length; j++) {
            if (i + j >= string.length || string[i + j] !== valueToReplace[j]) {
                match = false;
                break;
            }
        }
        
        if (match && valueToReplace.length > 0) {
            // თუ მოიძებნა შესატყვისი, ვამატებთ ჩანაცვლების მნიშვნელობას
            result += valueToReplaceWith;
            i += valueToReplace.length;
        } else {
            // თუ არ მოიძებნა, ვამატებთ მიმდინარე სიმბოლოს
            result += string[i];
            i++;
        }
    }
    
    return result;
}

// 2. ფუნქცია, რომელიც თითოეულ სიტყვას დიდი ასოთი დაიწყებს
function capitalizeWords(sentence) {
    let result = '';
    let capitalizeNext = true;
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        if (char === ' ') {
            result += char;
            capitalizeNext = true;
        } else {
            if (capitalizeNext) {
                result += char.toUpperCase();
                capitalizeNext = false;
            } else {
                result += char.toLowerCase();
            }
        }
    }
    
    return result;
}

// ტესტები
console.log('--- customReplace ტესტები ---');
console.log(customReplace("Hello World", "World", "JavaScript")); // "Hello JavaScript"
console.log(customReplace("banana", "ana", "XYZ")); // "bXYZna"
console.log(customReplace("test test test", "test", "exam")); // "exam exam exam"
console.log(customReplace("hello", "xyz", "abc")); // "hello" (არაფერი არ ეთანხმება)

console.log('\n--- capitalizeWords ტესტები ---');
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("javascript is awesome")); // "Javascript Is Awesome"
console.log(capitalizeWords("this is a test sentence")); // "This Is A Test Sentence"
console.log(capitalizeWords("one two three")); // "One Two Three"


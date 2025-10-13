// =====================================
// L7 - Promise-based setTimeout და Toy Shop
// =====================================

// 1. Promise-based setTimeout ფუნქცია
function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`დრო გავიდა: ${delay}ms`);
        }, delay);
    });
}

// 2. Toy Shop ფუნქციები
function makeToys(delay = 3000) {
    return new Promise((resolve, reject) => {
        console.log(`სათამაშოს დამზადება იწყება... (${delay/1000}წმ)`);
        
        setTimeout(() => {
            const success = Math.random() > 0.1; // 90% წარმატების შანსი
            if (success) {
                resolve(`სათამაშო წარმატებით დამზადდა! (${delay/1000}წმ)`);
            } else {
                reject(new Error(`სათამაშოს დამზადება ვერ მოხერხდა! (${delay/1000}წმ)`));
            }
        }, delay);
    });
}

function deliverToys(delay = 2000) {
    return new Promise((resolve, reject) => {
        console.log(`სათამაშოს მიწოდება იწყება... (${delay/1000}წმ)`);
        
        setTimeout(() => {
            const success = Math.random() > 0.15; // 85% წარმატების შანსი
            if (success) {
                resolve(`სათამაშო წარმატებით მიწოდდა! (${delay/1000}წმ)`);
            } else {
                reject(new Error(`მიწოდება ვერ მოხერხდა! (${delay/1000}წმ)`));
            }
        }, delay);
    });
}

function sellToys(delay = 1000) {
    return new Promise((resolve, reject) => {
        console.log(`სათამაშოს გაყიდვა იწყება... (${delay/1000}წმ)`);
        
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% წარმატების შანსი
            if (success) {
                resolve(`სათამაშო წარმატებით გაიყიდა! (${delay/1000}წმ)`);
            } else {
                reject(new Error(`გაყიდვა ვერ მოხერხდა! (${delay/1000}წმ)`));
            }
        }, delay);
    });
}

// 3. ტესტ ფუნქციები
function testMySetTimeout() {
    const output = document.getElementById('setTimeoutOutput');
    output.textContent = 'ტესტირება იწყება...\n';
    
    mySetTimeout(2000)
        .then(result => {
            output.textContent += result + '\n';
            output.textContent += 'mySetTimeout ფუნქცია მუშაობს!\n';
        })
        .catch(error => {
            output.textContent += 'შეცდომა: ' + error.message + '\n';
        });
}

// 4. Toy Shop - .then().catch() სინტაქსი
function runToyShopWithThen() {
    const output = document.getElementById('toyShopThenOutput');
    output.textContent = 'Toy Shop პროცესი იწყება (.then სინტაქსი)...\n';
    
    makeToys(3000)
        .then(result => {
            output.textContent += result + '\n';
            return deliverToys(2000);
        })
        .then(result => {
            output.textContent += result + '\n';
            return sellToys(1000);
        })
        .then(result => {
            output.textContent += result + '\n';
            output.textContent += 'ყველა ეტაპი წარმატებით დასრულდა!\n';
        })
        .catch(error => {
            output.textContent += 'პროცესი შეწყდა: ' + error.message + '\n';
        });
}

// 5. Toy Shop - async/await სინტაქსი
async function runToyShopWithAsync() {
    const output = document.getElementById('toyShopAsyncOutput');
    output.textContent = 'Toy Shop პროცესი იწყება (async/await სინტაქსი)...\n';
    
    try {
        const makeResult = await makeToys(3000);
        output.textContent += makeResult + '\n';
        
        const deliverResult = await deliverToys(2000);
        output.textContent += deliverResult + '\n';
        
        const sellResult = await sellToys(1000);
        output.textContent += sellResult + '\n';
        
        output.textContent += 'ყველა ეტაპი წარმატებით დასრულდა!\n';
    } catch (error) {
        output.textContent += 'პროცესი შეწყდა: ' + error.message + '\n';
    }
}

// 6. ყველა ტესტის გაშვება
async function runAllTests() {
    const output = document.getElementById('allTestsOutput');
    output.textContent = 'ყველა ტესტის გაშვება...\n\n';
    
    // 1. setTimeout ტესტი
    output.textContent += '=== 1. mySetTimeout ტესტი ===\n';
    try {
        const result1 = await mySetTimeout(1000);
        output.textContent += result1 + '\n';
        output.textContent += 'mySetTimeout მუშაობს!\n\n';
    } catch (error) {
        output.textContent += 'mySetTimeout შეცდომა: ' + error.message + '\n\n';
    }
    
    // 2. Toy Shop async/await
    output.textContent += '=== 2. Toy Shop (async/await) ===\n';
    try {
        const makeResult = await makeToys(2000);
        output.textContent += makeResult + '\n';
        
        const deliverResult = await deliverToys(1500);
        output.textContent += deliverResult + '\n';
        
        const sellResult = await sellToys(1000);
        output.textContent += sellResult + '\n';
        
        output.textContent += 'Toy Shop async/await წარმატებით!\n\n';
    } catch (error) {
        output.textContent += 'Toy Shop async/await შეცდომა: ' + error.message + '\n\n';
    }
    
    // 3. Toy Shop .then()
    output.textContent += '=== 3. Toy Shop (.then) ===\n';
    makeToys(2000)
        .then(result => {
            output.textContent += result + '\n';
            return deliverToys(1500);
        })
        .then(result => {
            output.textContent += result + '\n';
            return sellToys(1000);
        })
        .then(result => {
            output.textContent += result + '\n';
            output.textContent += 'Toy Shop .then წარმატებით!\n\n';
            output.textContent += 'ყველა ტესტი დასრულდა!\n';
        })
        .catch(error => {
            output.textContent += 'Toy Shop .then შეცდომა: ' + error.message + '\n\n';
            output.textContent += 'ტესტები დასრულდა (ზოგიერთი შეცდომით)!\n';
        });
}

// კონსოლში ინფორმაცია
console.log('L7 - Promise-based setTimeout და Toy Shop ჩატვირთულია!');
console.log('ფუნქციები:');
console.log('  - mySetTimeout(delay) - Promise-based setTimeout');
console.log('  - makeToys(delay) - სათამაშოს დამზადება');
console.log('  - deliverToys(delay) - მიწოდება');
console.log('  - sellToys(delay) - გაყიდვა');
console.log('  - runToyShopWithThen() - .then().catch() სინტაქსი');
console.log('  - runToyShopWithAsync() - async/await სინტაქსი');
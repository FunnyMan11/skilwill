// 1) ფუნქცია: მიიღებს n (>2) რიცხვს და დააბრუნებს [a+b, ნამრავლი(დანარჩენი)]
function sumFirstTwoAndMultiplyRest(...nums) {
    if (!Array.isArray(nums) || nums.length < 3) {
        return false;
    }
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== 'number' || isNaN(nums[i])) {
            return false;
        }
    }

    const sumFirstTwo = nums[0] + nums[1];
    let productRest = 1;
    for (let i = 2; i < nums.length; i++) {
        productRest *= nums[i];
    }
    return [sumFirstTwo, productRest];
}

// 2) ფუნქცია: user.banks[2].address.city წაკითხვა destructuring-ით
function getCity(user) {
    const { banks = [] } = user || {};
    const thirdBank = Array.isArray(banks) ? (banks[2] || {}) : {};
    const { address: { city } = {} } = thirdBank;
    return city; // თუ არ არსებობს, დაბრუნდება undefined
}

// 3) ფუნქცია: ობიექტის ღრმა კლონი (...) ოპერატორით (ობიექტებს/მასივებს რექურსიულად)
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }

    const clone = { ...obj };
    for (const key in clone) {
        if (Object.prototype.hasOwnProperty.call(clone, key)) {
            clone[key] = deepClone(clone[key]);
        }
    }
    return clone;
}

// ტესტირების რამდენიმე მაგალითი
// console.log(sumFirstTwoAndMultiplyRest(2, 3, 4, 5)); // [5, 20]
// console.log(getCity({ banks: [{}, {}, { address: { city: 'Tbilisi' } }] })); // 'Tbilisi'
// const original = { a: 1, b: { c: [1, 2, { d: 3 }] } };
// const copied = deepClone(original);
// console.log(copied, copied !== original, copied.b !== original.b);


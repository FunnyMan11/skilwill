const validator = require('validator');

// შევამოწმოთ არის თუ არა მეილები
const email1 = 'test@test.com';
const email2 = 'abcDE123';

console.log(`${email1} - არის მეილი: ${validator.isEmail(email1)}`);
console.log(`${email2} - არის მეილი: ${validator.isEmail(email2)}`);


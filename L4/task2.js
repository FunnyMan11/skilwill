// ფუნქცია, რომელიც დაალაგებს მომხმარებლების მასივს ასაკის ზრდადობის მიხედვით
function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}

// ალტერნატიული ვარიანტი (არ უცვლის ორიგინალ მასივს)
function sortUsersByAgeImmutable(users) {
    // ვქმნით მასივის ასლს spread operator-ით, რომ არ შევცვალოთ ორიგინალი
    return [...users].sort((a, b) => a.age - b.age);
}

// ტესტები
console.log('--- sortUsersByAge ტესტი ---');

const users1 = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 }
];
console.log('ორიგინალი:', users1);
console.log('დალაგებული:', sortUsersByAge(users1));

console.log('\n--- რამდენიმე მომხმარებლის ტესტი ---');

const users2 = [
    { name: 'Giorgi', age: 45 },
    { name: 'Nino', age: 25 },
    { name: 'Mariam', age: 35 },
    { name: 'Davit', age: 18 },
    { name: 'Ana', age: 50 }
];
console.log('ორიგინალი:', users2);
console.log('დალაგებული:', sortUsersByAge(users2));

console.log('\n--- sortUsersByAgeImmutable (ორიგინალი არ იცვლება) ---');

const users3 = [
    { name: 'Tako', age: 40 },
    { name: 'Sandro', age: 22 },
    { name: 'Tamari', age: 28 }
];
console.log('ორიგინალი (სანამ დავალაგებთ):', users3);
const sorted = sortUsersByAgeImmutable(users3);
console.log('დალაგებული:', sorted);
console.log('ორიგინალი (დალაგების შემდეგ):', users3);


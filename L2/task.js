// 1) ფუნქცია: დაბრუნდეს ყველაზე პატარა ასაკის მქონე ადამიანის სახელი
function getYoungestUserName(users) {
    // ვალიდაცია
    if (!Array.isArray(users) || users.length === 0) {
        return false;
    }

    let youngestUser = users[0];
    // გავიაროთ მასივი და ვიპოვოთ მინიმალური ასაკი
    for (let i = 1; i < users.length; i++) {
        const current = users[i];

        // შევამოწმოთ ასაკის ველები ვალიდურია თუ არა
        if (typeof current.age !== 'number' || isNaN(current.age)) {
            return false;
        }
        if (typeof youngestUser.age !== 'number' || isNaN(youngestUser.age)) {
            return false;
        }

        if (current.age < youngestUser.age) {
            youngestUser = current;
        }
    }

    return youngestUser.name;
}

// 2) ფუნქცია: მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ ობიექტს
function cloneUser(user) {
    if (user === null || typeof user !== 'object' || Array.isArray(user)) {
        return false;
    }
    // შევქმნათ ახალი (არარეფერენციული) ობიექტი იმავე ველებით
    return { ...user };
}

// 3) პროგრამა: ორი მოთამაშე (a და b) აგორებენ კამათელს მანამ, სანამ არ გაგორდება 3
// დამხმარე ფუნქცია — ერთჯერადი გაგორება 1-დან 6-მდე
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// დააბრუნებს ცდების რაოდენობას, სანამ არ გაგორდება 3
function rollUntilThree() {
    let attempts = 0;
    while (true) {
        attempts++;
        const value = rollDie();
        if (value === 3) {
            break;
        }
    }
    return attempts;
}

// თამაშის ერთი რაუნდის შესრულება
function playDiceGame() {
    const attemptsA = rollUntilThree();
    const attemptsB = rollUntilThree();

    let winner;
    if (attemptsA < attemptsB) {
        winner = 'a';
    } else if (attemptsB < attemptsA) {
        winner = 'b';
    } else {
        winner = 'ფრე';
    }

    return { attemptsA, attemptsB, winner };
}

// ტესტირების მაგალითები
console.log("=== ამოცანა 1: ყველაზე პატარა ასაკის მქონე ===");
const demoUsers = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];
console.log("პასუხი:", getYoungestUserName(demoUsers)); // მოსალოდნელი: 'Lasha'

console.log("\n=== ამოცანა 2: user ობიექტის კლონირება ===");
const originalUser = { name: 'Gio', age: 30 };
const clonedUser = cloneUser(originalUser);
console.log("ორიგინალი:", originalUser);
console.log("კლონი:", clonedUser);
console.log("იგივე რეფერენსია?", clonedUser === originalUser); // უნდა იყოს false

console.log("\n=== ამოცანა 3: კამათლის თამაში (a VS b) ===");
const result = playDiceGame();
console.log(`a ცდები: ${result.attemptsA}, b ცდები: ${result.attemptsB}, გამარჯვებული: ${result.winner}`);



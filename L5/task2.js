// =====================================
// დავალება 2: Card სტრუქტურის შექმნა
// =====================================

function createCard() {
    // ვიღებთ კონტეინერს სადაც უნდა ჩავსვათ card
    const cardContainer = document.getElementById('cardContainer');
    
    // ვქმნით მთავარ div ელემენტს უნიკალური id-ით
    const card = document.createElement('div');
    card.id = 'card';
    
    // ვქმნით h2 ელემენტს
    const heading = document.createElement('h2');
    heading.textContent = 'Gandalf';
    
    // ვქმნით a (link) ელემენტს
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Go to profile';
    
    // ვამატებთ click ივენთს link-ზე
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('🧙‍♂️ გადასვლა Gandalf-ის პროფილზე...');
    });
    
    // ვამატებთ h2 და a ელემენტებს card-ში
    card.appendChild(heading);
    card.appendChild(link);
    
    // ვამატებთ მთელ card-ს DOM-ში
    cardContainer.appendChild(card);
    
    console.log('✅ Card წარმატებით შეიქმნა და დაემატა DOM-ში!');
    console.log('📦 Card სტრუქტურა:', card);
}

// ვუშვებთ ფუნქციას
createCard();


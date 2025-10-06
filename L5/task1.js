// =====================================
// დავალება 1: ღილაკი და Div-ის დამალვა
// =====================================

// ვიღებთ ელემენტებს მათი უნიკალური ID-ებით
const hideBtn = document.getElementById('hideBtn');
const textDiv = document.getElementById('textDiv');

// ვამატებთ click ივენთ ლისენერს ღილაკზე
hideBtn.addEventListener('click', function() {
    // ვამოწმებთ არის თუ არა div დამალული
    if (textDiv.classList.contains('hidden')) {
        // თუ დამალულია - ვაჩვენებთ
        textDiv.classList.remove('hidden');
        hideBtn.textContent = 'დამალე ტექსტი';
    } else {
        // თუ ჩანს - ვმალავთ
        textDiv.classList.add('hidden');
        hideBtn.textContent = 'აჩვენე ტექსტი';
    }
});

console.log('✅ დავალება 1 ჩატვირთულია!');


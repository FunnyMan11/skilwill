// Get DOM elements
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const changeColorBtn = document.getElementById('changeColorBtn');
const colorInput = document.getElementById('colorInput');

// Valid colors array
const validColors = ['red', 'blue', 'green', 'black', 'white'];

// Open modal
openModalBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

// Close modal function
function closeModal() {
    modal.classList.remove('active');
    colorInput.value = ''; // Clear input
}

// Close modal on button click
closeModalBtn.addEventListener('click', closeModal);

// Close modal on overlay click
modalOverlay.addEventListener('click', closeModal);

// Change background color
changeColorBtn.addEventListener('click', () => {
    const color = colorInput.value.toLowerCase().trim();
    
    // Check if color is valid
    if (validColors.includes(color)) {
        document.body.style.background = color;
        closeModal();
    } else {
        alert('გთხოვთ, ჩაწეროთ სწორი ფერი: red, blue, green, black ან white');
    }
});

// Allow Enter key to submit
colorInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        changeColorBtn.click();
    }
});


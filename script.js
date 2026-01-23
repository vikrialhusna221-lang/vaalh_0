// Toggle dropdown menu
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const userIcon = document.querySelector('.user-icon');
    
    if (!dropdownMenu.contains(event.target) && !userIcon.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Theme changer
let themeIndex = 0;
const themes = [
    'linear-gradient(135deg, #7A1300 0%, #34495e 100%)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    'linear-gradient(135deg, #1a472a 0%, #2d5a4d 100%)'
];

function changeTheme() {
    const body = document.body;
    themeIndex = (themeIndex + 1) % themes.length;
    body.style.background = themes[themeIndex];
}

// Modal functions
function openModal(title, message) {
    const modal = document.getElementById('infoModal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Toggle footer menu
function toggleFooterMenu() {
    const menu = document.getElementById('footerMenu');
    menu.classList.toggle('show');
}
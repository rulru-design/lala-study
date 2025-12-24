// Data is loaded from data.js before this file

// DOM Elements
const searchInput = document.getElementById('searchInput');
const termsGrid = document.getElementById('termsGrid');
const modal = document.getElementById('termModal');
const closeModalBtn = document.getElementById('closeModal');

// Modal Elements
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDefinition = document.getElementById('modalDefinition');
const modalExample = document.getElementById('modalExample');
const modalImage = document.getElementById('modalImage');

// State
let currentTerms = [...terms];

// Initialize
function init() {
    renderTerms(currentTerms);
    setupEventListeners();
}

// Render Functions
function renderTerms(termsToRender) {
    termsGrid.innerHTML = '';

    if (termsToRender.length === 0) {
        termsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">
                <p>검색 결과가 없습니다.</p>
            </div>
        `;
        return;
    }

    termsToRender.forEach((term, index) => {
        const card = document.createElement('div');
        card.className = 'term-card fade-in';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="image-container">
                <img src="${term.image}" alt="${term.term}" class="term-card-image">
            </div>
            <div class="card-image-content">
                <span class="term-category">${term.category}</span>
                <h3 class="term-title">${term.term}</h3>
                <p class="term-preview">${term.definition}</p>
            </div>
        `;

        card.addEventListener('click', () => openModal(term));
        termsGrid.appendChild(card);
    });
}

function openModal(term) {
    modalTitle.textContent = term.term;
    modalCategory.textContent = term.category;
    modalDefinition.textContent = term.definition;
    modalExample.textContent = term.example;
    modalImage.src = term.image;
    modalImage.alt = term.term;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event Listeners
function setupEventListeners() {
    // Search Filter
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        currentTerms = terms.filter(item =>
            item.term.toLowerCase().includes(query) ||
            item.definition.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );

        renderTerms(currentTerms);
    });

    // Modal Close
    closeModalBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Start App
init();

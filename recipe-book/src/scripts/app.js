// Render stars for each recipe
function renderStars() {
    document.querySelectorAll('.recipe').forEach(recipe => {
        const rating = recipe.getAttribute('data-rating') || 0;
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += i <= rating ? '★' : '☆';
        }
        recipe.querySelector('.stars').textContent = stars;
    });
}

// Add new recipe
document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('recipe-name').value;
    const image = document.getElementById('recipe-image').value;
    const desc = document.getElementById('recipe-description').value;
    const rating = document.getElementById('recipe-rating').value;

    const recipeDiv = document.createElement('div');
    recipeDiv.className = 'recipe';
    recipeDiv.setAttribute('data-rating', rating);

    recipeDiv.innerHTML = `
        <h3>${name}</h3>
        <img src="${image}" alt="${name}">
        <div class="stars"></div>
        <p>${desc}</p>
    `;

    document.getElementById('recipe-list').appendChild(recipeDiv);
    renderStars();
    this.reset();
});

// Initial render
renderStars();
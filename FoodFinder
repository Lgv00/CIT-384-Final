function findFood() {
    const cravings = [];
    if (document.getElementById('sweet').checked) cravings.push('sweet');
    if (document.getElementById('savory').checked) cravings.push('savory');
    if (document.getElementById('spicy').checked) cravings.push('spicy');
    if (document.getElementById('salty').checked) cravings.push('salty');
    
    // Simulate food suggestions based on the selected cravings
    const foodSuggestions = {
        sweet: ['Cake', 'Ice Cream', 'Chocolate'],
        savory: ['Pizza', 'Burger', 'Pasta'],
        spicy: ['Spicy Tacos', 'Curry', 'Sichuan Stir Fry'],
        salty: ['Pretzels', 'Chips', 'Popcorn'],
    };

    const results = cravings.flatMap(craving => foodSuggestions[craving] || []);
    displaySuggestions(results);
}

function displaySuggestions(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<h3>Food Suggestions:</h3><ul>${results.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

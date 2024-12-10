// Define the displaySuggestions function first
function displaySuggestions(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<h3>Food Suggestions:</h3><ul>${results.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

// Now define the findFood function
function findFood() {
    const cravings = [];
    
    // Check if the checkboxes are selected
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

    // If we are redirecting to another page, you wouldn't call displaySuggestions here
    // Instead, we pass the results through the URL parameters or localStorage (as discussed in the previous answers)
    console.log("Food suggestions: ", results);

    // For now, if you want to display on the same page:
    displaySuggestions(results);  // Only call this if displaying on the current page
}

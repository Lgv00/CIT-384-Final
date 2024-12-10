function findFood() {
    const cravings = [];
    
    // Check if the checkboxes are selected
    if (document.getElementById('sweet').checked) cravings.push('sweet');
    if (document.getElementById('savory').checked) cravings.push('savory');
    if (document.getElementById('spicy').checked) cravings.push('spicy');
    if (document.getElementById('salty').checked) cravings.push('salty');
    
    // Log the cravings array to ensure it's populated
    console.log("Cravings selected: ", cravings);
    
    // Simulate food suggestions based on the selected cravings
    const foodSuggestions = {
        sweet: ['Cake', 'Ice Cream', 'Chocolate'],
        savory: ['Pizza', 'Burger', 'Pasta'],
        spicy: ['Spicy Tacos', 'Curry', 'Sichuan Stir Fry'],
        salty: ['Pretzels', 'Chips', 'Popcorn'],
    };

    const results = cravings.flatMap(craving => foodSuggestions[craving] || []);

    // Redirect to results page with the suggestions as URL parameters
    const suggestionsParam = encodeURIComponent(results.join(','));
    window.location.href = `results.html?suggestions=${suggestionsParam}`;
}

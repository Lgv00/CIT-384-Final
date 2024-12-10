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

    // Check if any cravings are selected, and generate suggestions accordingly
    const results = cravings.flatMap(craving => foodSuggestions[craving] || []);
    
    // Log the results array to check if it is correctly populated
    console.log("Food Suggestions: ", results);
    
    // Display the results
    displaySuggestions(results);
}

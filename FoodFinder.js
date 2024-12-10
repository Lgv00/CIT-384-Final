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

    // Aggregate results based on selected cravings
    const results = cravings.flatMap(craving => foodSuggestions[craving] || []);

    // Debugging: Log cravings and results
    console.log('Selected cravings:', cravings);
    console.log('Food suggestions:', results);

    // Redirect to results.html with the food suggestions as a query parameter
    if (results.length > 0) {
        const resultsString = encodeURIComponent(results.join(','));  // Convert the array to a comma-separated string
        window.location.href = `results.html?foodSuggestions=${resultsString}`;
    } else {
        alert('No cravings selected. Please choose at least one option!');
    }
}

function findFood() {
    // Select all checkboxes with name "craving"
    const selectedCravings = Array.from(document.querySelectorAll('input[name="craving"]:checked'))
        .map(checkbox => checkbox.value);

    // Simulate food suggestions based on the selected cravings
    const foodSuggestions = {
        sweet: ['Cake', 'Ice Cream', 'Chocolate'],
        savory: ['Pizza', 'Burger', 'Pasta'],
        spicy: ['Spicy Tacos', 'Curry', 'Sichuan Stir Fry'],
        salty: ['Pretzels', 'Chips', 'Popcorn'],
    };

    // Aggregate results based on selected cravings
    const results = selectedCravings.flatMap(craving => foodSuggestions[craving] || []);

    // Debugging: Log cravings and results
    console.log('Selected cravings:', selectedCravings);
    console.log('Food suggestions:', results);

    // Redirect to results.html with the food suggestions as a query parameter
    if (results.length > 0) {
        const resultsString = encodeURIComponent(results.join(','));  // Convert the array to a comma-separated string
        window.location.href = `results.html?foodSuggestions=${resultsString}`;
    } else {
        alert('Please choose at least one option!');
    }
}

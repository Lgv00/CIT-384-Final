window.onload = function() {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const suggestions = urlParams.get('suggestions');

    // If there are suggestions, display them
    if (suggestions) {
        const resultsContainer = document.getElementById('food-suggestions');
        const foodItems = decodeURIComponent(suggestions).split(',');

        // Display the list of food items
        resultsContainer.innerHTML = `<ul>${foodItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
    } else {
        // If no suggestions were passed, show a fallback message
        document.getElementById('food-suggestions').innerHTML = '<p>No food suggestions found. Please try again.</p>';
    }
}

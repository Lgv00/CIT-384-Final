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
    const predefinedResults = selectedCravings.flatMap(craving => foodSuggestions[craving] || []);

    // Function to fetch random meals from TheMealDB API
    async function fetchAPIResults() {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const data = await response.json();
            return data.meals.map(meal => meal.strMeal); // Only get meal names
        } catch (error) {
            console.error('Error fetching API data:', error);
            return [];
        }
    }

    // Fetch and process API results
    fetchAPIResults().then(apiResults => {
        // Combine and shuffle predefined and API results
        const allResults = [...predefinedResults, ...apiResults];

        // Shuffle results
        for (let i = allResults.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allResults[i], allResults[j]] = [allResults[j], allResults[i]];
        }

        // Separate suggestions by craving categories
        const categorizedResults = selectedCravings.reduce((acc, craving) => {
            acc[craving] = allResults.filter(meal => foodSuggestions[craving].includes(meal));
            return acc;
        }, {});

        // Debugging: Log categorized results
        console.log('Categorized suggestions:', categorizedResults);

        // Redirect to results.html with the categorized suggestions as a query parameter
        if (Object.values(categorizedResults).flat().length > 0) {
            const resultsString = encodeURIComponent(JSON.stringify(categorizedResults));
            window.location.href = `results.html?foodSuggestions=${resultsString}`;
        } else {
            alert('Please choose at least one option!');
        }
    });
}

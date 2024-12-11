// This function will show the craving filters section when the "Start" button is clicked
function showCravingFilters() {
    // Hide the welcome message and the Start button
    document.querySelector('.container').style.display = 'none';
    
    // Show the craving filters section
    const cravingsSection = document.createElement('div');
    cravingsSection.classList.add('cravings');
    
    cravingsSection.innerHTML = `
        <h2>What are you craving today?</h2>
        <div>
            <label>
                <input type="checkbox" name="craving" value="sweet"> Sweet
            </label>
            <label>
                <input type="checkbox" name="craving" value="savory"> Savory
            </label>
            <label>
                <input type="checkbox" name="craving" value="spicy"> Spicy
            </label>
            <label>
                <input type="checkbox" name="craving" value="salty"> Salty
            </label>
        </div>
        <button onclick="findFood()">Find Food</button>
    `;
    
    // Add the craving section to the body of the page
    document.body.appendChild(cravingsSection);
}

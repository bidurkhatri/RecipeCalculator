// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const form = document.getElementById('breadForm');

    // Add an event listener for form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Retrieve and parse user inputs
        const doughWeight = parseFloat(document.getElementById('doughWeight').value);
        const hydration = parseFloat(document.getElementById('hydration').value);
        const starterPercentage = parseFloat(document.getElementById('starter').value);
        const starterHydration = parseFloat(document.getElementById('starterHydration').value);

        // Validate inputs to ensure they are numbers and within reasonable ranges
        if (isNaN(doughWeight) || doughWeight <= 0) {
            alert('Please enter a valid positive number for Dough Weight.');
            return;
        }
        if (isNaN(hydration) || hydration < 50 || hydration > 100) {
            alert('Please enter a valid Hydration percentage between 50 and 100.');
            return;
        }
        if (isNaN(starterPercentage) || starterPercentage < 0 || starterPercentage > 100) {
            alert('Please enter a valid Starter Percentage between 0 and 100.');
            return;
        }
        if (isNaN(starterHydration) || starterHydration < 50 || starterHydration > 150) {
            alert('Please enter a valid Starter Hydration percentage between 50 and 150.');
            return;
        }

        // Calculate the total flour and water contributed by the starter
        const starterWeight = (starterPercentage / 100) * doughWeight;
        const starterFlour = starterWeight * (100 / (100 + starterHydration));
        const starterWater = starterWeight * (starterHydration / (100 + starterHydration));

        // Calculate the total flour and water needed in the dough
        const totalFlour = doughWeight / (1 + (hydration / 100)) - starterFlour;
        const totalWater = (hydration / 100) * totalFlour - starterWater;

        // Calculate the salt weight (assuming 2% of total flour weight)
        const saltPercentage = 2;
        const saltWeight = (saltPercentage / 100) * (totalFlour + starterFlour);

        // Update the results in the DOM
        document.getElementById('flourResult').textContent = (totalFlour + starterFlour).toFixed(2) + ' g';
        document.getElementById('waterResult').textContent = (totalWater + starterWater).toFixed(2) + ' g';
        document.getElementById('starterResult').textContent = starterWeight.toFixed(2) + ' g';
        document.getElementById('saltResult').textContent = saltWeight.toFixed(2) + ' g';

        // Display the results section
        document.getElementById('results').classList.remove('hidden');
    });
});

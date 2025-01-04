// Event listener for form submission
document.getElementById('breadForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get user inputs
    const doughWeight = parseFloat(document.getElementById('doughWeight').value);
    const hydration = parseFloat(document.getElementById('hydration').value);
    const starterPercentage = parseFloat(document.getElementById('starter').value);
    const starterHydration = parseFloat(document.getElementById('starterHydration').value);

    // Validate inputs
    if (isNaN(doughWeight) || isNaN(hydration) || isNaN(starterPercentage) || isNaN(starterHydration)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    // Perform calculations
    const starterWeight = (starterPercentage / 100) * doughWeight; // Weight of the starter
    const flourWeight = doughWeight / (1 + (hydration / 100) + (starterWeight * starterHydration / doughWeight));
    const waterWeight = (hydration / 100) * flourWeight - (starterWeight * starterHydration / 100);
    const saltWeight = (2 / 100) * doughWeight; // Default salt is 2% of dough weight

    // Update results in the HTML
    document.getElementById('flourResult').textContent = flourWeight.toFixed(2) + ' g';
    document.getElementById('waterResult').textContent = waterWeight.toFixed(2) + ' g';
    document.getElementById('starterResult').textContent = starterWeight.toFixed(2) + ' g';
    document.getElementById('saltResult').textContent = saltWeight.toFixed(2) + ' g';

    // Show the results section
    document.getElementById('results').classList.remove('hidden');
});

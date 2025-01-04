document.getElementById('breadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user inputs
    const doughWeight = parseFloat(document.getElementById('doughWeight').value);
    const hydration = parseFloat(document.getElementById('hydration').value);
    const starter = parseFloat(document.getElementById('starter').value);
    const starterHydration = parseFloat(document.getElementById('starterHydration').value);

    // Validate inputs
    if (!doughWeight || !hydration || !starter || !starterHydration) {
        alert('Please fill all fields with valid numbers.');
        return;
    }

    // Perform calculations
    const starterWeight = (starter / 100) * doughWeight;
    const flourWeight = doughWeight / (1 + (hydration / 100 + (starterWeight / doughWeight) * (starterHydration / 100)));
    const waterWeight = (hydration / 100) * flourWeight - (starterWeight * starterHydration / 100);
    const saltWeight = (2 / 100) * doughWeight; // Default salt percentage (2%)

    // Update results
    document.getElementById('flourResult').textContent = flourWeight.toFixed(2);
    document.getElementById('waterResult').textContent = waterWeight.toFixed(2);
    document.getElementById('starterResult').textContent = starterWeight.toFixed(2);
    document.getElementById('saltResult').textContent = saltWeight.toFixed(2);

    // Show the results section
    document.getElementById('results').classList.remove('hidden');
});

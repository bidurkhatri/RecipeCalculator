document.getElementById('breadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Inputs
    const doughWeight = parseFloat(document.getElementById('doughWeight').value);
    const hydration = parseFloat(document.getElementById('hydration').value);
    const starter = parseFloat(document.getElementById('starter').value);
    const starterHydration = parseFloat(document.getElementById('starterHydration').value);

    if (!doughWeight || !hydration || !starter || !starterHydration) {
        alert('Please fill all fields with valid numbers.');
        return;
    }

    // Calculations
    const flourWeight = doughWeight / (1 + (hydration / 100 + (starter / 100) * (starterHydration / 100)));
    const waterWeight = (hydration / 100) * flourWeight;
    const starterWeight = (starter / 100) * doughWeight;
    const saltWeight = (2 / 100) * doughWeight; // Default salt percentage

    // Results
    document.getElementById('flourResult').textContent = flourWeight.toFixed(2);
    document.getElementById('waterResult').textContent = waterWeight.toFixed(2);
    document.getElementById('starterResult').textContent = starterWeight.toFixed(2);
    document.getElementById('saltResult').textContent = saltWeight.toFixed(2);

    // Show Results
    document.getElementById('results').classList.remove('hidden');
});

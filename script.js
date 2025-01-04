document.getElementById('breadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Input Values
    const doughWeight = parseFloat(document.getElementById('doughWeight').value);
    const wwFlour = parseFloat(document.getElementById('wwFlour').value);
    const ryeFlour = parseFloat(document.getElementById('ryeFlour').value);
    const starter = parseFloat(document.getElementById('starter').value);
    const starterHydration = parseFloat(document.getElementById('starterHydration').value);
    const hydration = parseFloat(document.getElementById('hydration').value);

    // Validation
    if (
        isNaN(doughWeight) ||
        isNaN(wwFlour) ||
        isNaN(ryeFlour) ||
        isNaN(starter) ||
        isNaN(starterHydration) ||
        isNaN(hydration)
    ) {
        alert('Please fill all fields with valid numbers.');
        return;
    }

    // Calculations
    const wwFlourWeight = (doughWeight * wwFlour) / 100;
    const ryeFlourWeight = (doughWeight * ryeFlour) / 100;
    const starterWeight = (doughWeight * starter) / 100;
    const waterWeight =
        (doughWeight * hydration) / 100 -
        (starterWeight * starterHydration) / 100;
    const saltWeight = (doughWeight * 2) / 100; // Default 2% salt

    // Update Results
    document.getElementById('wwFlourResult').textContent = wwFlourWeight.toFixed(2);
    document.getElementById('ryeFlourResult').textContent = ryeFlourWeight.toFixed(2);
    document.getElementById('starterResult').textContent = starterWeight.toFixed(2);
    document.getElementById('waterResult').textContent = waterWeight.toFixed(2);
    document.getElementById('saltResult').textContent = saltWeight.toFixed(2);

    document.getElementById('results').classList.remove('hidden');
});

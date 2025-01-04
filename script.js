function calculate() {
    const flour = parseFloat(document.getElementById("flour").value);
    const hydration = parseFloat(document.getElementById("hydration").value);
    const salt = parseFloat(document.getElementById("salt").value);
    const yeast = parseFloat(document.getElementById("yeast").value);

    if (!flour || !hydration || !salt || !yeast) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    const water = (hydration / 100) * flour;
    const saltWeight = (salt / 100) * flour;
    const yeastWeight = (yeast / 100) * flour;

    document.getElementById("water").innerText = water.toFixed(2);
    document.getElementById("saltResult").innerText = saltWeight.toFixed(2);
    document.getElementById("yeastResult").innerText = yeastWeight.toFixed(2);
}

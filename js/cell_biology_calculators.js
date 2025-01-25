// Cell Culture Dilution Calculator
const cultureDilutionBtn = document.getElementById("culture-dilution-btn");
cultureDilutionBtn.addEventListener("click", () => {
  const initialCellCount = parseFloat(document.getElementById("initial-cells").value) || 0;
  const dilutionFactor = parseFloat(document.getElementById("dilution-factor").value) || 0;

  const result = initialCellCount && dilutionFactor
    ? `Final Cell Count: ${(initialCellCount / dilutionFactor).toFixed(2)} cells`
    : "Please enter valid inputs.";
  document.getElementById("culture-dilution-result").textContent = result;
});

// Cell Viability Calculator
const viabilityBtn = document.getElementById("viability-btn");
viabilityBtn.addEventListener("click", () => {
  const totalCells = parseFloat(document.getElementById("total-cells").value) || 0;
  const viableCells = parseFloat(document.getElementById("viable-cells").value) || 0;

  const result = totalCells && viableCells
    ? `Cell Viability: ${((viableCells / totalCells) * 100).toFixed(2)}%`
    : "Please enter valid inputs.";
  document.getElementById("viability-result").textContent = result;
});

// Doubling Time Calculator
const doublingTimeBtn = document.getElementById("doubling-time-btn");
doublingTimeBtn.addEventListener("click", () => {
  const initialPopulation = parseFloat(document.getElementById("initial-population").value) || 0;
  const finalPopulation = parseFloat(document.getElementById("final-population").value) || 0;
  const timeElapsed = parseFloat(document.getElementById("time").value) || 0;

  if (initialPopulation > 0 && finalPopulation > initialPopulation && timeElapsed > 0) {
    const doublingTime = (timeElapsed * Math.log(2)) / Math.log(finalPopulation / initialPopulation);
    document.getElementById("doubling-time-result").textContent = `Doubling Time: ${doublingTime.toFixed(2)} hours`;
  } else {
    document.getElementById("doubling-time-result").textContent = "Please enter valid inputs.";
  }
});
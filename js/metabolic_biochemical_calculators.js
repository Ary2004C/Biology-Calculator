// pH and pKa Calculator
const phPkaBtn = document.getElementById("ph-pka-btn");
phPkaBtn.addEventListener("click", () => {
  const acidConcentration = parseFloat(document.getElementById("acid-concentration").value) || 0;
  const baseConcentration = parseFloat(document.getElementById("base-concentration").value) || 0;
  const pKa = parseFloat(document.getElementById("pka-value").value) || 0;

  const result = acidConcentration && baseConcentration && pKa
    ? `pH: ${(pKa + Math.log10(baseConcentration / acidConcentration)).toFixed(2)}`
    : "Please enter valid inputs.";
  document.getElementById("ph-pka-result").textContent = result;
});

// Metabolite Concentration Calculator
const metaboliteBtn = document.getElementById("metabolite-btn");
metaboliteBtn.addEventListener("click", () => {
  const metaboliteAmount = parseFloat(document.getElementById("metabolite-amount").value) || 0;
  const solutionVolume = parseFloat(document.getElementById("solution-volume").value) || 0;

  const result = metaboliteAmount && solutionVolume
    ? `Concentration: ${(metaboliteAmount / solutionVolume).toFixed(2)} mol/L`
    : "Please enter valid inputs.";
  document.getElementById("metabolite-result").textContent = result;
});

// Respiratory Quotient Calculator
const respiratoryBtn = document.getElementById("respiratory-btn");
respiratoryBtn.addEventListener("click", () => {
  const co2Produced = parseFloat(document.getElementById("co2-produced").value) || 0;
  const o2Consumed = parseFloat(document.getElementById("o2-consumed").value) || 0;

  const result = co2Produced && o2Consumed
    ? `Respiratory Quotient (RQ): ${(co2Produced / o2Consumed).toFixed(2)}`
    : "Please enter valid inputs.";
  document.getElementById("respiratory-result").textContent = result;
});

// Unit Conversion Tools
const conversionBtn = document.getElementById("conversion-btn");
conversionBtn.addEventListener("click", () => {
  const value = parseFloat(document.getElementById("value-to-convert").value) || 0;
  const conversionType = document.getElementById("conversion-type").value;

  let result = "Please select a valid conversion type.";
  switch (conversionType) {
    case "ml-to-l":
      result = `${value} mL = ${(value / 1000).toFixed(3)} L`;
      break;
    case "ng-to-mcg":
      result = `${value} ng = ${(value / 1000).toFixed(3)} µg`;
      break;
    default:
      result = "Conversion type not supported.";
  }

  document.getElementById("conversion-result").textContent = result;
});

// Concentration-Time Decay Calculator
const decayBtn = document.getElementById("decay-btn");
decayBtn.addEventListener("click", () => {
  const initialConcentration = parseFloat(document.getElementById("initial-concentration").value) || 0;
  const decayRate = parseFloat(document.getElementById("decay-rate").value) || 0;
  const timeElapsed = parseFloat(document.getElementById("time-elapsed").value) || 0;

  const result = initialConcentration && decayRate && timeElapsed
    ? `Concentration after ${timeElapsed} units: ${(initialConcentration * Math.exp(-decayRate * timeElapsed)).toFixed(2)}`
    : "Please enter valid inputs.";
  document.getElementById("decay-result").textContent = result;
});

// Oxygen Consumption Rate Calculator
const oxygenBtn = document.getElementById("oxygen-consumption-btn");
oxygenBtn.addEventListener("click", () => {
  const oxygenVolume = parseFloat(document.getElementById("o2-volume").value) || 0;
  const time = parseFloat(document.getElementById("time").value) || 0;

  const result = oxygenVolume && time
    ? `Oxygen Consumption Rate: ${(oxygenVolume / time).toFixed(2)} mL/min`
    : "Please enter valid inputs.";
  document.getElementById("oxygen-consumption-result").textContent = result;
});

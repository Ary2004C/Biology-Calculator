// t-Test Calculator
const tTestBtn = document.getElementById("t-test-btn");
tTestBtn.addEventListener("click", () => {
  const group1 = document.getElementById("t-group1").value.split(",").map(Number);
  const group2 = document.getElementById("t-group2").value.split(",").map(Number);

  const mean = (arr) => arr.reduce((sum, val) => sum + val, 0) / arr.length;
  const variance = (arr, meanVal) => arr.reduce((sum, val) => sum + Math.pow(val - meanVal, 2), 0) / (arr.length - 1);

  if (group1.length && group2.length) {
    const mean1 = mean(group1);
    const mean2 = mean(group2);
    const var1 = variance(group1, mean1);
    const var2 = variance(group2, mean2);
    const n1 = group1.length;
    const n2 = group2.length;

    const tValue = (mean1 - mean2) / Math.sqrt(var1 / n1 + var2 / n2);
    document.getElementById("t-test-result").textContent = `t-Value: ${tValue.toFixed(2)}`;
  } else {
    document.getElementById("t-test-result").textContent = "Please enter valid data for both groups.";
  }
});

// ANOVA Calculator
const anovaBtn = document.getElementById("anova-btn");
anovaBtn.addEventListener("click", () => {
  const groups = document.getElementById("anova-groups").value.split(";").map((group) => group.split(",").map(Number));

  const mean = (arr) => arr.reduce((sum, val) => sum + val, 0) / arr.length;
  const grandMean = mean(groups.flat());

  let ssBetween = 0;
  let ssWithin = 0;
  let totalObservations = 0;

  groups.forEach((group) => {
    const groupMean = mean(group);
    ssBetween += group.length * Math.pow(groupMean - grandMean, 2);
    ssWithin += group.reduce((sum, val) => sum + Math.pow(val - groupMean, 2), 0);
    totalObservations += group.length;
  });

  const dfBetween = groups.length - 1;
  const dfWithin = totalObservations - groups.length;
  const msBetween = ssBetween / dfBetween;
  const msWithin = ssWithin / dfWithin;
  const fValue = msBetween / msWithin;

  document.getElementById("anova-result").textContent = `F-Value: ${fValue.toFixed(2)}`;
});

// Correlation Calculator
const correlationBtn = document.getElementById("correlation-btn");
correlationBtn.addEventListener("click", () => {
  const xValues = document.getElementById("x-values").value.split(",").map(Number);
  const yValues = document.getElementById("y-values").value.split(",").map(Number);

  if (xValues.length === yValues.length && xValues.length > 1) {
    const mean = (arr) => arr.reduce((sum, val) => sum + val, 0) / arr.length;
    const meanX = mean(xValues);
    const meanY = mean(yValues);

    const numerator = xValues.reduce((sum, x, i) => sum + (x - meanX) * (yValues[i] - meanY), 0);
    const denominator = Math.sqrt(
      xValues.reduce((sum, x) => sum + Math.pow(x - meanX, 2), 0) *
      yValues.reduce((sum, y) => sum + Math.pow(y - meanY, 2), 0)
    );

    const correlation = numerator / denominator;
    document.getElementById("correlation-result").textContent = `Correlation Coefficient: ${correlation.toFixed(2)}`;
  } else {
    document.getElementById("correlation-result").textContent = "Please enter valid X and Y values of equal length.";
  }
});

// Chi-Square Calculator
const chiSquareBtn = document.getElementById("chi-square-btn");
chiSquareBtn.addEventListener("click", () => {
  const observed = document.getElementById("observed").value.split(",").map(Number);
  const expected = document.getElementById("expected").value.split(",").map(Number);

  if (observed.length === expected.length && observed.length > 0) {
    const chiSquare = observed.reduce((sum, obs, i) => sum + Math.pow(obs - expected[i], 2) / expected[i], 0);
    document.getElementById("chi-square-result").textContent = `Chi-Square Value: ${chiSquare.toFixed(2)}`;
  } else {
    document.getElementById("chi-square-result").textContent = "Please enter valid observed and expected values of equal length.";
  }
});

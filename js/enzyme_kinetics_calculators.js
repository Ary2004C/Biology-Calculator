// Michaelis-Menten Calculator
const michaelisBtn = document.getElementById("michaelis-btn");
michaelisBtn.addEventListener("click", () => {
  const vmax = parseFloat(document.getElementById("vmax").value) || 0;
  const substrate = parseFloat(document.getElementById("substrate").value) || 0;
  const km = parseFloat(document.getElementById("km").value) || 0;

  const result = substrate && vmax && km
    ? `Reaction Velocity (v): ${(vmax * substrate / (km + substrate)).toFixed(2)} units`
    : "Please enter valid inputs.";
  document.getElementById("michaelis-result").textContent = result;
});

// Lineweaver-Burk Plot Tool
const lineweaverBtn = document.getElementById("lineweaver-btn");
lineweaverBtn.addEventListener("click", () => {
  const s1 = parseFloat(document.getElementById("s1").value) || 0;
  const v1 = parseFloat(document.getElementById("v1").value) || 0;
  const s2 = parseFloat(document.getElementById("s2").value) || 0;
  const v2 = parseFloat(document.getElementById("v2").value) || 0;

  if (s1 && v1 && s2 && v2) {
    const inverseS1 = 1 / s1;
    const inverseV1 = 1 / v1;
    const inverseS2 = 1 / s2;
    const inverseV2 = 1 / v2;

    const slope = (inverseV2 - inverseV1) / (inverseS2 - inverseS1);
    const yIntercept = inverseV1 - slope * inverseS1;

    const result = `Slope: ${slope.toFixed(2)}, Y-Intercept: ${yIntercept.toFixed(2)}`;
    document.getElementById("lineweaver-result").textContent = result;
  } else {
    document.getElementById("lineweaver-result").textContent = "Please enter valid inputs.";
  }
});

// Reaction Velocity Calculator
const reactionBtn = document.getElementById("reaction-btn");
reactionBtn.addEventListener("click", () => {
  const substrate = parseFloat(document.getElementById("reaction-s").value) || 0;
  const vmax = parseFloat(document.getElementById("reaction-vmax").value) || 0;
  const km = parseFloat(document.getElementById("reaction-km").value) || 0;

  const result = substrate && vmax && km
    ? `Reaction Velocity: ${(vmax * substrate / (km + substrate)).toFixed(2)} units`
    : "Please enter valid inputs.";
  document.getElementById("reaction-result").textContent = result;
});

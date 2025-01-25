// PCR Calculator
const pcrBtn = document.getElementById("pcr-btn");
pcrBtn.addEventListener("click", () => {
  const c1 = parseFloat(document.getElementById("pcr-c1").value) || 0;
  const v1 = parseFloat(document.getElementById("pcr-v1").value) || 0;
  const c2 = parseFloat(document.getElementById("pcr-c2").value) || 0;
  const v2 = parseFloat(document.getElementById("pcr-v2").value) || 0;

  let result = "Please enter valid inputs.";
  if (c1 && v1 && c2) {
    result = `Final Volume (V2): ${(c1 * v1) / c2} µL`;
  } else if (c2 && v2 && c1) {
    result = `Initial Volume (V1): ${(c2 * v2) / c1} µL`;
  }
  document.getElementById("pcr-result").textContent = result;
});

// Molarity Calculator
const molarityBtn = document.getElementById("molarity-btn");
molarityBtn.addEventListener("click", () => {
  const moles = parseFloat(document.getElementById("molarity-mol").value) || 0;
  const volume = parseFloat(document.getElementById("molarity-l").value) || 0;

  const result = volume ? `Molarity: ${(moles / volume).toFixed(2)} M` : "Please enter valid inputs.";
  document.getElementById("molarity-result").textContent = result;
});

// Dilution Calculator
const dilutionBtn = document.getElementById("dilution-btn");
dilutionBtn.addEventListener("click", () => {
  const c1 = parseFloat(document.getElementById("dilution-c1").value) || 0;
  const v1 = parseFloat(document.getElementById("dilution-v1").value) || 0;
  const c2 = parseFloat(document.getElementById("dilution-c2").value) || 0;

  const result = c1 && v1 && c2 ? `Final Volume (V2): ${(c1 * v1) / c2} µL` : "Please enter valid inputs.";
  document.getElementById("dilution-result").textContent = result;
});

// DNA/RNA Concentration Calculator
const concentrationBtn = document.getElementById("concentration-btn");
concentrationBtn.addEventListener("click", () => {
  const abs260 = parseFloat(document.getElementById("abs260").value) || 0;
  const dilutionFactor = parseFloat(document.getElementById("dilution-factor").value) || 0;

  const result = abs260 && dilutionFactor ? `Concentration: ${(abs260 * dilutionFactor * 50).toFixed(2)} µg/mL` : "Please enter valid inputs.";
  document.getElementById("concentration-result").textContent = result;
});

// Melting Temperature (Tm) Calculator
const tmBtn = document.getElementById("tm-btn");
tmBtn.addEventListener("click", () => {
  const sequence = document.getElementById("sequence").value || "";

  let tm = 0;
  if (sequence) {
    const atCount = (sequence.match(/[AT]/gi) || []).length;
    const gcCount = (sequence.match(/[GC]/gi) || []).length;
    tm = (atCount * 2) + (gcCount * 4);
  }

  const result = sequence ? `Melting Temperature (Tm): ${tm}°C` : "Please enter a valid DNA sequence.";
  document.getElementById("tm-result").textContent = result;
});

// Restriction Enzyme Digest Calculator
const digestBtn = document.getElementById("digest-btn");
digestBtn.addEventListener("click", () => {
  const dnaConc = parseFloat(document.getElementById("dna-concentration").value) || 0;
  const enzymeVolume = parseFloat(document.getElementById("enzyme-volume").value) || 0;

  const result = dnaConc && enzymeVolume ? `Digest Reaction: Use ${(dnaConc * enzymeVolume).toFixed(2)} ng/µL` : "Please enter valid inputs.";
  document.getElementById("digest-result").textContent = result;
});
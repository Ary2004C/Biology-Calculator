// Codon Optimization Calculator
const codonBtn = document.getElementById("codon-btn");
codonBtn.addEventListener("click", () => {
  const dnaSequence = document.getElementById("codon-sequence").value.trim();

  const codonUsage = {
    ATG: "Start",
    TAA: "Stop",
    TAG: "Stop",
    TGA: "Stop",
    default: "Optimized"
  };

  const optimizedSequence = dnaSequence
    .match(/.{1,3}/g)
    ?.map((codon) => codonUsage[codon] || codonUsage.default)
    .join(" ");

  const result = dnaSequence
    ? `Optimized Codon Usage: ${optimizedSequence}`
    : "Please enter a valid DNA sequence.";
  document.getElementById("codon-result").textContent = result;
});

// Protein Molecular Weight Calculator
const proteinBtn = document.getElementById("protein-btn");
proteinBtn.addEventListener("click", () => {
  const sequence = document.getElementById("protein-sequence").value.trim();
  const molecularWeights = {
    A: 89.1,
    R: 174.2,
    N: 132.1,
    D: 133.1,
    C: 121.2,
    Q: 146.2,
    E: 147.1,
    G: 75.1,
    H: 155.2,
    I: 131.2,
    L: 131.2,
    K: 146.2,
    M: 149.2,
    F: 165.2,
    P: 115.1,
    S: 105.1,
    T: 119.1,
    W: 204.2,
    Y: 181.2,
    V: 117.1
  };

  const weight = sequence
    .toUpperCase()
    .split("")
    .reduce((total, aa) => total + (molecularWeights[aa] || 0), 0);

  const result = sequence
    ? `Molecular Weight: ${weight.toFixed(2)} Da`
    : "Please enter a valid protein sequence.";
  document.getElementById("protein-result").textContent = result;
});

// Sequence Alignment Scorer
const alignmentBtn = document.getElementById("alignment-btn");
alignmentBtn.addEventListener("click", () => {
  const seq1 = document.getElementById("seq1").value.trim().toUpperCase();
  const seq2 = document.getElementById("seq2").value.trim().toUpperCase();

  if (seq1.length !== seq2.length) {
    document.getElementById("alignment-result").textContent = "Sequences must be of equal length.";
    return;
  }

  const score = seq1.split("").reduce((total, base, index) => {
    return total + (base === seq2[index] ? 1 : 0);
  }, 0);

  const result = seq1 && seq2
    ? `Alignment Score: ${score}`
    : "Please enter valid sequences.";
  document.getElementById("alignment-result").textContent = result;
});

// ORF Finder
const orfBtn = document.getElementById("orf-btn");
orfBtn.addEventListener("click", () => {
  const sequence = document.getElementById("orf-sequence").value.trim().toUpperCase();

  const startCodon = /ATG/g;
  const stopCodon = /(TAA|TAG|TGA)/g;

  const startIndices = [];
  let match;

  while ((match = startCodon.exec(sequence)) !== null) {
    startIndices.push(match.index);
  }

  const orfs = startIndices.map((startIndex) => {
    const restSequence = sequence.substring(startIndex);
    const stopIndex = restSequence.search(stopCodon);
    return stopIndex > 0 ? restSequence.substring(0, stopIndex + 3) : null;
  }).filter(Boolean);

  const result = orfs.length
    ? `Open Reading Frames (ORFs): ${orfs.join(", ")}`
    : "No ORFs found in the sequence.";
  document.getElementById("orf-result").textContent = result;
});

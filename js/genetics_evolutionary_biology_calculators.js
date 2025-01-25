// Punnett Square Calculator
const punnettBtn = document.getElementById("punnett-btn");
punnettBtn.addEventListener("click", () => {
  const parent1 = document.getElementById("parent1-genotype").value.trim().toUpperCase();
  const parent2 = document.getElementById("parent2-genotype").value.trim().toUpperCase();

  if (parent1.length === 2 && parent2.length === 2) {
    const combinations = [];
    for (const allele1 of parent1) {
      for (const allele2 of parent2) {
        combinations.push(allele1 + allele2);
      }
    }

    const formattedCombinations = combinations.map((genotype) => 
      genotype.charAt(0) + genotype.charAt(1).toLowerCase()
    );

    const result = `Offspring Genotypes: ${formattedCombinations.join(", ")}`;
    document.getElementById("punnett-result").textContent = result;
  } else {
    document.getElementById("punnett-result").textContent = "Please enter valid genotypes (2 alleles each).";
  }
});

// Mutation Rate Calculator
const mutationRateBtn = document.getElementById("mutation-btn");
mutationRateBtn.addEventListener("click", () => {
  const totalBases = parseFloat(document.getElementById("total-bases").value) || 0;
  const mutations = parseFloat(document.getElementById("mutations").value) || 0;

  const result = totalBases && mutations
    ? `Mutation Rate: ${(mutations / totalBases).toExponential(2)} per base`
    : "Please enter valid inputs.";
  document.getElementById("mutation-result").textContent = result;
});

// Phylogenetic Distance Calculator
const phylogeneticBtn = document.getElementById("phylogenetic-btn");
phylogeneticBtn.addEventListener("click", () => {
  const seq1 = document.getElementById("sequence1").value.trim().toUpperCase();
  const seq2 = document.getElementById("sequence2").value.trim().toUpperCase();

  if (seq1.length !== seq2.length) {
    document.getElementById("phylogenetic-result").textContent = "Sequences must be of equal length.";
    return;
  }

  const mismatches = seq1.split("").reduce((count, base, index) => count + (base !== seq2[index] ? 1 : 0), 0);
  const distance = (mismatches / seq1.length).toFixed(2);

  document.getElementById("phylogenetic-result").textContent = `Phylogenetic Distance: ${distance}`;
});

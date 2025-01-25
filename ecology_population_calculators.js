// Population Growth Calculator
const populationGrowthBtn = document.getElementById("population-growth-btn");
populationGrowthBtn.addEventListener("click", () => {
  const initialPopulation = parseFloat(document.getElementById("initial-population").value) || 0;
  const growthRate = parseFloat(document.getElementById("growth-rate").value) || 0;
  const time = parseFloat(document.getElementById("time").value) || 0;

  const result = initialPopulation && growthRate && time
    ? `Population after ${time} units of time: ${(initialPopulation * Math.exp(growthRate * time)).toFixed(2)}`
    : "Please enter valid inputs.";
  document.getElementById("population-growth-result").textContent = result;
});

// Hardy-Weinberg Equilibrium Calculator
const hardyWeinbergBtn = document.getElementById("hardy-weinberg-btn");
hardyWeinbergBtn.addEventListener("click", () => {
  const alleleP = parseFloat(document.getElementById("allele-p").value) || 0;
  const alleleQ = parseFloat(document.getElementById("allele-q").value) || 0;

  if (alleleP + alleleQ === 1) {
    const homozygousDominant = (alleleP ** 2).toFixed(2);
    const heterozygous = (2 * alleleP * alleleQ).toFixed(2);
    const homozygousRecessive = (alleleQ ** 2).toFixed(2);

    const result = `Genotype Frequencies - AA: ${homozygousDominant}, Aa: ${heterozygous}, aa: ${homozygousRecessive}`;
    document.getElementById("hardy-weinberg-result").textContent = result;
  } else {
    document.getElementById("hardy-weinberg-result").textContent = "Allele frequencies must add up to 1.";
  }
});

// Species Diversity Calculator
const speciesDiversityBtn = document.getElementById("species-diversity-btn");
speciesDiversityBtn.addEventListener("click", () => {
  const speciesAbundance = document.getElementById("species-abundance").value.split(",").map(Number);
  const totalIndividuals = speciesAbundance.reduce((sum, num) => sum + num, 0);
  const shannonIndex = speciesAbundance.reduce((sum, num) => {
    const proportion = num / totalIndividuals;
    return proportion > 0 ? sum - proportion * Math.log(proportion) : sum;
  }, 0).toFixed(2);

  const result = totalIndividuals
    ? `Shannon Diversity Index: ${shannonIndex}`
    : "Please enter valid species abundance data.";
  document.getElementById("species-diversity-result").textContent = result;
});

// Carrying Capacity Calculator
const carryingCapacityBtn = document.getElementById("carrying-capacity-btn");
carryingCapacityBtn.addEventListener("click", () => {
  const availableResources = parseFloat(document.getElementById("available-resources").value) || 0;
  const resourcesPerIndividual = parseFloat(document.getElementById("resources-per-individual").value) || 0;

  const result = availableResources && resourcesPerIndividual
    ? `Carrying Capacity: ${(availableResources / resourcesPerIndividual).toFixed(2)} individuals`
    : "Please enter valid inputs.";
  document.getElementById("carrying-capacity-result").textContent = result;
});

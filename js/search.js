// Fetch data from calculators.json and set up Fuse.js
fetch("calculators.json")
  .then((response) => response.json())
  .then((data) => {
    const fuse = new Fuse(data, {
      keys: ["title", "keywords"],
      threshold: 0.3, // Fuzzy matching sensitivity
    });

    const searchBar = document.getElementById("search-bar");
    const resultsContainer = document.getElementById("search-results");
    const originalContent = resultsContainer.innerHTML; // Save original content

    // Listen for input in the search bar
    searchBar.addEventListener("input", (e) => {
      const query = e.target.value.trim();

      if (!query) {
        // Restore original content when search bar is empty
        resultsContainer.innerHTML = originalContent;
        return;
      }

      const results = fuse.search(query);
      resultsContainer.innerHTML = ""; // Clear previous results

      if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        return;
      }

      results.forEach(({ item }) => {
        const resultDiv = document.createElement("div");
        resultDiv.innerHTML = `<a href="${item.link}">${item.title}</a>`;
        resultsContainer.appendChild(resultDiv);
      });
    });
  })
  .catch((error) => console.error("Error fetching calculator data:", error));

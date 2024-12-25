document.addEventListener("DOMContentLoaded", function () {
    const sortBySelect = document.getElementById("sort-by");
    const productGrid = document.querySelector(".collection-grid");
  
    sortBySelect.addEventListener("change", function () {
      const sortValue = this.value;
      let products = Array.from(productGrid.children);
  
      products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute("data-price"));
        const priceB = parseFloat(b.getAttribute("data-price"));
  
        if (sortValue === "price-low-high") {
          return priceA - priceB;
        } else if (sortValue === "price-high-low") {
          return priceB - priceA;
        } else if (sortValue === "newest") {
          // Optional: Add logic to sort by newest if metadata is available
        } else {
          return 0; // Default to original order
        }
      });
  
      productGrid.innerHTML = "";
      products.forEach((product) => productGrid.appendChild(product));
    });
  });
  
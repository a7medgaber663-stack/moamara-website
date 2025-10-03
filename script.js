document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-card");
  
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
  
        products.forEach(product => {
          if (category === "all" || product.classList.contains(category)) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });
      });
    });
  });
  
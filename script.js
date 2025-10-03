document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById('searchInput');
  const products = document.querySelectorAll(".product-card");

  let currentCategory = "all";

  // دالة لتطبيق الفلترة حسب البحث والفئة
  function filterProducts() {
      const searchText = searchInput.value.toLowerCase();

      products.forEach(product => {
          const matchesCategory = currentCategory === "all" || product.classList.contains(currentCategory);
          const matchesText = product.textContent.toLowerCase().includes(searchText);

          if(matchesCategory && matchesText) {
              product.style.display = "block";
          } else {
              product.style.display = "none";
          }
      });
  }

  // فلترة الأقسام
  filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          currentCategory = btn.getAttribute("data-category");
          filterProducts();
      });
  });

  // البحث بالكلمة
  searchInput.addEventListener("input", filterProducts);
});

const CATEGORY_DATA = [
  {
    id: 1,
    name: "products",
    path: "./pages/products.html",
  },
  {
    id: 2,
    name: "about us",
    path: "#footer",
  },
  {
    id: 3,
    name: "media",
    path: "./pages/media.html",
  },
  {
    id: 4,
    name: "DVRK MEN",
    path: "#men",
  },
  
  {
    id: 5,
    name: "DVRK WOMEN",
    path: "#women",
  },
];

// Render Category
const categoryList = $("#category-list");
const categoryData = CATEGORY_DATA.map(
  (item) => `
	<li>
		<a href="${item.path}" class="category-link">${item.name}</a>
	</li>
`
);
categoryList.innerHTML = categoryData.join("");

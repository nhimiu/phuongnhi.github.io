const PRODUCTS = [
  {
    id: 1,
    image:
      "https://theme.hstatic.net/1000178923/1000802611/14/home_cate_new_8_img.png?v=1185",
    path: "./pages/product-detail/product-detail-1.html",
  },
  {
    id: 2,
    image:
      "https://theme.hstatic.net/1000178923/1000802611/14/home_cate_new_2_img.png?v=1185",
    path: "./pages/product-detail/product-detail-1.html",
  },
  {
    id: 3,
    image:
      "https://theme.hstatic.net/1000178923/1000802611/14/home_cate_new_3_img.png?v=1185",
    path: "./pages/product-detail/product-detail-1.html",
  },
  {
    id: 4,
    image:
      "https://theme.hstatic.net/1000178923/1000802611/14/home_cate_new_6_img.png?v=1185",
    path: "./pages/product-detail/product-detail-1.html",
  },
];

// Render Products
const productsList = $("#products-list");
const productsData = PRODUCTS.map(
  (item) => `
	<li>
		<a href="${item.path}">
			<img src="${item.image}" alt="${item.id}" class="product-image"/>
		</a>
	</li>
`
);
productsList.innerHTML = productsData.join("");

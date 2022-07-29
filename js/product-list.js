const PRODUCT_LIST = [
  {
    id: 1,
    image:
      "https://product.hstatic.net/1000178923/product/jacket_b_e34fc2b779d34e23ab7c8588f5d7364a.jpg",
    name: "DVRK TDI Retro Windbreaker Jacket - WHITE",
    price: "690,000₫",
    path: "./details/detail-1.html",
  },
  {
    id: 2,
    image:
      "https://product.hstatic.net/1000178923/product/denim_shirt_b2_a0ddf7120bb243018a73f5c1a2f087ff.jpg",
    name: "V-NECK WOOL CABLE KNIT SWEATER - BLUE NECK",
    price: "1,190,000₫",
    path: "./details/detail-1.html",
  },
  {
    id: 3,
    image:
      "https://product.hstatic.net/1000178923/product/denim_shirt_r2_4d4424c4347c4f50a8c51615c65ab46a.jpg",
    name: "V-NECK WOOL CABLE KNIT SWEATER - RED NECK",
    price: "1,190,000₫",
    path: "./details/detail-1.html",
  },
  {
    id: 4,
    image:
      "https://product.hstatic.net/1000178923/product/5c5e4f1871da4629bacf23081ba2cc31_8ae20cb42cdc4312b24d3b2f6bbce411.jpg",
    name: "DVRK MONOGRAM POLO - RED",
    price: "1,190,000₫",
    path: "./details/detail-1.html",
  },
  {
    id: 5,
    image:
      "https://product.hstatic.net/1000178923/product/tee_logo_tf_bdc742a805724569bc41c5f3cee6d45e.jpg",
    name: "DVRK PRIVÉ LOGO TEE PLT03 FEMALE - APRICOT",
    price: "690,000₫",
    path: "./details/detail-1.html",
  },
  {
    id: 6,
    image:
      "https://product.hstatic.net/1000178923/product/tee_logo_tf_8517617f9ed94037a9582801cba30712.jpg",
    name: "DVRK PRIVÉ LOGO TEE PLT03 MALE - APRICOT",
    price: "690,000₫",
    path: "./details/detail-1.html",
  },
  {
    id: 7,
    image:
      "https://product.hstatic.net/1000178923/product/tee_logo_af_9ba6a836aa5842818eb597415ffcb8b9.jpg",
    name: "DVRK PRIVÉ LOGO TEE PLT03 FEMALE - ARCTIC",
    price: "690,000₫",
    path: "./details/detail-1.html",
  },
  {
    id: 8,
    image:
      "https://product.hstatic.net/1000178923/product/tee_logo_af_5fdbd1a4bd9a4017a659c8b934463fd8.jpg",
    name: "DVRK PRIVÉ LOGO TEE PLT02 MALE - BLACK",
    price: "Hết hàng",
    path: "./details/detail-1.html",
  },
  {
    id: 9,
    image:
      "https://product.hstatic.net/1000178923/product/pl2_bbm_552c2f05010f4ae9a1aa93ab396d339a.jpg",
    name: "DVRK PRIVÉ LOGO TEE PLT02 FEMALE - CREAM",
    price: "690,000₫",
    path: "./details/detail-1.html",
  },
  {
    id: 10,
    image:
      "https://product.hstatic.net/1000178923/product/tee_prive_bf_56c6c65033d24529a3fb73a52281d272.jpg",
    name: "DVRK PRIVÉ LOGO TEE PLT02 MALE - CREAM",
    price: "Hết hàng",
    path: "./details/detail-1.html",
  },
  {
    id: 11,
    image:
      "https://product.hstatic.net/1000178923/product/tee_prive_bf_e450182335ef42699a7b6319a077083a.jpg",
    name: "DVRK PRIVÉ LOGO TEE PLT01 FEMALE - APRICOT",
    price: "690,000₫",
    path: "./details/detail-1.html",
  },
  {
    id: 12,
    image:
      "https://product.hstatic.net/1000178923/product/tee_prive_cf_f22400be429840d7a0e15fbd7cb73b57.jpg",
    name: "DVRK PRIVÉ LOGO TEE PLT01 MALE - APRICOT",
    price: "690,000₫",
    path: "./details/detail-1.html",
  },
];

const productLists = $(".product-lists");
const productListData = PRODUCT_LIST.map(
  (item) => `
		<a href="${item.path}" class="product-list-container">
			<div>
				<img src="${item.image}" alt="${item.name}" class="product-list-image" />
			</div>
			<div class="heading" >${item.name}</div>
			<div class="action-price">
				<span>${item.price}</span>
				<i class="fa-solid fa-heart"></i>
			</div>
		</a>
`
);
productLists.innerHTML = productListData.join("");

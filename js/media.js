const PRODUCT_MEDIA = [
  {
    id: 1,
    image:
      "https://file.hstatic.net/1000178923/article/new_project__25__4316be45414b465891f2d84642bcd125.png",
    path: "./product-detail/product-detail-1.html",
  },
  {
    id: 2,
    image:
      "https://file.hstatic.net/1000178923/article/041a7412_aee05c265ece40be930d6029a0942c18.jpg",
    path: "./product-detail/product-detail-1.html",
  },
  {
    id: 3,
    image:
      "https://file.hstatic.net/1000178923/article/hau04723_bc88b86a03194260884fde3472be2084.jpg",
    path: "./product-detail/product-detail-1.html",
  },
  {
    id: 4,
    image:
      "https://file.hstatic.net/1000178923/article/000048__6_-crop_e858edfeb9324f79877681de489f96d5_c08d997bb5ed4ba7bb10f345d1b6de73.jpg",
    path: "./product-detail/product-detail-1.html",
  },
  {
    id: 5,
    image:
      "https://file.hstatic.net/1000178923/article/cc7d8-ad3e-49b9-8dee-691d04bf3bc1_5d8db83fcf43428cb22c80206866fc63_4c70d7b282f3479eb3cea538397c75b8.jpg",
    path: "./product-detail/product-detail-1.html",
  },
  {
    id: 6,
    image:
      "https://file.hstatic.net/1000178923/article/dvrk-26.014474_6176b25f5b964375afd5cb1695066bf8_8a8e433cefa5412f9eeb44811e761f0d.jpg",
    path: "./product-detail/product-detail-1.html",
  },

];

// Render Media
const mediaList = $("#media-list");
const mediaData = PRODUCT_MEDIA.map(
  (item) => `
	<li>
		<a href="${item.path}">
			<img src="${item.image}" alt="${item.id}" class="media-image"/>
		</a>
	</li>
`
);
mediaList.innerHTML = mediaData.join("");

const PRODUCT_DETAIL = [
  {
    id: 1,
    heading: 'DVRK "Privé" — Sự ra đời của dòng sản phẩm Monogram 1',
    text: [
      "Monogram (chữ lồng) ắt hẳn đã không còn xa lạ gì đối với những người đam mê thời trang vì monogram không chỉ như một loại nhận dạng cho cá nhân hoặc thương hiệu mà còn là biểu tượng cho sự tao nhã, sang trọng.",
      'Monogram được tạo thành từ sự lồng ghép của các chữ cái trong tên thương hiệu, được cách điệu để phù hợp với hình ảnh và "tính cách" mà thương hiệu nhắm đến. "Privé" được DVRK định hướng là dòng sản phẩm có thiết kế mềm mại và thanh lịch, vì thế, thiết kế các đường nét của monogram DVRK được tạo thành chủ yếu từ những nét cong uốn lượn, canh chỉnh theo tỉ lệ vàng để mang lại cảm giác hài hoà và kết nối nhất có thể.',
      'Không chỉ chú trọng vào thiết kế, "Privé" còn tập trung vào sự đa dạng của sản phẩm và chất lượng sản phẩm. Toàn bộ sản phẩm đều được lựa chọn chất liệu tốt nhất và phù hợp nhất với thiết kế và thị hiếu khách hàng, qua kiểm duyệt gắt gao với mong muốn sản phẩm đến tay khách hàng có chất lượng tốt nhất.',
      'DVRK mong rằng "Privé" có thể làm hài lòng các tín đồ thời trang và nhìn nhận "Privé" như một sự đóng góp nhỏ cho nền thời trang Việt Nam có thể lớn mạnh, rộng mở và đa dạng hơn.',
    ],
    images: [
      "https://file.hstatic.net/1000178923/file/dvrk-26.014130_8e120b1f84ab4c6b8abe0af99d5c3ab9_master.jpg",
      "https://file.hstatic.net/1000178923/file/dvrk-26.014171_5a8422657b004126a51dfb7d2702a255_master.jpg",
      "https://file.hstatic.net/1000178923/file/dvrk-26.014207_971831602f07494492c5c301c6bcb0ca_master.jpg",
      "https://file.hstatic.net/1000178923/file/dvrk-26.014047_69be550778844795a99132ddc4f22f0f_master.jpg",
      "https://file.hstatic.net/1000178923/file/dvrk-26.014445_646a54a5e40f4805ad90e9fd72a3ca3f_master.jpg",
      "https://file.hstatic.net/1000178923/file/dvrk-26.014468_46b64f9bbd7d4e668614feb1e4507d3a_master.jpg",
      "https://file.hstatic.net/1000178923/file/dvrk-26.013860_0a7c2fa548c6417d80386bc87e545d6a_master.jpg",
      "https://file.hstatic.net/1000178923/file/dvrk-26.013786_cb40f5b75dc1456baaffbc9688c6ea1d_master.jpg",
    ],
  },
];

const details = $("#details");
const detailData = PRODUCT_DETAIL.map(
  (item) => `
	<h3>${item.heading}</h3>

	<div class="text">
		${item.text.map((text) => `<p>${text}</p>`)}
	</div>

	${item.images.map(
    (image) => `<img src="${image}" alt="${item.heading}" class="detail-image">`
  )}
`
);
details.innerHTML = detailData.join("");

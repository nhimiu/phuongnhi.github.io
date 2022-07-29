const POLICY_DATA = [
  {
    id: 1,
    name: "Chính sách bảo mật",
    path: "#privacy-policy",
  },
  {
    id: 2,
    name: "Quy chế hoạt động",
    path: "#terms-of-use",
  },
  {
    id: 3,
    name: "Chính sách vận chuyển",
    path: "#shipping-policy",
  },
  {
    id: 4,
    name: "CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN",
    path: "#docs",
  },
];

// Render Policy
const footerTopSectionWrapper = $("#footer-top-section");
const policyData = POLICY_DATA.map(
  (item) =>
    `<li>
		<a href="${item.path}" class="policy-link">${item.name}</a>
	</li>`
);
footerTopSectionWrapper.innerHTML = policyData.join("");

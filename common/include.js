// include.js
document.addEventListener("DOMContentLoaded", () => {
  // ヘッダーの読み込み
  const headerTarget = document.getElementById("header-common");
  if (headerTarget) {
    fetch("https://benri-tools.github.io/benri_tool/common/header-common.html")
      .then(res => res.text())
      .then(html => {
        headerTarget.innerHTML = html;
      });
  }

  // フッターの読み込み
  const footerTarget = document.getElementById("footer-common");
  if (footerTarget) {
    fetch("https://benri-tools.github.io/benri_tool/common/footer-common.html")
      .then(res => res.text())
      .then(html => {
        footerTarget.innerHTML = html;
      });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // ヘッダー読み込み
  const headerTarget = document.getElementById("header-common");
  if (headerTarget) {
    fetch("https://benri-tools.github.io/benri_tool/common/header-common.html")
      .then(res => res.text())
      .then(html => {
        const temp = document.createElement("div");
        temp.innerHTML = html;
        Array.from(temp.children).forEach(el => {
          const tag = el.tagName.toLowerCase();
          if (["script", "link", "style"].includes(tag)) {
            document.head.appendChild(el);
          } else {
            headerTarget.appendChild(el);
          }
        });
      });
  }

  // フッター読み込み
  const footerTarget = document.getElementById("footer-common");
  if (footerTarget) {
    fetch("https://benri-tools.github.io/benri_tool/common/footer-common.html")
      .then(res => res.text())
      .then(html => {
        footerTarget.innerHTML = html;
      });
  }
});

const params = new URLSearchParams(window.location.search);
const workId = params.get("id");

const work = works[workId];

if (work) {
  document.title = work.title;

  document.getElementById("work-title").textContent = work.title;
  document.getElementById("work-event").textContent = work.title;
  document.getElementById("work-time").textContent = work.time;

  
  const contentBox = document.getElementById("work-content");

contentBox.innerHTML = "";

work.content.forEach(item => {
  const span = document.createElement("span");
  span.textContent = item;
  contentBox.appendChild(span);
});


  document.getElementById("work-description").textContent = work.description;

  const image = document.getElementById("work-image");
  image.src = work.image;
  image.alt = work.title;
} else {
  document.querySelector(".detail-page").innerHTML = `
    <p>找不到這個作品。</p>
    <a href="index.html">← 回到首頁</a>
  `;
}

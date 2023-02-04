import { getDataFromApi1 } from "../data/apiPosts.js";
import { countDown } from "./counter.js";

let menu = document.getElementById("menu");
let menuContent = document.getElementById("mobile-menu");
let comments = document.getElementsByClassName("comment");

getDataFromApi1().then((data1) => {
  for (let i = 0; i < comments.length; i++) {
    comments[i].innerHTML = `
        <h2 class="fs-2 py-2">${data1[i].email}</h2>
        <p class="comment-title fw-bold fst-italic">${data1[i].name}</p>
        <p class="comment-body text-black pt-3 fst-italic">"${data1[i].body}"</p>
        `;
  }
  console.log(data1);
});

menu.addEventListener("click", () => {
  menuContent.classList.toggle("collapse");
  menu.animate(
    [
      { scale: "0.7" },
      { scale: "1" },
    ],
    {
      duration: 200,
    }
  );
});

countDown();
setInterval(countDown, 1000);

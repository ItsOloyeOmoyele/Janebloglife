const likeButtons = document.querySelectorAll(".like");
const repliesBtn1 = document.querySelector(".reply-btn1");
const repliesBtn2 = document.querySelector(".reply-btn2");
const repliesBtn3 = document.querySelector(".reply-btn3");
const firstReplies = document.querySelector(".content1-replies");
const secondReplies = document.querySelector(".content2-replies");
const thirdReplies = document.querySelector(".content3-replies");
const subBtn = document.querySelector("#sub-btn");
const subPage = document.querySelector(".popup-subscribe");
const closeBtn = document.querySelector(".close-btn");

/* subcription page */
subBtn.addEventListener("click", () => {
  subPage.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  subPage.classList.remove("show");
});

/* like-button icon swap */
likeButtons.forEach((item) => {
  item.addEventListener("click", () => {
    item.innerHTML = `<i class='fa-solid fa-check'></i>Liked`;
  });
});

/* replies display */
firstReplies.style.display = "block";

repliesBtn2.addEventListener("click", () => {
  secondReplies.classList.toggle("show");
});

repliesBtn3.addEventListener("click", () => {
  thirdReplies.classList.toggle("show");
});

const likeButtons = document.querySelectorAll(".like");
const repliesBtn1 = document.querySelector(".reply-btn1");
const repliesBtn2 = document.querySelector(".reply-btn2");
const repliesBtn3 = document.querySelector(".reply-btn3");
const firstReplies = document.querySelector(".content1-replies");
const secondReplies = document.querySelector(".content2-replies");
const thirdReplies = document.querySelector(".content3-replies");
const subBtn2 = document.querySelector("#sub-btn");
const subPage = document.querySelector(".popup-subscribe");
const closeBtn = document.querySelector(".close-btn");
const dimBg = document.querySelector(".cover");
const subBtn = document.querySelector(".sub-button");

/* subcription page */
subBtn.addEventListener("click", () => {
  dimBg.classList.add("show-cover");
  subPage.classList.add("show");
});

subBtn2.addEventListener("click", () => {
  dimBg.classList.add("show-cover");
  subPage.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  subPage.classList.remove("show");
  dimBg.classList.remove("show-cover");
});

/* like-button icon swap */
likeButtons.forEach((item) => {
  item.addEventListener("click", () => {
    item.innerHTML = `<i class='fa-solid fa-check'></i>Liked`;
  });
});

/* replies display */
repliesBtn1.addEventListener("click", () => {
  firstReplies.classList.toggle("show");
});

repliesBtn2.addEventListener("click", () => {
  secondReplies.classList.toggle("show");
});

repliesBtn3.addEventListener("click", () => {
  thirdReplies.classList.toggle("show");
});

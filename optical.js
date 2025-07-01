//nav-fixed
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.classList.add("nav_fixd");
  } else {
    nav.classList.remove("nav_fixd");
  }
});

//서브메뉴오픈
$(function () {
  const $nav = $("nav");

  $(".menu").on("mouseenter", function () {
    $(".submenu").stop(true, true).slideDown();

    // 서브메뉴 최대 높이 계산
    let maxHeight = 0;
    $(".submenu").each(function () {
      let thisHeight = $(this).outerHeight();
      if (thisHeight > maxHeight) maxHeight = thisHeight;
    });

    $nav
      .stop(true)
      .animate({ height: 60 + maxHeight }, 200)
      .addClass("whitebg")
      .removeClass("originalbg");
  });

  $(".menu").on("mouseleave", function () {
    $(".submenu")
      .stop(true, true)
      .slideUp(200, function () {
        $nav
          .stop(true)
          .animate({ height: 50 }, 100)
          .addClass("originalbg")
          .removeClass("whitebg");
      });
  });
  // 초기 상태 세팅
  $nav.addClass("originalbg");
});

//자물쇠(로그인아이콘) 클릭시 로그인창 중앙으로 나오게
const loginBtn = document.querySelector("#loginBtn");
const loginPop = document.querySelector("#loginPop");
const closeBtn = document.querySelector(".closeBtn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loginPop.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  loginPop.classList.remove("active");
});

// 팝업 바깥 클릭 시 닫기
loginPop.addEventListener("click", function (e) {
  if (e.target === loginPop) {
    loginPop.classList.remove("active");
  }
});
//로그인 페이지

//동영상위 이미지
document.addEventListener("DOMContentLoaded", function () {
  const trigger = document.querySelector(".trigger");
  const img2 = document.querySelector(".Mimg2");
  const img3 = document.querySelector(".Mimg3");

  trigger.addEventListener("mouseover", function (e) {
    e.preventDefault();
    img2.classList.add("slide-in");
    img3.classList.add("slide-in");
  });

  // img2.classList.add("displayN ");
  img3.classList.add("displayN ");
});

//gallay이미지 슬라이드
const slider = document.querySelector(".gallery-scroll");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.7; // 속도 조절
  slider.scrollLeft = scrollLeft - walk;
});

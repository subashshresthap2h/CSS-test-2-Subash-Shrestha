function initNav() {
  const holder = document.querySelector("body");
  const opener = document.querySelector(".nav__opener");
  const activeClass = "nav--active";

  const trackAction = (e) => {
    e.preventDefault();
    holder.classList.toggle(activeClass);
  };

  opener.addEventListener("click", (e) => trackAction(e));

  window.addEventListener("click", (e) => {
    if (
      !e.target.closest(".nav__opener") &&
      !e.target.classList.contains(".nav__opener") &&
      !e.target.closest(".header__drop") &&
      !e.target.classList.contains(".header__drop")
    ) {
      holder.classList.remove("nav--active");
    }
  });
}


function initFancybox(){
  Fancybox.bind("[data-fancybox]", {
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFancybox();
});

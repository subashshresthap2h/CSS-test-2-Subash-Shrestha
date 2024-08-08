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

function initFancybox() {
  Fancybox.bind("[data-fancybox]", {});
}

function initTabs() {
  const tabsets = [...document.querySelectorAll("[data-tabs]")];

  if (tabsets.length) {
    const tabContents = [...document.querySelectorAll(".tab-content")];
    let targetID;

    tabsets.forEach((tabset) => {
      const tabs = tabset.querySelectorAll("a");

      tabs.forEach((tab, i) => {
        if (i === 0) {
          tab.classList.add("active");
          targetID = tab.hash;
          tabContents.forEach((t) =>
            t.querySelector(`${targetID}`).classList.add("active")
          );
        }

        tab.addEventListener("click", (e) => {
          e.preventDefault();
          tabs.forEach((t) => t.classList.remove("active"));
          if (e.target.tagName === "A") {
            targetID = tab.getAttribute("href");
            tab.classList.add("active");
          } else {
            targetID = tab.getAttribute("href");
            tab.classList.add("active");
          }

          if (document.querySelector(targetID)) {
            var currentItem = document.querySelector(targetID);
            currentItem.classList.add("active");

            getSiblings(currentItem).forEach((tab) => {
              tab.classList.remove("active");
            });
          }
        });
      });
    });
  }

  let getSiblings = function (e) {
    let siblings = [];
    if (!e.parentNode) {
      return siblings;
    }
    let sibling = e.parentNode.firstChild;

    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };
}

function initAccordion() {
  const faqAccordions = document.querySelectorAll(".faq__accordion");
  faqAccordions.forEach((element) => {
    new Accordion(element, {
      openOnInit: [0],
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFancybox();
  initTabs();
  initAccordion();
});

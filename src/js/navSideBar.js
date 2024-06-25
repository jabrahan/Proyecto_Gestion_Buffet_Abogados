const expand_btn = document.querySelector(".expand-btn");

let activeIndex;


expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
  
  const main = document.querySelector("main");
  //console.log(main)
  if (document.body.classList.contains("collapsed")) {
    
    main.classList.remove("main_menu");
    main.classList.add("main_collapse");
    
  } else {
    
   
    main.classList.add("main_menu");
    main.classList.remove("main_collapse");
  }
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("bg-cyan-950", "text-white");
      } else {
        link.classList.remove("bg-cyan-950", "text-white");
      }
    });
  });
});

const searchInput = document.querySelector(".search__wrapper input");

searchInput.addEventListener("focus", (e) => {
  document.body.classList.remove("collapsed");
});
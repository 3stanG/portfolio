document.addEventListener("DOMContentLoaded", function () {
    const fadeElems = document.querySelectorAll(".fade-in");

    const fadeIn = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(fadeIn, options);
    fadeElems.forEach(function (fadeElem) {
      observer.observe(fadeElem);
    });
  });
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const servicesSection = document.getElementById("services");

  window.addEventListener("scroll", function () {
    const servicesTop =
      servicesSection.getBoundingClientRect().top + window.scrollY;
    const scrollTop = window.scrollY;

    if (scrollTop >= servicesTop) {
      console.log("scrolled");
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

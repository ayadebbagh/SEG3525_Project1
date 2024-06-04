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

document.querySelectorAll("#dropdown-item1").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelector("#dropdownMenuButton1").textContent =
      event.target.textContent;
  });
});
document.querySelectorAll("#dropdown-item2").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelector("#dropdownMenuButton2").textContent =
      event.target.textContent;
  });
});

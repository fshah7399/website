// ANIMATION START
// AOS.init({
//   offset: 200,
//   duration: 3000,
// });

// ANIMATION END

const toggleBtn = document.querySelector(".bar");
const toggleBtnIcon = document.querySelector(".bar i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

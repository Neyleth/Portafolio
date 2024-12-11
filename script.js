let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};
function toggleText(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  const moreText = event.target.previousElementSibling; // Obtiene el span con el texto adicional
  const readMore = event.target; // Obtiene el enlace "Leer más"

  if (moreText.style.display === "none") {
    moreText.style.display = "inline"; // Muestra el texto adicional
    readMore.textContent = "Leer menos"; // Cambia el texto del enlace a "Leer menos"
  } else {
    moreText.style.display = "none"; // Oculta el texto adicional
    readMore.textContent = "Leer más"; // Cambia el texto del enlace a "Leer más"
  }
}

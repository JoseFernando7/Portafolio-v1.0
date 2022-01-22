// Script para el scroll de los enlaces de la barra de navegación.
const links = document.querySelectorAll(".barr-nav ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) 
{
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

  scroll(
    {
    top: (offsetTop - 118),
    behavior: "smooth"
    });
}
if (location.hash) {
    history.replaceState("", document.title, location.pathname);
}

// header animation on scroll
// Recupera tutti i link del header
var links = document.querySelectorAll("header a");
console.log(links[0].classList)

// Recupera tutte le sezioni della pagina
var sections = document.querySelectorAll("section");

// Ascolta l'evento scroll
window.addEventListener("scroll", function() {
  // Calcola la posizione dello scroll
  var scrollPosition = window.pageYOffset;

  // Itera attraverso tutte le sezioni
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionTop = section.offsetTop - 50;
    var sectionBottom = sectionTop + section.offsetHeight;
    console.log(sectionTop, sectionBottom)

    // Controlla se la posizione dello scroll si trova all'interno della sezione corrente
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      // Rimuove la classe active dai link del header
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }

      // Aggiunge la classe active al link corrispondente alla sezione corrente
      var link = document.querySelector("header .header-link[href='#" + section.id + "']");
      link.classList.add("active");
    }
  }
});
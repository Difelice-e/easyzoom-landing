if (location.hash) {
    history.replaceState("", document.title, location.pathname);
}

// header animation on scroll
// Recupera tutti i link del header
var links = document.querySelectorAll("header a");

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

// codice carosello
const data = [
  {
    title: `Advanced <span class="text-primary">analytics</span> chart`,
    text: `Unlock the power of data with our deep dive into sales history, floor price, volume, and trends.`,
    img: 'https://picsum.photos/800/600',  
  },
  {
    title: `Discover the <span class="text-primary">whales</span>`,
    text: `Discover the NFTs biggest players and see which NFTs they are buying and selling with our exclusive whale tracking features.`,
    img: 'https://picsum.photos/800/600',  
  },
  {
    title: `Get <span class="text-primary">live feed</span> data`,
    text: `Stay on top of the NFT market keeping track of every sale, transfer, and mint. Get instant alerts when important events occur.`,
    img: 'https://picsum.photos/800/600',  
  },
  {
    title: `Wallet <span class="text-primary">historys</span>`,
    text: `Easily sift through each wallet to see which NFTs are being bought and sold, and watch as the profits roll in.`,
    img: 'https://picsum.photos/800/600',  
  },
]

const carousel = document.querySelector('.features-controller');
const carouselTitle = document.querySelector('#carousel-title');
const carouselImg = document.querySelector('#carousel-img');
const carouselText = document.querySelector('#carousel-text');
const carouselLinks = carousel.querySelectorAll('li');

let intervalId;

let currentIndex = 0;

function setActive(index) {
  carouselLinks.forEach((link, i) => {
    if (i === index) {
      link.classList.add('active');
      carouselImg.src = data[i].img;
      carouselTitle.innerHTML = data[i].title;
      carouselText.innerHTML = data[i].text;
    } else {
      link.classList.remove('active');
    }
  })
}

function startInterval() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % data.length;
    setActive(currentIndex);
  }, 3000);
}

startInterval();

carousel.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

carousel.addEventListener('mouseleave', () => {
  startInterval();
});

carouselLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    currentIndex = index;
    setActive(currentIndex);
  });
});

// faq code
var faqs = document.querySelectorAll('.faq-list li');

faqs.forEach(function(faq) {
  faq.addEventListener('click', function() {
    var openFaq = document.querySelector('.faq-list .open');
    if(this.classList.contains('open')){
      this.classList.remove('open');
      openFaq.querySelector('.answer').style.maxHeight = "0";
      openFaq.querySelector('.answer').style.height = "0";
    } else {
        if (openFaq) {
          openFaq.classList.remove('open');
          openFaq.querySelector('.answer').style.maxHeight = "0";
          openFaq.querySelector('.answer').style.height = "0"; 
        }
        this.classList.add('open');
        this.querySelector('.answer').style.maxHeight = "500px";
        this.querySelector('.answer').style.height = this.querySelector('.answer').scrollHeight + "px";
      }
  });
});

// footer links animation
const items = document.querySelectorAll('.social-link');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        items.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('transition');
                otherItem.style.filter = 'invert(53%) sepia(6%) saturate(16%) hue-rotate(338deg) brightness(93%) contrast(87%)';
            }
        });
    });
    item.addEventListener('mouseout', () => {
        items.forEach(otherItem => {
            otherItem.classList.add('transition');
            otherItem.style.filter = 'invert(48%) sepia(68%) saturate(809%) hue-rotate(139deg) brightness(99%) contrast(102%)';
        });
    });
});
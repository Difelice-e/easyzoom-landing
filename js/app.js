if (location.hash) {
    history.replaceState("", document.title, location.pathname);
}

// header animation on scroll
// Recupera tutti i link del header
var links = document.querySelectorAll(".header-link");

// imposta home come primo link attivo
links[0].classList.add('active')

// Recupera tutte le sezioni della pagina
var sections = document.querySelectorAll("section:not(#features-2)");

// Ascolta l'evento scroll
window.addEventListener("scroll", function() {
  // Calcola la posizione dello scroll
  var scrollPosition = window.pageYOffset + 300;

  // Itera attraverso tutte le sezioni
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];

    if (i === 0) {
      var sectionTop = section.offsetTop;
      var sectionBottom = sectionTop + section.offsetHeight;
    } else {
      if (section.id !== 'features') {
        sectionTop = sectionBottom
        var sectionBottom = sectionTop + section.offsetHeight;
      } else {
        var secondSection = document.querySelector('#features-2');
        var sectionTop = sectionBottom
        var sectionBottom = sectionTop + section.offsetHeight + secondSection.offsetHeight
      } 
    }

    // Controlla se la posizione dello scroll si trova all'interno della sezione corrente
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      // Rimuove la classe active dai link del header
      // console.log('active',section.id)
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }

      // Aggiunge la classe active al link corrispondente alla sezione corrente
      var link = document.querySelector("header .header-link[href='#" + section.id + "']");
      link.classList.add("active");
    }
  }
});

// header hamburger menù
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuItems = document.querySelectorAll('.header-link');
const navbar = document.querySelector('.navbar');
const returnTop = document.querySelector('.return-top');
const header = document.querySelector('header')

hamburgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  returnTop.classList.toggle('hidden');
  header.classList.toggle('open-menu');
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    navbar.classList.remove('active');
    returnTop.classList.add('hidden');
    header.classList.remove('open-menu');
  });
})

// codice carosello
const data = [
  {
    title: `Advanced <span class="text-primary">analytics</span> chart`,
    text: `Unlock the power of data with our deep dive into sales history, floor price, volume, and trends.`,
    video: 'video/table.mp4',  
  },
  {
    title: `Discover the <span class="text-primary">whales</span>`,
    text: `Discover the NFTs biggest players and see which NFTs they are buying and selling with our exclusive whale tracking features.`,
    video: 'video/analytics.mp4',  
  },
  {
    title: `Get <span class="text-primary">live feed</span> data`,
    text: `Stay on top of the NFT market keeping track of every sale, transfer, and mint. Get instant alerts when important events occur.`,
    video: 'video/holders.mp4',  
  },
  {
    title: `Wallet <span class="text-primary">historys</span>`,
    text: `Easily sift through each wallet to see which NFTs are being bought and sold, and watch as the profits roll in.`,
    video: 'video/wallet-feed.mp4',  
  },
]

const carousel = document.querySelector('.features-controller');
const carouselArea = document.querySelector('#features-2');
const carouselTitle = document.querySelector('#carousel-title');
const carouselVideo = document.querySelector('#carousel-video');
const carouselText = document.querySelector('#carousel-text');
const carouselLinks = carousel.querySelectorAll('li');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let intervalId;

let currentIndex = 0;

function setActive(index) {
  carouselLinks.forEach((link, i) => {
    if (i === index) {
      link.classList.add('active');
      carouselVideo.classList.add('fade-out')
      setTimeout(() => {
        console.log(data[i].video)
        carouselVideo.src = data[i].video;
        carouselTitle.innerHTML = data[i].title;
        carouselText.innerHTML = data[i].text;
      }, 300)
      setTimeout(() => {
        carouselVideo.classList.remove('fade-out')
      }, 300)
      
    } else {
      link.classList.remove('active');
    }
  })
}

function startInterval() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % data.length;
    setActive(currentIndex);
  }, 6000);
}

startInterval();

carouselArea.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

carouselArea.addEventListener('mouseleave', () => {
  startInterval();
});

carouselLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    currentIndex = index;
    setActive(currentIndex);
  });
});

prev.addEventListener('click', () => {
  if (currentIndex !== 0) {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = carouselLinks.length - 1
  }
  setActive(currentIndex);
});

next.addEventListener('click', () => {
  if (currentIndex !== carouselLinks.length - 1) {
    currentIndex = currentIndex + 1;
  } else {
    currentIndex = 0
  }
  setActive(currentIndex);
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
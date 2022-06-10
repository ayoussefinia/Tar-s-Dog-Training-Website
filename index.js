const carouselButtons = document.querySelectorAll('[data-button]');

carouselButtons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'left' ? -1 : 1;
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
    const activeSlide = slides.querySelector('[data-active]');

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    
    delete activeSlide.dataset.active
    slides.children[newIndex].dataset.active = true;
  });
});

// Initialize and add the map
function initMap() {
    // The location of Uluru
     
    const uluru = { lat: 29.37289570673317, lng: -98.27575461424908};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;


//   document.getElementById("contact-button").addEventListener("click", openEmail);
  document.getElementById("about").addEventListener("click", scrollToAbout);
  document.getElementById("services").addEventListener("click", scrollToServices);
  document.getElementById("gallery").addEventListener("click", scrollToGallery);
  document.getElementById("location").addEventListener("click", scrollToLocation);

  document.getElementById("cell-about").addEventListener("click", scrollToCellAbout);
  document.getElementById("cell-services").addEventListener("click", scrollToCellServices);
  document.getElementById("cell-gallery").addEventListener("click", scrollToCellGallery);
  document.getElementById("cell-location").addEventListener("click", scrollToCellLocation);

function scrollToAbout() {
    window.scrollTo({
        top: 800,
        left: 100,
        behavior: 'smooth'
      });
  }
  function scrollToCellAbout() {
    window.scrollTo({
        top: 400,
        left: 100,
        behavior: 'smooth'
      });
  }

function scrollToServices() {
  window.scrollTo({
      top: 4000,
      left: 100,
      behavior: 'smooth'
    });
}

function scrollToCellServices() {
  window.scrollTo({
      top: 7400,
      left: 100,
      behavior: 'smooth'
    });
}
function scrollToGallery() {
    window.scrollTo({
        top: 4800,
        left: 100,
        behavior: 'smooth'
      });
  }

  function scrollToCellGallery() {
    window.scrollTo({
        top: 8800,
        left: 100,
        behavior: 'smooth'
      });
  }

  function scrollToLocation() {
    window.scrollTo({
        top: 5600,
        left: 100,
        behavior: 'smooth'
      });
  }

  function scrollToCellLocation() {
    window.scrollTo({
        top: 9600,
        left: 100,
        behavior: 'smooth'
      });
  }

  document.getElementById("paw-2").addEventListener("click", toggleCellNav);

  function toggleCellNav() {
    if ( document.getElementById("cell-nav").classList.contains("cell-nav-open")) {
      document.getElementById("cell-nav").classList.remove("cell-nav-open");
      document.getElementById("cell-nav").classList.add("cell-nav-closed");
      document.getElementById('move-everything').classList.remove("move-everything");
      document.getElementById("paw-2").classList.remove("paw-2-open");
    }
    else {
      document.getElementById("cell-nav").classList.add("cell-nav-open");
      document.getElementById("cell-nav").classList.remove("cell-nav-closed");
      document.getElementById('move-everything').classList.add("move-everything");
      document.getElementById("paw-2").classList.add("paw-2-open");
    }

  }
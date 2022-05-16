window.addEventListener('scroll', onScroll);

onScroll(); 

function onScroll(){
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll(){
  if(scrollY > 0){
    navigation.classList.add('scroll');
  }else{
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if(scrollY > 550){
    backToTopButton.classList.add('show');
  }else{
    backToTopButton.classList.remove('show')
  }
}

// SCROOL REVEAL
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home, 
            #home img,
            #home .stats,
            #services,
            #services header,
            #services .card,
            #about,
            #about header,
            #about .content,
            #contact`);

function burgerMenu(selector) {
   let menu = document.querySelector(selector);
   let button = menu.querySelector('.burger-menu__button');
   let links = menu.querySelector('.burger-menu__link');
   let overlay = menu.querySelector('.burger-menu__overlay');

   button.addEventListener('click', (e) => {
      e.preventDefault();
      toogleMenu();
   });

   links.addEventListener('click', () => toogleMenu());
   overlay.addEventListener('click', () => toogleMenu());

   function toogleMenu() {
      menu.classList.toggle('burger-menu__active')

      if (menu.classList.contains('burger-menu__active')) {
         document.querySelector('body').style.overflow = "hidden";
         console.log()
      } else {
         document.querySelector('body').style.overflow = "visible";
         console.log()
      }
   }
}

burgerMenu('.burger-menu');
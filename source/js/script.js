var menuList = document.querySelector('.menu-list');
var burgersButton = document.querySelector('.main-header__burgers');

  menuList.classList.remove('menu-list--nojs');
  burgersButton.classList.remove('main-header__burgers--nojs');

  burgersButton.addEventListener('click', function() {
    if (menuList.classList.contains('menu-list--opened-js')) {
      menuList.classList.remove('menu-list--opened-js');
      burgersButton.classList.remove('main-header__burgers--opened-js');
    } else {
      menuList.classList.add('menu-list--opened-js');
      burgersButton.classList.add('main-header__burgers--opened-js');
    }
  });

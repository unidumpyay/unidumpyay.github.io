document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('menu-btn');
    var navContainer = document.querySelector('.nav-container');

  
    menuBtn.addEventListener('change', function () {
      if (this.checked) {
        navContainer.style.height = '150px';
        navContainer.style.transform = 'scale(1,1)';
        navContainer.style.transformOrigin = 'top';
        navContainer.style.transition = 'transform 400ms ease-out';
      } else {
        navContainer.style.height = '0px';
        navContainer.style.transform = 'scale(1,0)';
      }
    });
  
    window.addEventListener('resize', function () {
      if (window.innerWidth > 800) {
        navContainer.style.height = 'auto';
        navContainer.style.transform = 'none';
      } else {
        navContainer.style.height = '0px';
        navContainer.style.transform = 'scale(1,0)';
      }
    });
  });
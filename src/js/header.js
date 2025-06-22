   const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navMenu = document.getElementById('navMenu');

    menuBtn.addEventListener('click', () => {
      navMenu.classList.remove('-translate-x-full');
    });

    closeBtn.addEventListener('click', () => {
      navMenu.classList.add('-translate-x-full');
    });
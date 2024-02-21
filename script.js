document.addEventListener('DOMContentLoaded', function () {
   let hamburger = document.querySelector('.hamburger');
   let menu = document.querySelector('.menu');
   let closeIcon = document.querySelector('.icon-close');
  

    // Toggle the menu when clicking the hamburger icon
    hamburger.addEventListener('click', function () {
        menu.classList.toggle('open');
    });


    // Close the menu when clicking on the close icon
    closeIcon.addEventListener('click', function () {
        menu.classList.toggle('open');
        hamburger.style.display = 'block'; // Display hamburger icon again
    });
     
   
   
});

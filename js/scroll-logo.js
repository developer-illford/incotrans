window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');
  if (window.scrollY > 50) { // change 50 to your desired scroll point
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

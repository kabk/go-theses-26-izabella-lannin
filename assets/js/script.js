// Your javascript goes here

// Dropdown Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.getElementById('dropdownBtn');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const dropdownContainer = document.querySelector('.dropdown-container');
  const maxWidth = 350;
  const minWidth = 150;

  // Toggle dropdown on button click
  dropdownBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('active');
  });

  // Close dropdown when clicking on a menu item
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
      dropdownMenu.classList.remove('active');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-container')) {
      dropdownMenu.classList.remove('active');
    }
  });

  // Resize dropdown on scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    // Reduce width by 1px for every 2px scrolled, starting from maxWidth
    const newWidth = Math.max(minWidth, maxWidth - (scrollPosition / 2));
    dropdownContainer.style.width = newWidth + 'px';
  });
});
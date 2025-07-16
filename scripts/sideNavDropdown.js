function setupDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const header = dropdown.querySelector('.dropdown-header');
    
    header.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });
  });
}

// Init Dom
document.addEventListener('DOMContentLoaded', setupDropdowns);

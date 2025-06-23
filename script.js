function toggleDropdown() {
  const dropdown = document.getElementById('gameDropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('gameDropdown');
  const button = document.getElementById('browseButton');
  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});

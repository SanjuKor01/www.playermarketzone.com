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
<script>
  const toggleBtn = document.getElementById('themeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleBtn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
  });
</script>
<script>
  function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    window.location.href = "login.html";
  }
</script>
// ✅ LOGIN FUNCTION (Already works on login.html)
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email);
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter email and password");
  }
}

// ✅ LOGOUT FUNCTION (Use in dashboard or sidebar)
function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("userEmail");
  window.location.href = "login.html";
}

// ✅ ONLOAD CHECK (Protect pages)
window.onload = function () {
  const currentPage = window.location.pathname;

  if (
    currentPage.includes("dashboard") ||
    currentPage.includes("orders") ||
    currentPage.includes("messages") ||
    currentPage.includes("create-offer") ||
    currentPage.includes("account-settings") ||
    currentPage.includes("my-balance") ||
    currentPage.includes("active-offers")
  ) {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "login.html";
    }
  }
};


document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();

  if (!currentPage) {
    currentPage = "home.html";
  }

  let links = document.querySelectorAll(".navTitles a");

  links.forEach(link => {
    let href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const body = document.body;
const toggleBtn = document.getElementById("themeToggle");
const toggleIcon = toggleBtn.querySelector("img");

let savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

toggleBtn.addEventListener("click", () => {
  let newTheme = body.classList.contains("light") ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

function setTheme(theme) {
  body.className = theme;
  document.documentElement.setAttribute("data-theme", theme);

  if (theme === "dark") {
    toggleIcon.src = "Icons/dark_mode.png";
  } else {
    toggleIcon.src = "Icons/light_mode.png";
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 const cards = document.querySelectorAll(".sayCardsWrapper");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const dots = document.querySelectorAll(".dot");

  let current = 0;

  function updateCards(index) {
    cards.forEach((card, i) => {
      card.classList.remove("active", "next");
      if (i === index) {
        card.classList.add("active");
      } else if (i === (index + 1) % cards.length) {
        card.classList.add("next");
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % cards.length;
    updateCards(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCards(current);
  });

  updateCards(current);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  document.getElementById("subscribeBtn").addEventListener("click", function (e) {
    e.preventDefault();

    let emailInput = document.getElementById("email");
    let messageBox = document.getElementById("subscribeMessage");
    let email = emailInput.value.trim();

    if (email === "") {
      alert("Please fill the fields!");
      return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email!");
      return;
    }

    messageBox.style.display = "block";
    messageBox.style.color = "var(--color-mostCommon)";
    messageBox.style.fontSize="18px";
    messageBox.style.fontFamily="Poppins, sans-serif";
    messageBox.innerText =
      "You have successfully subscribed! We will contact you soon via  "+ email;
    emailInput.value = "";
  });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollHome", window.scrollY);
});

window.addEventListener("load", () => {
  const savedScroll = localStorage.getItem("scrollHome");
  if (savedScroll) {
    window.scrollTo(0, savedScroll);
  }
});




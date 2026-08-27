const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".navbar-school .nav-link");

navLinks.forEach(function (link) {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

const fadeElements = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

fadeElements.forEach(function (el) {
  observer.observe(el);
});

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop the page from refreshing
    const messageBox = document.getElementById("newsletterMessage");
    messageBox.textContent = "Thank you for subscribing!";
    messageBox.classList.remove("d-none");
    newsletterForm.reset(); // clear the input box
  });
}

const facultySearchBox = document.getElementById("facultySearch");

if (facultySearchBox) {
  facultySearchBox.addEventListener("keyup", function () {
    const searchValue = facultySearchBox.value.toLowerCase();
    const facultyCards = document.querySelectorAll(".faculty-card");

    facultyCards.forEach(function (card) {
      const name = card.querySelector(".faculty-name").textContent.toLowerCase();
      if (name.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {
  admissionForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop real submission (no backend yet)

    const studentName = document.getElementById("studentName").value.trim();
    const errorBox = document.getElementById("admissionError");
    const successBox = document.getElementById("admissionSuccess");

    if (studentName === "") {
      errorBox.classList.remove("d-none");
      successBox.classList.add("d-none");
    } else {
      errorBox.classList.add("d-none");
      successBox.classList.remove("d-none");
      admissionForm.reset();
    }
  });
}

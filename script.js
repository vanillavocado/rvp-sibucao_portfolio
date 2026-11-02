
/* NAVIGATION */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});


/* INDEPENDENT WORK CAROUSELS */
document.querySelectorAll(".work-category").forEach(category => {
  const carousel = category.querySelector(".art-carousel");
  const buttons = category.querySelectorAll(".carousel-arrow");

  if (!carousel) return;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = Number(button.dataset.direction);
      const card = carousel.querySelector(".art-card");

      if (!card) return;

      const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
      const cardWidth = card.getBoundingClientRect().width;
      const cardsPerPage = category.classList.contains("sprites-category") ? 2 : 3;
const pageWidth = (cardWidth + gap) * cardsPerPage;

      carousel.scrollBy({
        left: direction * pageWidth,
        behavior: "smooth"
      });
    });
  });
});


/* ARTWORK POPUP */
const artModal = document.querySelector("#artModal");
const modalTitle = document.querySelector("#modalTitle");
const modalType = document.querySelector("#modalType");
const modalDescription = document.querySelector("#modalDescription");
const modalPreview = document.querySelector(".modal-art-preview");

document.querySelectorAll(".art-open").forEach(button => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.title;
    modalType.textContent = button.dataset.type;
    modalDescription.textContent = button.dataset.description;

    modalPreview.innerHTML = "";

    const artworkImage = button.querySelector(".art-image img");

    if (artworkImage) {
      const image = document.createElement("img");
      image.src = artworkImage.src;
      image.alt = artworkImage.alt || button.dataset.title;
      modalPreview.appendChild(image);
    } else {
      const placeholder = document.createElement("span");
      placeholder.textContent = "ARTWORK PREVIEW";
      modalPreview.appendChild(placeholder);
    }

    artModal.showModal();
  });
});

/* CLOSE POPUP */
document.querySelector(".modal-close").addEventListener("click", () => {
  artModal.close();
});

artModal.addEventListener("click", event => {
  if (event.target === artModal) {
    artModal.close();
  }
});

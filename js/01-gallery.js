import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEL = document.querySelector(".gallery");
galleryEL.insertAdjacentHTML("afterBegin", createGalleryMarkUp(galleryItems));
galleryEL.addEventListener("click", toActivateModalImg);
let modalImg;

function createGalleryMarkUp(arrayImg) {
  return arrayImg
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

function toActivateModalImg(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  modalImg = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);

  modalImg.show(document.addEventListener("keydown", toCloseModalWindow));
}

function toCloseModalWindow(event) {
  if (event.code === "Escape" || !modalImg.visible()) {
    modalImg.close();
    document.removeEventListener("keydown", toCloseModalWindow);
  }
}

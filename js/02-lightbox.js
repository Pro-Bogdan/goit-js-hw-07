import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEL = document.querySelector(".gallery");
galleryEL.insertAdjacentHTML("afterBegin", createGalleryMarkUp(galleryItems));

//initialization library SimpleLightbox
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

//create Markup
function createGalleryMarkUp(arrayImg) {
  return arrayImg
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

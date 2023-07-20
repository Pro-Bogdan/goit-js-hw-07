import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEL = document.querySelector(".gallery");
galleryEL.insertAdjacentHTML("afterBegin", createGalleryMarkUp(galleryItems));
galleryEL.addEventListener("click", toActivateModalImg);

//Create MarkUp
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

// to run Modal Window for show Large Image
function toActivateModalImg(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const modalImg = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,
    {
      closable: false, //disable to close modal window by Click
    }
  );

  //to show modal window and run function Listener for to close modal
  modalImg.show(toListenModalWindowforClose);
}

//function for listening modalWindow
function toListenModalWindowforClose(modalWindow) {
  // activate Listener for click and keyboard
  document.addEventListener("keydown", toCloseModalWindow);
  document.addEventListener("click", toCloseModalWindow);

  //callback for addEventListener, check Escape or click and to call function for close modalWindow
  function toCloseModalWindow(event) {
    if (event.code !== "Escape" && event.type !== "click") {
      return;
    }
    modalWindow.close(toDisActivateListenModalImg);
  }

  //disactive Listeners
  function toDisActivateListenModalImg() {
    document.removeEventListener("keydown", toCloseModalWindow);
    document.removeEventListener("click", toCloseModalWindow);
  }
}

const galleryEL = document.querySelector(".gallery");
const createImgEl = document.querySelector("button[data-create]");
const destroyImgEl = document.querySelector("button[data-destroy]");
const inputImgEl = document.querySelector("#controls input");

createImgEl.addEventListener("click", () =>
  createGalleryMarkUp(inputImgEl.value)
);
destroyImgEl.addEventListener("click", toDestroyGallery);

//create markup
function createGalleryMarkUp(qnt) {
  const array = [];
  for (let i = 0; i < qnt; i += 1) {
    const liTag = document.createElement("li");
    liTag.classList.add("gallery__item");
    const imgTag = document.createElement("img");
    imgTag.classList.add("gallery__image", "lazyload", "not-loaded");
    imgTag.loading = "lazy";
    imgTag.src = `https://picsum.photos/${i + 300}/300?1`;
    liTag.append(imgTag);
    array.push(liTag);
  }
  galleryEL.append(...array);
}

//destroy gallery Markup
function toDestroyGallery() {
  inputImgEl.value = "";
  galleryEL.innerHTML = "";
}

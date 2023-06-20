import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryItemsEl = document.querySelector('.gallery');
const cardsGallery = createImageCards(galleryItems);

galleryItemsEl.insertAdjacentHTML('beforeend', cardsGallery);
galleryItemsEl.addEventListener('click', onContainer); 

function createImageCards(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"   
    />
  </a>
</li>`
  }).join('');
};


function onContainer(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  
  new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:"250"});

};

console.log(galleryItems);
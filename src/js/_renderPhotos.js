import {galleryContainer} from './_var';
import { openModal } from './_modal';

export function render(arr,title,arrow) {
  galleryContainer.innerHTML='';

  const galleryHeader =document.createElement('div');
  galleryHeader.classList.add('gallery__header');

  const galleryTitle = document.createElement('h1');
  galleryTitle.innerText=title;
  galleryTitle.classList.add('gallery__title');

  if (arrow === 'x') {
    const searchReturn =document.createElement('span');
    searchReturn.innerText=arrow;
    galleryHeader.appendChild(searchReturn);
    galleryTitle.classList.remove('gallery__title');
    galleryTitle.classList.add('gallery__title-search');
  }

  const toRender = [];
  arr.forEach(element => {
    const srcImage = element.src.original;
    const autor = element.photographer;
    const article = document.createElement('div');
    const imgWrapper = document.createElement('div');
    const img = document.createElement('img');

    article.classList.add('gallery__image-container');
    imgWrapper.classList.add('gallery__image-wrapper');
    img.classList.add('gallery__image');

    imgWrapper.appendChild(img);

    img.addEventListener('load', () => {
      imgWrapper.style.backgroundColor = 'transparent';
    });

    img.src = srcImage;
    img.alt = element.alt;
    article.appendChild(imgWrapper);
    toRender.push(article);

    img.addEventListener('click', () => {
      openModal(srcImage, autor);
    });
  });
  galleryHeader.appendChild(galleryTitle);
  galleryContainer.appendChild(galleryHeader);
  galleryContainer.append(...toRender);
}
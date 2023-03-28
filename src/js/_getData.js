import axios from 'axios';
import {openModal} from './_modal';

const API_KEY = process.env.API_KEY;

const api = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: API_KEY,
  },
});

const galleryContainer = document.querySelector('.gallery__container');

export function getPhotos() {
  api.get('curated?page=1&per_page=5')
    .then(res => {
      const photos = res.data.photos;
      // console.log(photos);
      const toRender = [];

      photos.forEach(element => {
        const srcImage = element.src.original;
        const autor = element.photographer;
        // console.log(autor);
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
      galleryContainer.append(...toRender);
    })
    .catch(error => {
      console.log(error);
    });
}


import axios from 'axios';

const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;
const API_KEY = process.env.API_KEY;

const api = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: API_KEY,
  },
});

const galleryContainer = document.querySelector('.gallery__container');

export function getPhotos() {
  api
    .get('search?query=nature&per_page=5&page=1')
    .then(res => {
      // console.log(res.data);
      // console.log(res.data.photos);
      const photos = res.data.photos;
      console.log(photos);
      const toRender = [];

      photos.forEach(element => {
        const article = document.createElement('div');
        const img = document.createElement('img');

        article.classList.add('gallery__image-container');
        img.classList.add('gallery__image');
        img.src = element.src.original

        article.appendChild(img)

        toRender.push(article)
      });
      galleryContainer.append(...toRender)
    })
    .catch(error => {
      console.log(error);
    });

}





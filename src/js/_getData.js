import axios from 'axios';

const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

const api = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${unsplashAccessKey}`,
  },
});

const galleryContainer = document.querySelector('.gallery__container');

export function random() {
  api
    .get('/photos/random')
    .then(res => {
      console.log(res.data);
      const toRender = [];

      res.forEach(element => {
        const article = document.createElement('div');
        const img = document.createElement('img');

        article.classList.add('gallery__image-container');
        img.classList.add('gallery__image');

        article.appendChild(img)

        toRender.push(article)
      });
      galleryContainer.append(...toRender)
    })
    .catch(error => {
      console.log(error);
    });

}




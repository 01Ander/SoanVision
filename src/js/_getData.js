import { api } from './_var';
import { render } from './_renderPhotos';

export function getPhotos() {
  api
    .get('curated?page=1&per_page=5')
    .then(res => {
      const photos = res.data.photos;
      render(photos,'Galería Principal','');
    })
    .catch(error => {
      console.log(error);
    });
}


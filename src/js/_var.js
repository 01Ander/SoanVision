export const logoHeader = document.querySelector('.header__logo');
export const imgSearch = document.querySelector('.search-bar__icon');
export const iconUpload = document.querySelector('.photo-uploader__icon');
export const github = document.querySelector('.github');
export const notion = document.querySelector('.notion');
export const modal = document.getElementById("myModal");
export const modalImg = document.querySelector(".modal-content");
export const captionText = document.querySelector(".caption");
export const closeBtn = document.querySelector('.close');
export const searchForm = document.querySelector('.search-bar__form');
export const searchInput = document.querySelector('.search-bar__input');
export const searchIcon = document.querySelector('.search-bar__icon');
export const galleryContainer = document.querySelector('.gallery__container');

import axios from 'axios';

const API_KEY = process.env.API_KEY;

export const api = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: API_KEY,
  },
});
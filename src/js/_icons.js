import icon from "../img/lupa.svg";
import upload from "../img/upload.svg"
import githubIcon from "../img/github.svg";
import notionIcon from "../img/notion.svg";
import {imgSearch, iconUpload, github, notion} from './_var.js';

export function configureSearchIcon() {
  imgSearch.style.background = `url(${icon}) center no-repeat`;
}

export function configureUploadIcon() {
  iconUpload.style.background = `url(${upload}) center no-repeat`;
  }

export function configureGithubIcon() {
  github.style.background = `url(${githubIcon}) center no-repeat`;
}
export function configureNotionIcon() {
  notion.style.background = `url(${notionIcon}) center no-repeat`;
}

import logo from "../img/Logo.svg";
import {logoHeader} from './_var';

export function configureLogo() {
  logoHeader.style.background = `url(${logo}) center no-repeat`;
  console.log('pagina de logo');
}

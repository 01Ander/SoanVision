import '../src/sass/_reset.sass';
import '../src/sass/_header.sass';
import '../src/sass/_search-bar.sass';
import logo from "../src/img/Logo.svg";
import icon from "../src/img/lupa.svg";


const logoHeader = document.querySelector('.header__logo');
const imgSearch = document.querySelector('.search-bar__icon');

logoHeader.style.background = `url(${logo}) center no-repeat`;
imgSearch.style.background = `url(${icon}) center no-repeat`;
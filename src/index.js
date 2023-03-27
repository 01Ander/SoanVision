import '../src/sass/reset.sass';
import '../src/sass/_var.sass'
import '../src/sass/header.sass';
import logo from "../src/img/Logo.svg";

const logoHeader = document.querySelector('.header__logo');
logoHeader.style.background = `url(${logo}) center no-repeat`;
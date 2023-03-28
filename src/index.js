import {logoHeader, imgSearch} from '../src/js/_var.js';
import '../src/sass/_style.sass';
import logo from "../src/img/Logo.svg";
import icon from "../src/img/lupa.svg";
import { random } from '../src/js/_getData.js'


// const API_KEY = process.env.API_KEY;

logoHeader.style.background = `url(${logo}) center no-repeat`;
imgSearch.style.background = `url(${icon}) center no-repeat`;


random();
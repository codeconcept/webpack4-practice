import { add, div, mult } from './math';
import './app.css';
import jsLogoBase64 from './assets/jsLogo.png';

// console.log('jsLogoBase64', jsLogoBase64);

const jsLogo = document.getElementById('jsLogo');
jsLogo.src = jsLogoBase64;

const res = add(1, 2);
const resDiv = div(1, 2);
console.log(res, resDiv, mult(2, 3));
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "../logo1.jpg";

// import style
import './footer.css'
import './button.css'
import './image.css'

const image = makeImage(imageUrl);

const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("white");
document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image);

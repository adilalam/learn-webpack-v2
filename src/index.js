// import { footer } from "./footer";
const getFooter = () => import("./footer");
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "../logo1.jpg";

// import Foo from "./foo.ts";

// import style
import './footer.css'
import './button.css'
import './image.css'

const image = makeImage(imageUrl);

const button = makeButton("Yay! A Button! compress with source map");
button.style = makeColorStyle("white");
document.body.appendChild(button);

button.addEventListener('click', (e)=>{
  getFooter().then((footerModule)=> {
    document.body.appendChild(footerModule.footer);
  });
})

document.body.appendChild(image);

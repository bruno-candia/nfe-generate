import { CardHeader } from "./cardHeader.js";
import { CardBody } from "./cardBody.js";
import { CardFooter } from "./cardFooter.js";

export function Card(element) {
  element.innerHTML = `
      <header id="header"></header>
      <div class="alarms">
       <main id="body"></main>
       <footer id="footer"></footer>
      </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
  CardHeader(document.querySelector('#header'));
  CardBody(document.querySelector('#body'));
  CardFooter(document.querySelector('#footer'));
})

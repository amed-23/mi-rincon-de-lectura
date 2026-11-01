/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

require("typeface-anaheim");
require("typeface-lobster-two");
import "../styles/main.scss";

AOS.init({
 duration: 1200
});

const navigationToggle = document.querySelector(".navigation__toggle");
const navigationItems = document.querySelector(".navigation__items");

navigationToggle.addEventListener("click", () => {
  navigationItems.classList.toggle("active");
});

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _dist_hours_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/hours.json */ "./dist/hours.json");


function renderContact() {
  const contact = document.createElement("div");
  contact.setAttribute("class", "contact");

  const address = document.createElement("img");
  address.setAttribute("src", "./img/address.jpg");
  address.setAttribute("alt", "Address");
  contact.appendChild(address);

  const contactDetails = document.createElement("section");
  contactDetails.setAttribute("class", "contact-details");
  const contactHeading = document.createElement("h4");
  contactHeading.textContent = "Contact";
  contactDetails.appendChild(contactHeading);
  const contactAddress = document.createElement("address");
  contactAddress.textContent = "10571 W Pico Blvd, Los Angeles, CA";
  contactDetails.appendChild(contactAddress);
  const contactNumber = document.createElement("p");
  contactNumber.textContent = "+1 (212) 518-7402";
  contactDetails.appendChild(contactNumber);
  const contactEMail = document.createElement("p");
  contactEMail.textContent = "contact@food.com";
  contactDetails.appendChild(contactEMail);
  const hoursHeading = document.createElement("h4");
  hoursHeading.textContent = "Working Hours";
  contactDetails.appendChild(hoursHeading);
  const workHours = document.createElement("ul");
  for (const day in _dist_hours_json__WEBPACK_IMPORTED_MODULE_0__) {
    const hours = document.createElement("li");
    hours.textContent = `${day}: ${_dist_hours_json__WEBPACK_IMPORTED_MODULE_0__[day]}`;
    workHours.appendChild(hours);
  }
  contactDetails.appendChild(workHours);
  contact.appendChild(contactDetails);

  return contact;
}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  p.textContent = "Copyright © 2022 Araeek";
  footer.appendChild(p);

  return footer;
}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader() {
  const header = document.createElement("header");

  //Logo
  const logo = document.createElement("div");
  logo.setAttribute("class", "logo");
  const logoImage = document.createElement("img");
  logoImage.setAttribute("src", "./img/icon.png");
  logoImage.setAttribute("alt", "Logo");

  logo.appendChild(logoImage);
  header.appendChild(logo);

  //Navbar
  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar");
  const ul = document.createElement("ul");
  ul.appendChild(createNavBtn("Home"));
  ul.appendChild(createNavBtn("Menu"));
  ul.appendChild(createNavBtn("Contact"));
  nav.appendChild(ul);
  header.appendChild(nav);

  return header;
}

function createNavBtn(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
function renderHome() {
  const home = document.createElement("div");
  home.setAttribute("class", "center-section");

  //Heading
  const headline = document.createElement("h1");
  headline.textContent = "Good food, Good mood!";
  home.appendChild(headline);

  //Center Buttons
  const buttonsContainer = document.createElement("div");
  buttonsContainer.setAttribute("class", "center-buttons");
  buttonsContainer.appendChild(createBtn("Menu"));
  buttonsContainer.appendChild(createBtn("Contact"));
  home.appendChild(buttonsContainer);

  return home;
}

function createBtn(text) {
  const btn = document.createElement("button");
  btn.textContent = text;
  return btn;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _dist_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/menu.json */ "./dist/menu.json");


function renderMenu() {
  const menu = document.createElement("div");
  menu.setAttribute("class", "menu");

  for (const foodName in _dist_menu_json__WEBPACK_IMPORTED_MODULE_0__) {
    const menuSection = document.createElement("section");
    menuSection.setAttribute("class", "menu-section");
    const menuSectionHead = document.createElement("h4");
    menuSectionHead.textContent = foodName;
    menuSection.appendChild(menuSectionHead);
    for (let i = 0; i < _dist_menu_json__WEBPACK_IMPORTED_MODULE_0__[foodName].length; i++) {
      const item = document.createElement("div");
      item.setAttribute("class", "item");
      const itemName = document.createElement("p");
      itemName.textContent = _dist_menu_json__WEBPACK_IMPORTED_MODULE_0__[foodName][i]["item"];
      const itemPrice = document.createElement("p");
      itemPrice.textContent = `$${_dist_menu_json__WEBPACK_IMPORTED_MODULE_0__[foodName][i]["price"]}`;
      item.appendChild(itemName);
      item.appendChild(itemPrice);
      menuSection.appendChild(item);
    }
    menu.appendChild(menuSection);
  }
  return menu;
}


/***/ }),

/***/ "./dist/hours.json":
/*!*************************!*\
  !*** ./dist/hours.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('{"Friday":"6PM - 1AM","Saturday":"6PM - 2AM","Sunday":"6PM - 2AM","Monday":"8PM - 12AM","Tuesday":"8PM - 12AM","Wednesday":"8PM - 12AM","Thursday":"8PM - 12AM"}');

/***/ }),

/***/ "./dist/menu.json":
/*!************************!*\
  !*** ./dist/menu.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"Burgers":[{"item":"Big Mac","price":"4.99"},{"item":"Mini Mac","price":"2.99"},{"item":"Normal Mac","price":"3.99"},{"item":"Big Mac - Meal","price":"5.99"},{"item":"2 Cheeseburgers","price":"3.99"},{"item":"2 Cheeseburgers - Meal","price":"4.89"},{"item":"Quarter Pounder with Cheese","price":"3.79"},{"item":"Quarter Pounder with Cheese - Meal","price":"5.79"},{"item":"Double Quarter Pounder with Cheese","price":"4.79"},{"item":"Double Quarter Pounder with Cheese - Meal","price":"6.69"},{"item":"Bacon Clubhouse Burger","price":"4.49"}],"Pizza":[{"item":"Ultimate Pepperoni","price":"15.99"},{"item":"Cheese Pizza","price":"7.99"},{"item":"Spanich & Feta","price":"13.99"},{"item":"6 Cheese","price":"11.99"},{"item":"Hawaiian","price":"15.99"},{"item":"Cheese Steak","price":"17.99"},{"item":"Veggie","price":"11.99"},{"item":"Chicken Bacon","price":"13.99"},{"item":"Buffalo Chicken","price":"13.99"},{"item":"BBQ Chicken","price":"15.99"},{"item":"Deluxe","price":"18.99"}],"Sandwich":[{"item":"Ultimate Steak","price":"11.49"},{"item":"Meatball Marinara","price":"7.29"},{"item":"Spicy Italian","price":"8.49"},{"item":"Chicken Caesar","price":"7.79"},{"item":"Roast Beef","price":"9.49"},{"item":"Steak & Cheese","price":"9.49"},{"item":"Subway Club","price":"9.49"},{"item":"Tuna","price":"8.49"},{"item":"Turkey & Bacon","price":"11.49"},{"item":"Turkey Breast","price":"8.49"},{"item":"Veggie","price":"4.99"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const body = document.querySelector("body");
const content = document.querySelector("#content");
content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());

body.insertBefore((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])(), content);
body.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());
const home = document.querySelectorAll(".navbar ul li")[0];
home.classList.add("active");
const navbarButtons = document.querySelectorAll(".navbar ul li");
navbarButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    Array.from(navbarButtons).forEach((elem) =>
      elem.classList.remove("active")
    );
    e.target.classList.add("active");
    render(e.target.textContent);
  });
});

function render(contentToRender) {
  content.textContent = "";
  switch (contentToRender) {
    case "Home":
      content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
      break;
    case "Menu":
      content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
      break;
    case "Contact":
      content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])());
      break;
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDM0M7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVM7QUFDN0I7QUFDQSwyQkFBMkIsSUFBSSxJQUFJLDZDQUFTLE1BQU07QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCeUM7QUFDekM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksNENBQVEsbUJBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0Q0FBUTtBQUNyQztBQUNBLGtDQUFrQyw0Q0FBUSx1QkFBdUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0o7QUFDSTtBQUNKO0FBQ007QUFDdEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFVO0FBQzlCO0FBQ0Esa0JBQWtCLG1EQUFZO0FBQzlCLGlCQUFpQixtREFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBVTtBQUNwQztBQUNBO0FBQ0EsMEJBQTBCLGlEQUFVO0FBQ3BDO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQWE7QUFDdkM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaG91cnNKc29uIGZyb20gXCIuLi9kaXN0L2hvdXJzLmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckNvbnRhY3QoKSB7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3RcIik7XHJcblxyXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGFkZHJlc3Muc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWcvYWRkcmVzcy5qcGdcIik7XHJcbiAgYWRkcmVzcy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJBZGRyZXNzXCIpO1xyXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgY29udGFjdERldGFpbHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWN0LWRldGFpbHNcIik7XHJcbiAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgY29udGFjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICBjb250YWN0RGV0YWlscy5hcHBlbmRDaGlsZChjb250YWN0SGVhZGluZyk7XHJcbiAgY29uc3QgY29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYWRkcmVzc1wiKTtcclxuICBjb250YWN0QWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTA1NzEgVyBQaWNvIEJsdmQsIExvcyBBbmdlbGVzLCBDQVwiO1xyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3RBZGRyZXNzKTtcclxuICBjb25zdCBjb250YWN0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29udGFjdE51bWJlci50ZXh0Q29udGVudCA9IFwiKzEgKDIxMikgNTE4LTc0MDJcIjtcclxuICBjb250YWN0RGV0YWlscy5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyKTtcclxuICBjb25zdCBjb250YWN0RU1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb250YWN0RU1haWwudGV4dENvbnRlbnQgPSBcImNvbnRhY3RAZm9vZC5jb21cIjtcclxuICBjb250YWN0RGV0YWlscy5hcHBlbmRDaGlsZChjb250YWN0RU1haWwpO1xyXG4gIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBob3Vyc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIldvcmtpbmcgSG91cnNcIjtcclxuICBjb250YWN0RGV0YWlscy5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xyXG4gIGNvbnN0IHdvcmtIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBmb3IgKGNvbnN0IGRheSBpbiBob3Vyc0pzb24pIHtcclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgaG91cnMudGV4dENvbnRlbnQgPSBgJHtkYXl9OiAke2hvdXJzSnNvbltkYXldfWA7XHJcbiAgICB3b3JrSG91cnMuYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG4gIH1cclxuICBjb250YWN0RGV0YWlscy5hcHBlbmRDaGlsZCh3b3JrSG91cnMpO1xyXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdERldGFpbHMpO1xyXG5cclxuICByZXR1cm4gY29udGFjdDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgQXJhZWVrXCI7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xyXG5cclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICAvL0xvZ29cclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2dvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9nb1wiKTtcclxuICBjb25zdCBsb2dvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGxvZ29JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltZy9pY29uLnBuZ1wiKTtcclxuICBsb2dvSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiTG9nb1wiKTtcclxuXHJcbiAgbG9nby5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcclxuXHJcbiAgLy9OYXZiYXJcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIG5hdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdmJhclwiKTtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICB1bC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCdG4oXCJIb21lXCIpKTtcclxuICB1bC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCdG4oXCJNZW51XCIpKTtcclxuICB1bC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCdG4oXCJDb250YWN0XCIpKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXZCdG4odGV4dCkge1xyXG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgaXRlbS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGl0ZW07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob21lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2VudGVyLXNlY3Rpb25cIik7XHJcblxyXG4gIC8vSGVhZGluZ1xyXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJHb29kIGZvb2QsIEdvb2QgbW9vZCFcIjtcclxuICBob21lLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcclxuXHJcbiAgLy9DZW50ZXIgQnV0dG9uc1xyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjZW50ZXItYnV0dG9uc1wiKTtcclxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJ0bihcIk1lbnVcIikpO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnRuKFwiQ29udGFjdFwiKSk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIGhvbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJ0bih0ZXh0KSB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBidG47XHJcbn1cclxuIiwiaW1wb3J0IG1lbnVKc29uIGZyb20gXCIuLi9kaXN0L21lbnUuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudVwiKTtcclxuXHJcbiAgZm9yIChjb25zdCBmb29kTmFtZSBpbiBtZW51SnNvbikge1xyXG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIG1lbnVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1zZWN0aW9uXCIpO1xyXG4gICAgY29uc3QgbWVudVNlY3Rpb25IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWVudVNlY3Rpb25IZWFkLnRleHRDb250ZW50ID0gZm9vZE5hbWU7XHJcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51U2VjdGlvbkhlYWQpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SnNvbltmb29kTmFtZV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtXCIpO1xyXG4gICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG1lbnVKc29uW2Zvb2ROYW1lXVtpXVtcIml0ZW1cIl07XHJcbiAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBgJCR7bWVudUpzb25bZm9vZE5hbWVdW2ldW1wicHJpY2VcIl19YDtcclxuICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XHJcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcclxuICB9XHJcbiAgcmV0dXJuIG1lbnU7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgcmVuZGVySG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCByZW5kZXJNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKHJlbmRlckhvbWUoKSk7XHJcblxyXG5ib2R5Lmluc2VydEJlZm9yZShjcmVhdGVIZWFkZXIoKSwgY29udGVudCk7XHJcbmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZiYXIgdWwgbGlcIilbMF07XHJcbmhvbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuY29uc3QgbmF2YmFyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2YmFyIHVsIGxpXCIpO1xyXG5uYXZiYXJCdXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShuYXZiYXJCdXR0b25zKS5mb3JFYWNoKChlbGVtKSA9PlxyXG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcclxuICAgICk7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgcmVuZGVyKGUudGFyZ2V0LnRleHRDb250ZW50KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoY29udGVudFRvUmVuZGVyKSB7XHJcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgc3dpdGNoIChjb250ZW50VG9SZW5kZXIpIHtcclxuICAgIGNhc2UgXCJIb21lXCI6XHJcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVySG9tZSgpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiTWVudVwiOlxyXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlbmRlck1lbnUoKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkNvbnRhY3RcIjpcclxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChyZW5kZXJDb250YWN0KCkpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
  address.setAttribute("class", "address");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDM0M7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBUztBQUM3QjtBQUNBLDJCQUEyQixJQUFJLElBQUksNkNBQVMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ5QztBQUN6QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSSw0Q0FBUSxtQkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRDQUFRO0FBQ3JDO0FBQ0Esa0NBQWtDLDRDQUFRLHVCQUF1QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDSjtBQUNJO0FBQ0o7QUFDTTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQVU7QUFDOUI7QUFDQSxrQkFBa0IsbURBQVk7QUFDOUIsaUJBQWlCLG1EQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFVO0FBQ3BDO0FBQ0E7QUFDQSwwQkFBMEIsaURBQVU7QUFDcEM7QUFDQTtBQUNBLDBCQUEwQixvREFBYTtBQUN2QztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBob3Vyc0pzb24gZnJvbSBcIi4uL2Rpc3QvaG91cnMuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcclxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGFjdFwiKTtcclxuXHJcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgYWRkcmVzcy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltZy9hZGRyZXNzLmpwZ1wiKTtcclxuICBhZGRyZXNzLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkFkZHJlc3NcIik7XHJcbiAgYWRkcmVzcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZHJlc3NcIik7XHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcclxuXHJcbiAgY29uc3QgY29udGFjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb250YWN0RGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3QtZGV0YWlsc1wiKTtcclxuICBjb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBjb250YWN0SGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKTtcclxuICBjb25zdCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhZGRyZXNzXCIpO1xyXG4gIGNvbnRhY3RBZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMDU3MSBXIFBpY28gQmx2ZCwgTG9zIEFuZ2VsZXMsIENBXCI7XHJcbiAgY29udGFjdERldGFpbHMuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3MpO1xyXG4gIGNvbnN0IGNvbnRhY3ROdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gXCIrMSAoMjEyKSA1MTgtNzQwMlwiO1xyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXIpO1xyXG4gIGNvbnN0IGNvbnRhY3RFTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnRhY3RFTWFpbC50ZXh0Q29udGVudCA9IFwiY29udGFjdEBmb29kLmNvbVwiO1xyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3RFTWFpbCk7XHJcbiAgY29uc3QgaG91cnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGhvdXJzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiV29ya2luZyBIb3Vyc1wiO1xyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XHJcbiAgY29uc3Qgd29ya0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGZvciAoY29uc3QgZGF5IGluIGhvdXJzSnNvbikge1xyXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBob3Vycy50ZXh0Q29udGVudCA9IGAke2RheX06ICR7aG91cnNKc29uW2RheV19YDtcclxuICAgIHdvcmtIb3Vycy5hcHBlbmRDaGlsZChob3Vycyk7XHJcbiAgfVxyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKHdvcmtIb3Vycyk7XHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0RGV0YWlscyk7XHJcblxyXG4gIHJldHVybiBjb250YWN0O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyMiBBcmFlZWtcIjtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gIC8vTG9nb1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ28uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xyXG4gIGNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbG9nb0ltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1nL2ljb24ucG5nXCIpO1xyXG4gIGxvZ29JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJMb2dvXCIpO1xyXG5cclxuICBsb2dvLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICAvL05hdmJhclxyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgbmF2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2YmFyXCIpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJ0bihcIkhvbWVcIikpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJ0bihcIk1lbnVcIikpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJ0bihcIkNvbnRhY3RcIikpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdkJ0bih0ZXh0KSB7XHJcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBpdGVtLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gaXRlbTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjZW50ZXItc2VjdGlvblwiKTtcclxuXHJcbiAgLy9IZWFkaW5nXHJcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkdvb2QgZm9vZCwgR29vZCBtb29kIVwiO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG5cclxuICAvL0NlbnRlciBCdXR0b25zXHJcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNlbnRlci1idXR0b25zXCIpO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnRuKFwiTWVudVwiKSk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCdG4oXCJDb250YWN0XCIpKTtcclxuICBob21lLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gaG9tZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQnRuKHRleHQpIHtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGJ0bjtcclxufVxyXG4iLCJpbXBvcnQgbWVudUpzb24gZnJvbSBcIi4uL2Rpc3QvbWVudS5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNZW51KCkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51XCIpO1xyXG5cclxuICBmb3IgKGNvbnN0IGZvb2ROYW1lIGluIG1lbnVKc29uKSB7XHJcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgbWVudVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51LXNlY3Rpb25cIik7XHJcbiAgICBjb25zdCBtZW51U2VjdGlvbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtZW51U2VjdGlvbkhlYWQudGV4dENvbnRlbnQgPSBmb29kTmFtZTtcclxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uSGVhZCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVKc29uW2Zvb2ROYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1cIik7XHJcbiAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbWVudUpzb25bZm9vZE5hbWVdW2ldW1wiaXRlbVwiXTtcclxuICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGAkJHttZW51SnNvbltmb29kTmFtZV1baV1bXCJwcmljZVwiXX1gO1xyXG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xyXG4gIH1cclxuICByZXR1cm4gbWVudTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCByZW5kZXJIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVySG9tZSgpKTtcclxuXHJcbmJvZHkuaW5zZXJ0QmVmb3JlKGNyZWF0ZUhlYWRlcigpLCBjb250ZW50KTtcclxuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmJhciB1bCBsaVwiKVswXTtcclxuaG9tZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5jb25zdCBuYXZiYXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZiYXIgdWwgbGlcIik7XHJcbm5hdmJhckJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKG5hdmJhckJ1dHRvbnMpLmZvckVhY2goKGVsZW0pID0+XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxyXG4gICAgKTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICByZW5kZXIoZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlcihjb250ZW50VG9SZW5kZXIpIHtcclxuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBzd2l0Y2ggKGNvbnRlbnRUb1JlbmRlcikge1xyXG4gICAgY2FzZSBcIkhvbWVcIjpcclxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChyZW5kZXJIb21lKCkpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJNZW51XCI6XHJcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVyTWVudSgpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiQ29udGFjdFwiOlxyXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlbmRlckNvbnRhY3QoKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
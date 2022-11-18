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
  btn.addEventListener("click", (e) => {
    const navbarButtons = document.querySelectorAll(".navbar ul li");
    navbarButtons.forEach((element) => {
      if (e.target.textContent == element.textContent) {
        element.click();
      }
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDM0M7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBUztBQUM3QjtBQUNBLDJCQUEyQixJQUFJLElBQUksNkNBQVMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQnlDO0FBQ3pDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJLDRDQUFRLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNENBQVE7QUFDckM7QUFDQSxrQ0FBa0MsNENBQVEsdUJBQXVCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNKO0FBQ0k7QUFDSjtBQUNNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBVTtBQUM5QjtBQUNBLGtCQUFrQixtREFBWTtBQUM5QixpQkFBaUIsbURBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFVO0FBQ3BDO0FBQ0E7QUFDQSwwQkFBMEIsaURBQVU7QUFDcEM7QUFDQTtBQUNBLDBCQUEwQixvREFBYTtBQUN2QztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBob3Vyc0pzb24gZnJvbSBcIi4uL2Rpc3QvaG91cnMuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcclxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGFjdFwiKTtcclxuXHJcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgYWRkcmVzcy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltZy9hZGRyZXNzLmpwZ1wiKTtcclxuICBhZGRyZXNzLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkFkZHJlc3NcIik7XHJcbiAgYWRkcmVzcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZHJlc3NcIik7XHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcclxuXHJcbiAgY29uc3QgY29udGFjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb250YWN0RGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3QtZGV0YWlsc1wiKTtcclxuICBjb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBjb250YWN0SGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKTtcclxuICBjb25zdCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhZGRyZXNzXCIpO1xyXG4gIGNvbnRhY3RBZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMDU3MSBXIFBpY28gQmx2ZCwgTG9zIEFuZ2VsZXMsIENBXCI7XHJcbiAgY29udGFjdERldGFpbHMuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3MpO1xyXG4gIGNvbnN0IGNvbnRhY3ROdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gXCIrMSAoMjEyKSA1MTgtNzQwMlwiO1xyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXIpO1xyXG4gIGNvbnN0IGNvbnRhY3RFTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnRhY3RFTWFpbC50ZXh0Q29udGVudCA9IFwiY29udGFjdEBmb29kLmNvbVwiO1xyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3RFTWFpbCk7XHJcbiAgY29uc3QgaG91cnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGhvdXJzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiV29ya2luZyBIb3Vyc1wiO1xyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XHJcbiAgY29uc3Qgd29ya0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGZvciAoY29uc3QgZGF5IGluIGhvdXJzSnNvbikge1xyXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBob3Vycy50ZXh0Q29udGVudCA9IGAke2RheX06ICR7aG91cnNKc29uW2RheV19YDtcclxuICAgIHdvcmtIb3Vycy5hcHBlbmRDaGlsZChob3Vycyk7XHJcbiAgfVxyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKHdvcmtIb3Vycyk7XHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0RGV0YWlscyk7XHJcblxyXG4gIHJldHVybiBjb250YWN0O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyMiBBcmFlZWtcIjtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gIC8vTG9nb1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ28uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xyXG4gIGNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbG9nb0ltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1nL2ljb24ucG5nXCIpO1xyXG4gIGxvZ29JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJMb2dvXCIpO1xyXG5cclxuICBsb2dvLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICAvL05hdmJhclxyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgbmF2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2YmFyXCIpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJ0bihcIkhvbWVcIikpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJ0bihcIk1lbnVcIikpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJ0bihcIkNvbnRhY3RcIikpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdkJ0bih0ZXh0KSB7XHJcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBpdGVtLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gaXRlbTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjZW50ZXItc2VjdGlvblwiKTtcclxuXHJcbiAgLy9IZWFkaW5nXHJcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkdvb2QgZm9vZCwgR29vZCBtb29kIVwiO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG5cclxuICAvL0NlbnRlciBCdXR0b25zXHJcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNlbnRlci1idXR0b25zXCIpO1xyXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnRuKFwiTWVudVwiKSk7XHJcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCdG4oXCJDb250YWN0XCIpKTtcclxuICBob21lLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gaG9tZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQnRuKHRleHQpIHtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmF2YmFyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2YmFyIHVsIGxpXCIpO1xyXG4gICAgbmF2YmFyQnV0dG9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PSBlbGVtZW50LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gYnRuO1xyXG59XHJcbiIsImltcG9ydCBtZW51SnNvbiBmcm9tIFwiLi4vZGlzdC9tZW51Lmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVcIik7XHJcblxyXG4gIGZvciAoY29uc3QgZm9vZE5hbWUgaW4gbWVudUpzb24pIHtcclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBtZW51U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtc2VjdGlvblwiKTtcclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1lbnVTZWN0aW9uSGVhZC50ZXh0Q29udGVudCA9IGZvb2ROYW1lO1xyXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudVNlY3Rpb25IZWFkKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUpzb25bZm9vZE5hbWVdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbVwiKTtcclxuICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBtZW51SnNvbltmb29kTmFtZV1baV1bXCJpdGVtXCJdO1xyXG4gICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gYCQke21lbnVKc29uW2Zvb2ROYW1lXVtpXVtcInByaWNlXCJdfWA7XHJcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XHJcbiAgICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XHJcbiAgfVxyXG4gIHJldHVybiBtZW51O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IHJlbmRlckhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCByZW5kZXJDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChyZW5kZXJIb21lKCkpO1xyXG5cclxuYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlSGVhZGVyKCksIGNvbnRlbnQpO1xyXG5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2YmFyIHVsIGxpXCIpWzBdO1xyXG5ob21lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG5jb25zdCBuYXZiYXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZiYXIgdWwgbGlcIik7XHJcbm5hdmJhckJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKG5hdmJhckJ1dHRvbnMpLmZvckVhY2goKGVsZW0pID0+XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxyXG4gICAgKTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICByZW5kZXIoZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXIoY29udGVudFRvUmVuZGVyKSB7XHJcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgc3dpdGNoIChjb250ZW50VG9SZW5kZXIpIHtcclxuICAgIGNhc2UgXCJIb21lXCI6XHJcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVySG9tZSgpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiTWVudVwiOlxyXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlbmRlck1lbnUoKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkNvbnRhY3RcIjpcclxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChyZW5kZXJDb250YWN0KCkpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
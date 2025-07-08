// for those who once loved jquery
// but now code in vanilla JS
// we can still drink and be merry
// without all that BS

// 1. DOM Selection
const $ = (selector, context = document) => context.querySelectorAll(selector);
const $1st = (selector, context = document) => context.querySelector(selector); // First element
const $1ast = (selector, context = document) => context.querySelectorAll(selector)[context.querySelectorAll(selector).length - 1]; // Last element

// 2. Looping through elements
const $ea = (elements, callback) => {
  elements.forEach((el, i) => callback.call(el, i, el));
};

// 3. Event Binding (Prefix with $eon to avoid 'on' collision)
const $eon = (elements, event, handler) => {
  $ea(elements, el => el.addEventListener(event, handler));
};

// 4. Class Manipulation (Prefix with $ to avoid collision)
const $addClass = (elements, className) => $ea(elements, el => el.classList.add(className));
const $removeClass = (elements, className) => $ea(elements, el => el.classList.remove(className));
const $toggleClass = (elements, className) => $ea(elements, el => el.classList.toggle(className));

// 5. CSS Manipulation
const $css = (elements, styles) => $ea(elements, el => {
  for (let prop in styles) {
    el.style[prop] = styles[prop];
  }
});

// 6. Attribute Manipulation
const $attr = (elements, name, value) => {
  if (value === undefined) return elements[0]?.getAttribute(name);
  $ea(elements, el => el.setAttribute(name, value));
};

// 7. HTML / Text Manipulation
const $html = (elements, value) => {
  if (value === undefined) return elements[0]?.innerHTML;
  $ea(elements, el => el.innerHTML = value);
};

const $text = (elements, value) => {
  if (value === undefined) return elements[0]?.textContent;
  $ea(elements, el => el.textContent = value);
};

// 8. Async Fetch (if needed, but they're fine as is)
const $get = async (url) => (await fetch(url)).text();
const $getJSON = async (url) => (await fetch(url)).json();

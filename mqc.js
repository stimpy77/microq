// same as mq.js but with chain support

// 1. DOM Selection
const $ = (selector, context = document) => {
  const nodes = context.querySelectorAll(selector);
  nodes.each = (cb) => { nodes.forEach((el, i) => cb.call(el, i, el)); return nodes; }; // Add a basic chaining method
  return nodes;
};
const $1st = (selector, context = document) => context.querySelector(selector);
const $1ast = (selector, context = document) => context.querySelectorAll(selector)[context.querySelectorAll(selector).length - 1];

// 2. Event Binding (fluent)
const $eon = (elements, event, handler) => {
  elements.each(el => el.addEventListener(event, handler));
  return elements; // Return for chaining
};

// 3. Class Manipulation (fluent)
const $addClass = (elements, className) => {
  elements.each(el => el.classList.add(className));
  return elements; // Return for chaining
};
const $removeClass = (elements, className) => {
  elements.each(el => el.classList.remove(className));
  return elements;
};
const $toggleClass = (elements, className) => {
  elements.each(el => el.classList.toggle(className));
  return elements;
};

// 4. CSS Manipulation
const $css = (elements, styles) => {
  elements.each(el => {
    for (let prop in styles) {
      el.style[prop] = styles[prop];
    }
  });
  return elements;
};

// 5. Attribute Manipulation
const $attr = (elements, name, value) => {
  if (value === undefined) return elements[0]?.getAttribute(name);
  elements.each(el => el.setAttribute(name, value));
  return elements;
};

// 6. HTML / Text Manipulation
const $html = (elements, value) => {
  if (value === undefined) return elements[0]?.innerHTML;
  elements.each(el => el.innerHTML = value);
  return elements;
};
const $text = (elements, value) => {
  if (value === undefined) return elements[0]?.textContent;
  elements.each(el => el.textContent = value);
  return elements;
};

// 7. Async Fetch (if needed)
const $get = async (url) => (await fetch(url)).text();
const $getJSON = async (url) => (await fetch(url)).json();

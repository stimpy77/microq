// for those who once loved jquery
// but now code in vanilla JS
// we can still drink and be merry
// without all that BS

// Selector (with chaining support)
const $ = selector => document.querySelectorAll(selector);

// Utility to auto-wrap if string selector
const $_wrap = p => (typeof p === 'string' ? $(p) : p);

// Loop through elements (with chaining support)
const $ea = (p, fn) => ($_wrap(p).forEach(fn), p); // Chainable

// Event listener (with chaining support)
const $eon = (p, e, fn) => ($_wrap(p).forEach(el => el.addEventListener(e, fn)), p);

// Add class (with chaining support)
const $addClass = (p, c) => ($_wrap(p).forEach(el => el.classList.add(c)), p);

// Remove class (with chaining support)
const $removeClass = (p, c) => ($_wrap(p).forEach(el => el.classList.remove(c)), p);

// Toggle class (with chaining support)
const $toggleClass = (p, c) => ($_wrap(p).forEach(el => el.classList.toggle(c)), p);

// Apply CSS styles (with chaining support)
const $css = (p, s) => ($_wrap(p).forEach(el => Object.assign(el.style, s)), p);

// Get/set attributes (with chaining support)
const $attr = (p, n, v) => {
  const elems = $_wrap(p);
  return v === undefined ? elems[0]?.getAttribute(n) : (elems.forEach(el => el.setAttribute(n, v)), p); // Get/Set
};

// Get/set innerHTML (with chaining support)
const $html = (p, h) => (h === undefined ? $_wrap(p)[0]?.innerHTML : ($_wrap(p).forEach(el => el.innerHTML = h), p));

// Get/set textContent (with chaining support)
const $text = (p, t) => (t === undefined ? $_wrap(p)[0]?.textContent : ($_wrap(p).forEach(el => el.textContent = t), p));

// Fetch raw text (with chaining support)
const $get = (url) => fetch(url).then(res => res.text());

// Fetch JSON (with chaining support)
const $getJSON = (url) => fetch(url).then(res => res.json());

// Select first element (with chaining support)
const $1st = selector => $(selector)[0] || null; // First match

// Select last element (with chaining support)
const $1ast = selector => $(selector)[$(selector).length - 1] || null; // Last match

// Get the length of the NodeList (with chaining support)
const $len = p => $_wrap(p).length; // Length of selected nodes


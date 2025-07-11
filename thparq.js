// for those who once loved jquery
// but now code in vanilla JS
// we can still drink and be merry
// without all that BS

// Selector (with chaining support)
const $ = selector => document.querySelectorAll(selector);

// Utility to auto-wrap if string selector
const $_wrap = p => (typeof p === 'string' ? $(p) : p);

// Loop through elements (with chaining support)
const $ea = (p, fn) => ([].concat($_wrap(p)).filter(t => t).forEach(fn), p); // Chainable

// Event listener (with chaining support)
const $eon = (p, e, fn) => ([].concat($_wrap(p)).filter(t => t && t.addEventListener).forEach(el => el.addEventListener(e, fn)), p);

// Add class (with chaining support)
const $addClass = (p, c) => ([].concat($_wrap(p)).filter(t => t && t.classList).forEach(el => el.classList.add(c)), p);

// Remove class (with chaining support)
const $removeClass = (p, c) => ([].concat($_wrap(p)).filter(t => t && t.classList).forEach(el => el.classList.remove(c)), p);

// Toggle class (with chaining support)
const $toggleClass = (p, c) => ([].concat($_wrap(p)).filter(t => t && t.classList).forEach(el => el.classList.toggle(c)), p);

// Apply CSS styles (with chaining support)
const $css = (p, s) => ([].concat($_wrap(p)).filter(t => t && t.style).forEach(el => Object.assign(el.style, s)), p);

// Get/set attributes (with chaining support)
const $attr = (p, n, v) => {
  const elems = $_wrap(p);
  return v === undefined ? elems[0]?.getAttribute(n) : ([].concat(elems).filter(t => t && t.setAttribute).forEach(el => el.setAttribute(n, v)), p); // Get/Set
};

// Get/set innerHTML (with chaining support)
const $html = (p, h) => (h === undefined ? $_wrap(p)[0]?.innerHTML : ([].concat($_wrap(p)).filter(t => t).forEach(el => el.innerHTML = h), p));

// Get/set textContent (with chaining support)
const $text = (p, t) => (t === undefined ? $_wrap(p)[0]?.textContent : ([].concat($_wrap(p)).filter(t => t).forEach(el => el.textContent = t), p));

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

// Add methods to NodeList prototype for chaining
NodeList.prototype.$ea = function(fn) { return $ea(this, fn); };
NodeList.prototype.$eon = function(e, fn) { return $eon(this, e, fn); };
NodeList.prototype.$addClass = function(c) { return $addClass(this, c); };
NodeList.prototype.$removeClass = function(c) { return $removeClass(this, c); };
NodeList.prototype.$toggleClass = function(c) { return $toggleClass(this, c); };
NodeList.prototype.$css = function(s) { return $css(this, s); };
NodeList.prototype.$attr = function(n, v) { return $attr(this, n, v); };
NodeList.prototype.$html = function(h) { return $html(this, h); };
NodeList.prototype.$text = function(t) { return $text(this, t); };
NodeList.prototype.$len = function() { return $len(this); };


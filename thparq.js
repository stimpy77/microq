// for those who once loved jquery
// but now code in vanilla JS
// we can still drink and be merry
// without all that BS

const $ = s => {
  if (typeof s === 'string') {
    const e = document.querySelectorAll(s);
    if (!Object.getPrototypeOf(e).$eon) Object.setPrototypeOf(e, NodeList.prototype);
    return e;
  }
  if (s instanceof Node) {
    const e = [s];
    if (!Object.getPrototypeOf(e).$eon) Object.setPrototypeOf(e, NodeList.prototype);
    return e;
  }
  if (s instanceof NodeList) {
    if (!Object.getPrototypeOf(s).$eon) Object.setPrototypeOf(s, NodeList.prototype);
    return s;
  }
  const e = [];
  Object.setPrototypeOf(e, NodeList.prototype);
  return e;
};

// Loop through elements (with chaining support)
const $ea = (p, fn) => ($(p).forEach(fn), $(p));
const $eon = (p, e, fn) => ($(p).forEach(el => el.addEventListener(e, fn)), $(p));
const $addClass = (p, c) => ($(p).forEach(el => el.classList.add(c)), $(p));
const $removeClass = (p, c) => ($(p).forEach(el => el.classList.remove(c)), $(p));
const $toggleClass = (p, c) => ($(p).forEach(el => el.classList.toggle(c)), $(p));
const $css = (p, s) => ($(p).forEach(el => Object.assign(el.style, s)), $(p));
const $attr = (p, n, v) => v === undefined ? $(p)[0]?.getAttribute(n) : ($(p).forEach(el => el.setAttribute(n, v)), $(p));
const $html = (p, h) => h === undefined ? $(p)[0]?.innerHTML : ($(p).forEach(el => el.innerHTML = h), $(p));
const $text = (p, t) => t === undefined ? $(p)[0]?.textContent : ($(p).forEach(el => el.textContent = t), $(p));

// Fetch raw text (with chaining support)
const $get = (url) => fetch(url).then(res => res.text());

// Fetch JSON (with chaining support)
const $getJSON = (url) => fetch(url).then(res => res.json());

// Select first element (with chaining support)
const $1st = selector => $(selector)[0] || null; // First match

// Select last element (with chaining support)
const $1ast = selector => $(selector)[$(selector).length - 1] || null; // Last match

// Get the length of the NodeList (with chaining support)
const $len = p => $(p).length;

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


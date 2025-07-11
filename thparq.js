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
const $ea = (p, fn) => ($(p).forEach((el, i) => fn(i, el)), $(p));
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

// Form input values (with chaining support)
const $val = (p, v) => v === undefined ? $(p)[0]?.value : ($(p).forEach(el => el.value = v), $(p));

// Check for class (returns boolean)
const $hasClass = (p, c) => $(p)[0]?.classList.contains(c) || false;

// Append content (with chaining support)
const $append = (p, content) => ($(p).forEach(el => {
  if (typeof content === 'string') {
    el.insertAdjacentHTML('beforeend', content);
  } else if (content instanceof Node) {
    el.appendChild(content);
  }
}), $(p));

// Prepend content (with chaining support)
const $prepend = (p, content) => ($(p).forEach(el => {
  if (typeof content === 'string') {
    el.insertAdjacentHTML('afterbegin', content);
  } else if (content instanceof Node) {
    el.insertBefore(content, el.firstChild);
  }
}), $(p));

// Remove elements (with chaining support)
const $remove = (p) => ($(p).forEach(el => el.remove()), $(p));

// Get parent element (returns new NodeList)
const $parent = (p) => {
  const parents = Array.from($(p)).map(el => el.parentElement).filter(Boolean);
  const result = [...new Set(parents)];
  Object.setPrototypeOf(result, NodeList.prototype);
  return result;
};

// Find child elements (returns new NodeList)
const $find = (p, selector) => {
  const found = [];
  $(p).forEach(el => {
    found.push(...el.querySelectorAll(selector));
  });
  const result = [...new Set(found)];
  Object.setPrototypeOf(result, NodeList.prototype);
  return result;
};

// Show elements (with chaining support)
const $show = (p) => ($(p).forEach(el => el.style.display = ''), $(p));

// Hide elements (with chaining support)
const $hide = (p) => ($(p).forEach(el => el.style.display = 'none'), $(p));

// Data attributes (with chaining support)
const $data = (p, key, value) => {
  if (value === undefined) {
    if (key === undefined) return $(p)[0]?.dataset;
    return $(p)[0]?.dataset[key];
  }
  $(p).forEach(el => el.dataset[key] = value);
  return $(p);
};

// Enhanced event handler with delegation support
const $eonDelegated = (p, event, selector, handler) => {
  if (typeof selector === 'function') {
    // No delegation, selector is actually the handler
    return $eon(p, event, selector);
  }
  // Event delegation
  $(p).forEach(el => {
    el.addEventListener(event, (e) => {
      if (e.target.matches(selector)) {
        handler.call(e.target, e);
      }
    });
  });
  return $(p);
};

// Add methods to NodeList prototype for chaining
NodeList.prototype.$ea = function(fn) { return $ea(this, fn); };
NodeList.prototype.$eon = function(e, fn, handler) { 
  return handler ? $eonDelegated(this, e, fn, handler) : $eon(this, e, fn); 
};
NodeList.prototype.$addClass = function(c) { return $addClass(this, c); };
NodeList.prototype.$removeClass = function(c) { return $removeClass(this, c); };
NodeList.prototype.$toggleClass = function(c) { return $toggleClass(this, c); };
NodeList.prototype.$css = function(s) { return $css(this, s); };
NodeList.prototype.$attr = function(n, v) { return $attr(this, n, v); };
NodeList.prototype.$html = function(h) { return $html(this, h); };
NodeList.prototype.$text = function(t) { return $text(this, t); };
NodeList.prototype.$len = function() { return $len(this); };
NodeList.prototype.$val = function(v) { return $val(this, v); };
NodeList.prototype.$hasClass = function(c) { return $hasClass(this, c); };
NodeList.prototype.$append = function(content) { return $append(this, content); };
NodeList.prototype.$prepend = function(content) { return $prepend(this, content); };
NodeList.prototype.$remove = function() { return $remove(this); };
NodeList.prototype.$parent = function() { return $parent(this); };
NodeList.prototype.$find = function(selector) { return $find(this, selector); };
NodeList.prototype.$show = function() { return $show(this); };
NodeList.prototype.$hide = function() { return $hide(this); };
NodeList.prototype.$data = function(key, value) { return $data(this, key, value); };
NodeList.prototype.$eonDelegated = function(event, selector, handler) { return $eonDelegated(this, event, selector, handler); };


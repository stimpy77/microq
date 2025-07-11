# thparq

the name is like "spark" but with a weird lithp.

tl;dr drop-in alternative to jquery to put the thpark back in your vanilla JS

````javascript
const selectedElements = $("li.hello");
````

### moar info below (yes generated, hence all the stupid emojis) ...

***“For those who once loved jQuery, but now live vanilla.”***

`thparq.js` is a tiny helper library for DOM manipulation, event handling, class toggling, and AJAX — ~~lovingly crafted~~ hurriedly spewed out for nostalgic jQuery developers who don’t want the bloat but still want the terseness.

> 🍷 **No dependencies. No build tools. Just drop it in and dance.**

## 🎯 Demo

[**Live Demo**](https://claude.ai/public/artifacts/8733180f-5749-4b2e-bb69-1a8bfeef9f75) | [Demo Source](demo.html)

---

## 🚀 Quick Start

```html
<script src="path/to/thparq.min.js"></script>
```

or just paste the compressed version in at the top of your regular script

```html
<script>

// thparq injection, see https://github.com/stimpy77/thparq/
const _$ogpo=Object.getPrototypeOf;const _$ospo=Object.setPrototypeOf;const _$nlp=NodeList.prototype;const $=t=>{if("string"==typeof t){let e=document.querySelectorAll(t);return _$ogpo(e).$eon||_$ospo(e,_$nlp),e}if(t instanceof Node){let o=[t];return _$ogpo(o).$eon||_$ospo(o,_$nlp),o}if(t instanceof NodeList)return _$ogpo(t).$eon||_$ospo(t,_$nlp),t;let r=[];return _$ospo(r,_$nlp),r},$ea=(t,e)=>($(t).forEach((el,i)=>e(i,el)),$(t)),$eon=(t,e,o)=>($(t).forEach(t=>t.addEventListener(e,o)),$(t)),$addClass=(t,e)=>($(t).forEach(t=>t.classList.add(e)),$(t)),$removeClass=(t,e)=>($(t).forEach(t=>t.classList.remove(e)),$(t)),$toggleClass=(t,e)=>($(t).forEach(t=>t.classList.toggle(e)),$(t)),$css=(t,e)=>($(t).forEach(t=>Object.assign(t.style,e)),$(t)),$attr=(t,e,o)=>void 0===o?$(t)[0]?.getAttribute(e):($(t).forEach(t=>t.setAttribute(e,o)),$(t)),$html=(t,e)=>void 0===e?$(t)[0]?.innerHTML:($(t).forEach(t=>t.innerHTML=e),$(t)),$text=(t,e)=>void 0===e?$(t)[0]?.textContent:($(t).forEach(t=>t.textContent=e),$(t)),$get=t=>fetch(t).then(t=>t.text()),$getJSON=t=>fetch(t).then(t=>t.json()),$1st=t=>$(t)[0]||null,$1ast=t=>$(t)[$(t).length-1]||null,$len=t=>$(t).length,$val=(t,e)=>void 0===e?$(t)[0]?.value:($(t).forEach(t=>t.value=e),$(t)),$hasClass=(t,e)=>$(t)[0]?.classList.contains(e)||!1,$append=(t,e)=>($(t).forEach(t=>{"string"==typeof e?t.insertAdjacentHTML("beforeend",e):e instanceof Node&&t.appendChild(e)}),$(t)),$prepend=(t,e)=>($(t).forEach(t=>{"string"==typeof e?t.insertAdjacentHTML("afterbegin",e):e instanceof Node&&t.insertBefore(e,t.firstChild)}),$(t)),$remove=t=>($(t).forEach(t=>t.remove()),$(t)),$parent=t=>{const e=Array.from($(t)).map(t=>t.parentElement).filter(Boolean),o=[...new Set(e)];return _$ospo(o,_$nlp),o},$find=(t,e)=>{const o=[];$(t).forEach(t=>{o.push(...t.querySelectorAll(e))});const r=[...new Set(o)];return _$ospo(r,_$nlp),r},$show=t=>($(t).forEach(t=>t.style.display=""),$(t)),$hide=t=>($(t).forEach(t=>t.style.display="none"),$(t)),$data=(t,e,o)=>{if(void 0===o)return void 0===e?$(t)[0]?.dataset:$(t)[0]?.dataset[e];return $(t).forEach(t=>t.dataset[e]=o),$(t)},$eonDelegated=(t,e,o,r)=>{return"function"==typeof o?$eon(t,e,o):($(t).forEach(t=>{t.addEventListener(e,t=>{t.target.matches(o)&&r.call(t.target,t)})}),$(t))};_$nlp.$ea=function(t){return $ea(this,t)},_$nlp.$eon=function(t,e,o){return o?$eonDelegated(this,t,e,o):$eon(this,t,e)},_$nlp.$addClass=function(t){return $addClass(this,t)},_$nlp.$removeClass=function(t){return $removeClass(this,t)},_$nlp.$toggleClass=function(t){return $toggleClass(this,t)},_$nlp.$css=function(t){return $css(this,t)},_$nlp.$attr=function(t,e){return $attr(this,t,e)},_$nlp.$html=function(t){return $html(this,t)},_$nlp.$text=function(t){return $text(this,t)},_$nlp.$len=function(){return $len(this)},_$nlp.$val=function(t){return $val(this,t)},_$nlp.$hasClass=function(t){return $hasClass(this,t)},_$nlp.$append=function(t){return $append(this,t)},_$nlp.$prepend=function(t){return $prepend(this,t)},_$nlp.$remove=function(){return $remove(this)},_$nlp.$parent=function(){return $parent(this)},_$nlp.$find=function(t){return $find(this,t)},_$nlp.$show=function(){return $show(this)},_$nlp.$hide=function(){return $hide(this)},_$nlp.$data=function(t,e){return $data(this,t,e)};

// your script here

</script>
```

---

## 📚 API Reference

| Function         | Description                  |
| ---------------- | ---------------------------- |
| `$()`            | Select all matching elements |
| `$1st()`         | First matching element       |
| `$1ast()`        | Last matching element        |
| `$ea()`          | Loop through elements        |
| `$eon()`         | Event listener (with delegation support) |
| `$addClass()`    | Add class                    |
| `$removeClass()` | Remove class                 |
| `$toggleClass()` | Toggle class                 |
| `$hasClass()`    | Check if element has class   |
| `$css()`         | Apply CSS styles             |
| `$attr()`        | Get/set attributes           |
| `$html()`        | Get/set innerHTML            |
| `$text()`        | Get/set textContent          |
| `$val()`         | Get/set form input values    |
| `$data()`        | Get/set data attributes      |
| `$append()`      | Append content to elements   |
| `$prepend()`     | Prepend content to elements  |
| `$remove()`      | Remove elements from DOM     |
| `$parent()`      | Get parent elements          |
| `$find()`        | Find child elements          |
| `$show()`        | Show elements                |
| `$hide()`        | Hide elements                |
| `$get()`         | Fetch raw text from URL      |
| `$getJSON()`     | Fetch JSON from URL          |
| `$len()`         | Get length of selected set   |

---

## 🎨 Examples & Tutorials

---

### `$()` – Select elements

```js
const boxes = $('.box');

// Chaining
$('.box').$addClass('loaded');
```

---

### `$1st()` – First match (btw it's 1st with a numeral 1 not lowercase 'L')

```js

// Get first element
const firstBox = $1st('.box');

// Chaining:

// Use with vanilla JS methods
$1st('.box').classList.add('first');

// Chaining from query - useful for complex selectors
$('.box:not(.hidden)').$1st().classList.add('first-visible');

// Or continue with thparq chaining
$('.box').$1st().$addClass('primary').$css({ border: '2px solid blue' });
```

---

### `$1ast()` – Last match (again it's 1ast with a numeral 1 not lowercase 'L')

```js
const lastBox = $1ast('.box');

// Chaining (used with other methods)

// Get last element
const lastBox = $1ast('.box');

// Use with vanilla JS methods
$1ast('.box').classList.add('last');

// Chaining from query - useful for filtered selections
$('.box.active').$1ast().classList.add('last-active');

// Or continue with thparq chaining
$('.box').$1ast().$addClass('final').$css({ opacity: '0.8' });
```

---

### `$ea()` – Loop through elements

```js
// Non-chaining
$ea('.box', (i, el) => {
  el.textContent = `Box ${i}`;
});

// Chaining
$('.box').$ea((i, el) => {
  el.textContent = `Box ${i}`;
});
```

---

### `$eon()` – Add event listener

```js
// Non-chaining
$eon('.btn', 'click', function () {
  alert(`Clicked: ${this.textContent}`);
});

// Chaining
$('.btn').$eon('click', function () {
  alert(`Clicked: ${this.textContent}`);
});
```

---

### `$addClass()` – Add class

```js
// Non-chaining
$addClass('.box', 'highlight');

// Chaining
$('.box').$addClass('highlight');
```

---

### `$removeClass()` – Remove class

```js
// Non-chaining
$removeClass('.box', 'hidden');

// Chaining
$('.box').$removeClass('hidden');
```

---

### `$toggleClass()` – Toggle class

```js
// Non-chaining
$toggleClass('.box', 'active');

// Chaining
$('.box').$toggleClass('active');
```

---

### `$css()` – Apply CSS styles

```js
// Non-chaining
$css('.box', {
  backgroundColor: 'gold',
  transform: 'scale(1.05)',
});

// Chaining
$('.box').$css({
  backgroundColor: 'gold',
  transform: 'scale(1.05)',
});
```

---

### `$attr()` – Get/set attributes

```js
// Get (non-chaining)
const href = $attr($('.link'), 'href');

// Set (non-chaining)
$attr('.link', 'target', '_blank');

// Get (chaining-safe, still non-chaining)
const href = $('.link').$attr('href');

// Set (chaining)
$('.link').$attr('target', '_blank');
```

---

### `$html()` – Get/set HTML content

```js
// Get (non-chaining)
const html = $html('.box');

// Set (non-chaining)
$html('.box', '<strong>Updated!</strong>');

// Get (chaining-safe)
const html = $('.box').$html();

// Set (chaining)
$('.box').$html('<strong>Updated!</strong>');
```

---

### `$text()` – Get/set text content

```js
// Get (non-chaining)
const text = $text('.box');

// Set (non-chaining)
$text('.box', 'Hello');

// Get (chaining-safe)
const text = $('.box').$text();

// Set (chaining)
$('.box').$text('Hello');
```

---

### `$get()` – Fetch raw text

```js
// Non-chaining (no chaining supported)
$get('/data/sample.txt').then(text => {
  console.log(text);
});

// With DOM update
$get('/data/sample.txt').then(text => {
  $('.output').$text(text);
});
```

---

### `$getJSON()` – Fetch JSON

```js
// Non-chaining
$getJSON('/user.json').then(data => {
  console.log(data.name);
});

// With DOM update
$getJSON('/user.json').then(data => {
  $('.name').$text(data.name);
});
```

---

### `$val()` – Get/set form input values

```js
// Get value (non-chaining)
const inputValue = $val('#myInput');

// Set value (non-chaining)
$val('#myInput', 'Hello World');

// Get value (chaining-safe)
const inputValue = $('#myInput').$val();

// Set value (chaining)
$('#myInput').$val('Hello World');
```

---

### `$hasClass()` – Check if element has class

```js
// Non-chaining
if ($hasClass('.box', 'active')) {
  console.log('Box is active!');
}

// Chaining-safe usage
if ($('.box').$hasClass('active')) {
  console.log('Box is active!');
}
```

---

### `$append()` – Append content to elements

```js
// Non-chaining
$append('#list', '<li>New item</li>');

// Chaining
$('#list').$append('<li>New item</li>');

// Append DOM nodes
const newEl = document.createElement('div');
$('#container').$append(newEl);
```

---

### `$prepend()` – Prepend content to elements

```js
// Non-chaining
$prepend('#list', '<li>First item</li>');

// Chaining
$('#list').$prepend('<li>First item</li>');

// Prepend DOM nodes
const newEl = document.createElement('div');
$('#container').$prepend(newEl);
```

---

### `$remove()` – Remove elements from DOM

```js
// Non-chaining
$remove('.temp');

// Chaining
$('.temp').$remove();

// Remove all elements with class 'old'
$('.old').$remove();
```

---

### `$parent()` – Get parent elements

```js
// Non-chaining
const parents = $parent('.item');

// Chaining
$('.item').$parent().$addClass('parent-active');

// Get parent and manipulate
$('.button').$parent().$css({ border: '1px solid red' });
```

---

### `$find()` – Find child elements

```js
// Non-chaining
const items = $find('#container', '.item');

// Chaining
$('#container').$find('.item').$addClass('found');

// Find and manipulate children
$('.parent').$find('span').$css({ color: 'blue' });
```

---

### `$show()` – Show elements

```js
// Non-chaining
$show('#modal');

// Chaining
$('#modal').$show();

// Show all hidden elements
$('.hidden').$show();
```

---

### `$hide()` – Hide elements

```js
// Non-chaining
$hide('#modal');

// Chaining
$('#modal').$hide();

// Hide all visible elements
$('.visible').$hide();
```

---

### `$data()` – Get/set data attributes

```js
// Get data attribute (non-chaining)
const userId = $data('#item', 'userId');

// Set data attribute (non-chaining)
$data('#item', 'userId', '123');

// Get data attribute (chaining-safe)
const userId = $('#item').$data('userId');

// Set data attribute (chaining)
$('#item').$data('userId', '123');

// Get all data attributes
const allData = $('#item').$data();
```

---

### `$eon()` – Enhanced event listener with delegation

```js
// Regular event listener
$('.btn').$eon('click', function() {
  alert('Button clicked!');
});

// Event delegation (handles future elements too)
$('#list').$eon('click', 'li', function() {
  console.log('List item clicked:', this.textContent);
});

// Delegation with dynamic content
$('#container').$eon('click', '.dynamic-btn', function(e) {
  e.preventDefault();
  alert('Dynamic button clicked!');
});
```

---

### `$len()` – Number of matched elements

```js
// Non-chaining
const count = $len('.box');

// Chaining-safe usage
if ($len('.btn') > 0) {
  console.log('Buttons exist!');
}
```

---

### 🍝 Full Example

```js
// Enhanced example with new methods
$('.box')
  .$addClass('ready')
  .$css({ color: 'lime' })
  .$data('status', 'active')
  .$append('<span class="badge">NEW</span>')
  .$eon('click', function() {
    if ($(this).$hasClass('selected')) {
      $(this).$removeClass('selected').$hide();
    } else {
      $(this).$addClass('selected').$show();
    }
  })
  .$html('<strong>Click me!</strong>');

// Event delegation example
$('#container').$eon('click', '.dynamic-item', function() {
  $(this).$parent().$toggleClass('highlight');
});

// Form handling
$('#myForm').$find('input').$val('Default value');
```

---

## 🌈 Why Use thparq?

* 🧠 Tiny mental model
* 🥃 Feels like jQuery, but pure vanilla
* 🛠️ Great for small apps, demos, and prototypes
* 🤏 Minimal footprint
* ⚡ Instant productivity

---

## 💡 Tips

* Use `async/await`, `let/const`, and modern JS with it — thparq is just a helper.
* Works great for static sites, Markdown blogs, and frontend-only widgets.
* Every function accepts a selector string or a DOM Node/NodeList.

---

## 🧪 In the Wild

```html
<div class="faq">
  <h3 class="question">What is thparq?</h3>
  <p class="answer hidden">A micro DOM utility library!</p>
</div>

<script>
  // Chaining style
  $('.question').$eon('click', function () {
    $(this.nextElementSibling).$toggleClass('hidden');
  });

  // Non-chaining style
  $eon($('.question'), 'click', function () {
    $toggleClass([this.nextElementSibling], 'hidden');
  });
</script>
```

---

## 🧼 Notes

* `$()` returns a `NodeList`, not an Array — but `.forEach()` still works.
* `$attr`, `$html`, and `$text` getters return from **the first** matched element.
* All methods return `p` (the original elements) for chaining when applicable.

---

## 🛠️ Dev Notes

```bash
git clone https://github.com/stimpy77/thparq.git
cd thparq
```

---

## 📜 License

MIT — use it freely, remix, fork, or forget 🍻

---

## ✨ Author

Made by [@stimpy77](https://github.com/stimpy77), with love for the DOM and dry humor.

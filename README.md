# microq

> 🍸 A minimalist, chainable DOM utility library for those who crave jQuery-style terseness — without the baggage.

**microq** (`mq.js`) is a zero-dependency micro-helper for vanilla JavaScript: tiny, expressive, chainable, and delightful.

No build tools. No global pollution. Just drop it in and go.

---

## 🚀 Quick Start

### Add to Your Project

```html
<script src="path/to/mq.js"></script>
```

Or use as a module:

```html
<script type="module">
  import './mq.js';
</script>
```

---

## 📚 API Overview

| Function         | Description                  |
| ---------------- | ---------------------------- |
| `$()`            | Select all matching elements |
| `$1st()`         | First matching element       |
| `$1ast()`        | Last matching element        |
| `$ea()`          | Loop through elements        |
| `$eon()`         | Event listener               |
| `$addClass()`    | Add class                    |
| `$removeClass()` | Remove class                 |
| `$toggleClass()` | Toggle class                 |
| `$css()`         | Apply CSS styles             |
| `$attr()`        | Get/set attributes           |
| `$html()`        | Get/set innerHTML            |
| `$text()`        | Get/set textContent          |
| `$get()`         | Fetch raw text from URL      |
| `$getJSON()`     | Fetch JSON from URL          |
| `$len()`         | Get length of selected set   |

---

## 🧪 Usage Examples

All functions auto-wrap string selectors and return the original input (`NodeList`) for chaining.

### 🔍 Select

```js
$('.box');            // NodeList
$1st('.box');         // First match
$1ast('.box');        // Last match
$len('.box');         // Count of matches
```

---

### 🧲 Events

```js
$('.btn').$eon('click', function () {
  alert(`Clicked: ${this.textContent}`);
});
```

---

### 🎭 Class Manipulation

```js
$('.box')
  .$addClass('highlight')
  .$toggleClass('active')
  .$removeClass('hidden');
```

---

### 🎨 Styles

```js
$('.box').$css({
  backgroundColor: 'tomato',
  transform: 'scale(1.1)',
});
```

---

### 🏷️ Attributes

```js
// Get
const href = $('.link').$attr('href');

// Set
$('.link').$attr('target', '_blank');
```

---

### 🧠 Content

```js
$('.box').$html('<strong>Hello</strong>');
$('.box').$text('Just text');

// Get
const html = $('.box').$html();
const text = $('.box').$text();
```

---

### 🔁 Loop

```js
$('.box').$ea((i, el) => {
  el.textContent = `Box ${i}`;
});
```

---

### 🌍 Fetch

```js
$get('/info.txt').then(text => {
  $('.output').$text(text);
});

$getJSON('/user.json').then(data => {
  console.log(data.name);
});
```

---

### 🧠 Chain All the Things

```js
$('.box')
  .$addClass('ready')
  .$css({ color: 'lime' })
  .$ea((i, el) => (el.dataset.index = i))
  .$eon('click', () => alert('Clicked!'))
  .$text('Updated');
```

---

## 🌈 Philosophy

* Chainable and expressive
* Tiny mental model
* Modern JavaScript, no legacy quirks
* DOM-first, no fluff

---

## 🧼 Notes

* `$()` returns a `NodeList`, still `.forEach()`-able.
* All functions accept either a selector string or a DOM NodeList/element.
* Getters (`$text`, `$html`, `$attr`) return values only from the first element.

---

## 📦 Installation Options

* Download `mq.js` directly into your project.
* Use in `<script>` tag or via ES Modules.
* No npm (yet) — it’s just a file.

---

## 📜 License

MIT — free to use, remix, fork, or ignore 🍹

---

## ✨ Author

Made by [@stimpy77](https://github.com/stimpy77) — inspired by the golden age of jQuery, modernized for now.

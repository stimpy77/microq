# microq

tl;dr drop-in alternative to jquery for otherwise vanilla js, **`mq.js` = chainable, expressive, minimal**

### moar (because ChatGPT can, hence all the stupid emojis) ...

***“For those who once loved jQuery, but now live vanilla.”***

`mq.js` is a tiny helper library for DOM manipulation, event handling, class toggling, and AJAX — ~~lovingly crafted~~ hurriedly spewed out for nostalgic jQuery developers who don’t want the bloat but still want the terseness.

> 🍷 **No dependencies. No build tools. Just drop it in and dance.**

---

## 🚀 Quick Start

```html
<script src="path/to/mq.js"></script>
```

or

```html
<script type="module">
  import './mq.js';
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

## 🎨 Examples & Tutorials

---

### `$()` – Select elements

```js
// Non-chaining
const boxes = $('.box');

// Chaining
$('.box').$addClass('loaded');
```

---

### `$1st()` – First match

```js
// Non-chaining
const firstBox = $1st('.box');

// Chaining (used with other methods)
$1st('.box').classList.add('first');
```

---

### `$1ast()` – Last match

```js
// Non-chaining
const lastBox = $1ast('.box');

// Chaining (used with other methods)
$1ast('.box').classList.add('last');
```

---

### `$ea()` – Loop through elements

```js
// Non-chaining
$ea($('.box'), (i, el) => {
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
$eon($('.btn'), 'click', function () {
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
$addClass($('.box'), 'highlight');

// Chaining
$('.box').$addClass('highlight');
```

---

### `$removeClass()` – Remove class

```js
// Non-chaining
$removeClass($('.box'), 'hidden');

// Chaining
$('.box').$removeClass('hidden');
```

---

### `$toggleClass()` – Toggle class

```js
// Non-chaining
$toggleClass($('.box'), 'active');

// Chaining
$('.box').$toggleClass('active');
```

---

### `$css()` – Apply CSS styles

```js
// Non-chaining
$css($('.box'), {
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
$attr($('.link'), 'target', '_blank');

// Get (chaining-safe, still non-chaining)
const href = $('.link').$attr('href');

// Set (chaining)
$('.link').$attr('target', '_blank');
```

---

### `$html()` – Get/set HTML content

```js
// Get (non-chaining)
const html = $html($('.box'));

// Set (non-chaining)
$html($('.box'), '<strong>Updated!</strong>');

// Get (chaining-safe)
const html = $('.box').$html();

// Set (chaining)
$('.box').$html('<strong>Updated!</strong>');
```

---

### `$text()` – Get/set text content

```js
// Get (non-chaining)
const text = $text($('.box'));

// Set (non-chaining)
$text($('.box'), 'Hello');

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
$('.box')
  .$addClass('ready')
  .$css({ color: 'lime' })
  .$ea((i, el) => (el.dataset.index = i))
  .$eon('click', () => alert('Clicked!'))
  .$html('<strong>Updated</strong>');
```

---

## 🌈 Why Use microq?

* 🧠 Tiny mental model
* 🥃 Feels like jQuery, but pure vanilla
* 🛠️ Great for small apps, demos, and prototypes
* 🤏 Minimal footprint
* ⚡ Instant productivity

---

## 💡 Tips

* Use `async/await`, `let/const`, and modern JS with it — microq is just a helper.
* Works great for static sites, Markdown blogs, and frontend-only widgets.
* Every function accepts a selector string or a DOM Node/NodeList.

---

## 🧪 In the Wild

```html
<div class="faq">
  <h3 class="question">What is MicroQ?</h3>
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
git clone https://github.com/stimpy77/microq.git
cd microq
```

---

## 📜 License

MIT — use it freely, remix, fork, or forget 🍻

---

## ✨ Author

Made by [@stimpy77](https://github.com/stimpy77), with love for the DOM and dry humor.

---

Let me know if you'd like this converted to `README.md` directly or styled for GitHub Pages.

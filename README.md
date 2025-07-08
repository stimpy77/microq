# microq

tl;dr drop-in alternative to jquery for otherwise vanilla js, mq.js = clean, mqc.js = chaining

### moar (because ChatGPT can) ....

***“For those who once loved jQuery, but now live vanilla.”***

mq.js is a tiny helper library for DOM manipulation, event handling, class toggling, and AJAX — ~~lovingly crafted~~ hurriedly spewed out for nostalgic jQuery developers who don’t want the bloat but still want the terseness.

> 🍷 **No dependencies. No build tools. Just drop it in and dance.**

---

## 🚀 Quick Start

### CDN (Recommended for Now)

Since MicroQ isn't an npm module (yet), just copy `mq.js` or `mqc.js` into your project or use a CDN solution like [jsDelivr](https://www.jsdelivr.com/) if you self-host.

```html
<!-- Choose either one -->
<script src="path/to/mq.js"></script>     <!-- classic -->
<script src="path/to/mqc.js"></script>    <!-- chainable -->
```

---

## 📚 API Reference

| Function         | Description                   |
| ---------------- | ----------------------------- |
| `$()`            | Select all matching elements  |
| `$1st()`         | Select first matching element |
| `$1ast()`        | Select last matching element  |
| `$ea()`          | Loop through elements         |
| `$eon()`         | Event listener                |
| `$addClass()`    | Add class to elements         |
| `$removeClass()` | Remove class from elements    |
| `$toggleClass()` | Toggle class on elements      |
| `$css()`         | Apply CSS styles              |
| `$attr()`        | Get/set attributes            |
| `$html()`        | Get/set innerHTML             |
| `$text()`        | Get/set textContent           |
| `$get()`         | Fetch raw text from URL       |
| `$getJSON()`     | Fetch JSON from URL           |

---

## 🎨 Examples & Tutorials

### 🔍 Select Elements

```js
// mq.js
const boxes = $('.box');
const firstBox = $1st('.box');
const lastBox = $1ast('.box');

// mqc.js (same)
const boxes = $('.box');
const firstBox = $1st('.box');
const lastBox = $1ast('.box');
```

---

### 🔁 Loop Through Elements

```js
// mq.js
$ea($('.box'), (i, el) => {
  console.log(`Box ${i}:`, el);
});

// mqc.js
$('.box').$ea((i, el) => {
  console.log(`Box ${i}:`, el);
});
```

---

### 🧲 Event Binding

```js
// mq.js
$eon($('.btn'), 'click', function () {
  alert(`You clicked ${this.textContent}`);
});

// mqc.js
$('.btn').$eon('click', function () {
  alert(`You clicked ${this.textContent}`);
});
```

---

### 🎭 Toggle Classes

```js
// mq.js
$addClass($('.box'), 'highlight');
$removeClass($('.box'), 'hidden');
$toggleClass($('.box'), 'active');

// mqc.js
$('.box')
  .$addClass('highlight')
  .$removeClass('hidden')
  .$toggleClass('active');
```

---

### 🎨 Apply CSS

```js
// mq.js
$css($('.box'), {
  backgroundColor: 'gold',
  transform: 'scale(1.05)',
});

// mqc.js
$('.box').$css({
  backgroundColor: 'gold',
  transform: 'scale(1.05)',
});
```

---

### 🏷️ Attributes

```js
// mq.js
console.log($attr($('.link'), 'href'));
$attr($('.link'), 'target', '_blank');

// mqc.js
console.log($('.link').$attr('href'));
$('.link').$attr('target', '_blank');
```

---

### 🧠 Content Manipulation

```js
// mq.js
$html($('.box'), '<strong>Updated!</strong>');
$text($('.box'), 'Just text please.');

// mqc.js
$('.box').$html('<strong>Updated!</strong>');
$('.box').$text('Just text please.');
```

---

### 🌍 Fetch Content

```js
// mq.js
$get('/data/sample.txt').then(content => {
  $html($('.output'), content);
});

$getJSON('/data/user.json').then(data => {
  console.log('User:', data.name);
});

// mqc.js (same)
$get('/data/sample.txt').then(content => {
  $('.output').$html(content);
});

$getJSON('/data/user.json').then(data => {
  console.log('User:', data.name);
});
```

---

### 🍝 Full-Chain Example (mqc.js only)

```js
$('.box')
  .$addClass('highlight')
  .$css({ backgroundColor: 'gold' })
  .$ea((i, el) => {
    el.textContent = `Box ${i}`;
  })
  .$eon('click', () => alert('Clicked!'))
  .$removeClass('hidden')
  .$html('<strong>Updated!</strong>');
```

---

## 🧪 MicroQ vs jQuery

| Task      | jQuery              | MicroQ (mq.js)          | MicroQ (mqc.js)         |
| --------- | ------------------- | ----------------------- | ----------------------- |
| Select    | `$('.box')`         | `$('.box')`             | `$('.box')`             |
| First     | `$('.box').first()` | `$1st('.box')`          | `$1st('.box')`          |
| Add class | `.addClass()`       | `$addClass(el, cls)`    | `$(el).$addClass(cls)`  |
| Click     | `.on('click', fn)`  | `$eon(el, evt, fn)`     | `$(el).$eon(evt, fn)`   |
| CSS       | `.css()`            | `$css(el, styles)`      | `$(el).$css(styles)`    |
| Ajax      | `$.get()`           | `$get()` / `$getJSON()` | `$get()` / `$getJSON()` |

---

## 🌈 Why Use MicroQ?

* 🧠 Tiny mental model
* 🥃 Feels like jQuery, but pure vanilla
* 🛠️ Great for small apps, demos, and prototypes
* 🤏 Minimal footprint
* ⚡ Instant productivity

---

## 💡 Tips

* Combine with template literals for quick UI rendering.
* Use modern JavaScript features (`async/await`, `let/const`, etc.) with MicroQ for clean and expressive code.
* Great companion to static sites and Markdown-based blogs.

---

## 🧪 In the Wild

```html
<!-- Example: Interactive FAQ -->
<div class="faq">
  <h3 class="question">What is MicroQ?</h3>
  <p class="answer hidden">A micro DOM utility library!</p>
</div>

<script>
  // mq.js
  $eon($('.question'), 'click', function () {
    const answer = this.nextElementSibling;
    $toggleClass([answer], 'hidden');
  });

  // mqc.js
  $('.question').$eon('click', function () {
    $(this.nextElementSibling).$toggleClass('hidden');
  });
</script>
```

---

## 🧼 Gotchas

* `$()` returns a **NodeList**, not an Array — but still `.forEach()`-able.
* `$attr`, `$html`, `$text` all assume you're fine with modifying the **first element** when getting values.
* Chainable version (`mqc.js`) doesn't mutate `NodeList.prototype`, it just returns `p` for chaining.

---

## 🛠️ Dev Notes

Want to fork, modify, or improve MicroQ? Clone and hack away:

```bash
git clone https://github.com/stimpy77/microq.git
cd microq
```

---

## 📜 License

MIT — use it freely, remix, and share 🍻

---

## ✨ Author

Made by [@stimpy77](https://github.com/stimpy77), with love for the DOM and dry humor.

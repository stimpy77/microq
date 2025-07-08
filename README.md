# microq
tl;dr drop-in alternative to jquery for otherwise vanilla js

### moar ....

***“For those who once loved jQuery, but now live vanilla.”***

MicroQ is a tiny helper library for DOM manipulation, event handling, class toggling, and AJAX — lovingly crafted for nostalgic jQuery developers who don’t want the bloat but still want the *joy*.

> 🍷 **No dependencies. No build tools. Just drop it in and dance.**

---

## 🚀 Quick Start

### CDN (Recommended for Now)

Since MicroQ isn't an npm module (yet), just copy `mq.js` into your project or use a CDN solution like [jsDelivr](https://www.jsdelivr.com/) if you self-host.

```html
<script src="path/to/mq.js"></script>
```

Or use directly in a `<script type="module">` setup.

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
const boxes = $('.box');           // All boxes
const firstBox = $1st('.box');     // First one
const lastBox = $1ast('.box');     // Last one
```

---

### 🔁 Loop Through Elements

```js
$ea($('.box'), (i, el) => {
  console.log(`Box ${i}:`, el);
});
```

---

### 🧲 Event Binding

```js
$eon($('.btn'), 'click', function () {
  alert(`You clicked ${this.textContent}`);
});
```

---

### 🎭 Toggle Classes

```js
$addClass($('.box'), 'highlight');
$removeClass($('.box'), 'hidden');
$toggleClass($('.box'), 'active');
```

---

### 🎨 Apply CSS

```js
$css($('.box'), {
  backgroundColor: 'gold',
  transform: 'scale(1.05)',
});
```

---

### 🏷️ Attributes

```js
// Get
console.log($attr($('.link'), 'href'));

// Set
$attr($('.link'), 'target', '_blank');
```

---

### 🧠 Content Manipulation

```js
$html($('.box'), '<strong>Updated!</strong>');
$text($('.box'), 'Just text please.');
```

---

### 🌍 Fetch Content

```js
$get('/data/sample.txt').then(content => {
  $html($('.output'), content);
});

$getJSON('/data/user.json').then(data => {
  console.log('User:', data.name);
});
```

---

## 🧪 MicroQ vs jQuery

| Task      | jQuery              | MicroQ                  |
| --------- | ------------------- | ----------------------- |
| Select    | `$('.box')`         | `$('.box')`             |
| First     | `$('.box').first()` | `$1st('.box')`          |
| Add class | `.addClass()`       | `$addClass()`           |
| Click     | `.on('click', fn)`  | `$eon()`                |
| CSS       | `.css()`            | `$css()`                |
| Ajax      | `$.get()`           | `$get()` / `$getJSON()` |

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
  $eon($('.question'), 'click', function () {
    const answer = this.nextElementSibling;
    $toggleClass([answer], 'hidden');
  });
</script>
```

---

## 🧼 Gotchas

* `$()` returns a **NodeList**, not an Array — but still `.forEach()`-able.
* `$attr`, `$html`, `$text` all assume you're fine with modifying the **first element** when getting values.

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

---

Let me know if you’d like the README in Markdown file format or want to add logo/CDN support/npm packaging instructions.

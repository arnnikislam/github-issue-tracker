# GitHub Issue Tracker

A simple, responsive issue tracker web app built with HTML, Tailwind CSS, DaisyUI, and vanilla JavaScript. This is **Assignment 06 of PH Hero**, made after completing the JavaScript course.

🔗 **Live Demo:** [arnnikislam.github.io/github-issue-tracker](https://arnnikislam.github.io/github-issue-tracker/)

---

## 🔐 Demo Login

| Username | Password   |
| -------- | ---------- |
| `admin`  | `admin123` |

---

## ✨ Features

- Login page with demo credentials
- View all issues as responsive cards (1, 2, or 4 columns depending on screen size)
- Filter issues by **All**, **Open**, or **Closed**
- Search issues by text
- Live issue count
- Open / Closed status indicators
- Click an issue to see its details in a modal
- Loading spinner while data is being fetched
- Fully responsive layout (mobile, tablet, desktop)

---

## 🛠️ Built With

- **HTML5**
- **Tailwind CSS v4** (browser build)
- **DaisyUI 5**
- **JavaScript (ES6)**
- **Font Awesome** for icons
- **Google Fonts** (Geist, Poppins, Hind Siliguri)
- **GitHub Pages** for hosting

---

## 📁 Project Structure

```
github-issue-tracker/
├── assets/             # Images and icons
├── js/                 # JavaScript files
├── home.html           # Main issue tracker page
├── index.html          # Login page
├── style.css           # Custom styles
└── tailwind.config.js  # Tailwind config
```

---

## 🚀 Run Locally

```bash
git clone https://github.com/arnnikislam/github-issue-tracker.git
cd github-issue-tracker
```

Then open `index.html` in your browser (or use the VS Code **Live Server** extension).

---

## 📚 JavaScript Q&A

### 1. What is the difference between `var`, `let`, and `const`?

- `var` is function-scoped, can be redeclared, and gets hoisted with the value `undefined`.
- `let` is block-scoped. You can reassign it, but you can't redeclare it in the same scope.
- `const` is block-scoped too, but you can't reassign it. (Objects and arrays declared with `const` can still be changed inside.)

Use `const` by default, `let` when the value will change, and avoid `var`.

### 2. What is the spread operator (`...`)?

It expands an array or object into individual items. It's mostly used for copying or merging.

```js
const a = [1, 2];
const b = [...a, 3]; // [1, 2, 3]

const user = { name: "Payel" };
const copy = { ...user, age: 18 };
```

### 3. What is the difference between `map()`, `filter()`, and `forEach()`?

- `map()` runs a function on every item and returns a new array of the results.
- `filter()` returns a new array with only the items that pass a condition.
- `forEach()` just loops through the items and returns nothing (`undefined`).

```js
[1, 2, 3].map((n) => n * 2); // [2, 4, 6]
[1, 2, 3].filter((n) => n > 1); // [2, 3]
[1, 2, 3].forEach((n) => console.log(n));
```

### 4. What is an arrow function?

It's a shorter way to write a function, introduced in ES6. It also doesn't have its own `this`, so it uses the `this` from the surrounding code.

```js
const add = (a, b) => a + b;
```

### 5. What are template literals?

Strings written with backticks (`` ` ``) that let you put variables or expressions inside `${}` and write multi-line text easily.

```js
const name = "Payel";
console.log(`Hello, ${name}! 2 + 3 = ${2 + 3}`);
```

---

## 👤 Author

**Md. Arnnik Islam Payel**

- GitHub: [@arnnikislam](https://github.com/arnnikislam)
- Portfolio: [arnnikislam.vercel.app](https://arnnikislam.vercel.app)

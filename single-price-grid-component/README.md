# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic 

## 👀 Overview

### 🚩 The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### 📸 Screenshot

![screenshot](./screenshot.png)


### 🏡 Link

- Live Site URL: [Visit Online](https://luking-frontendmentor-challenges.netlify.app/single-price-grid-component/)

## 🚧 My process

### 🔖 Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### ✍️ What I learned
```css
/* footer紧贴底部的布局 */
body {
  display: grid;
  place-items: center;
  grid-template-rows: 1fr min-content;
}
```

```css
@media (min-width: 1200px) {
  .card {
    --part-padding: 2.5rem;

    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr 1fr;
  }
  .card__part-1 {
    grid-column: 1 / 3;
  }
}
```

### 🔗 Useful resources

- [The most common HTML mistake // The incorrect use of HTML heading levels](https://www.youtube.com/watch?v=NexL5_Vdoq8) - Always use correct heading levels.
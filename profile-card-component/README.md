# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## 👀 Overview

### 🚩 The challenge

Users should be able to:

- Build out the project to the designs provided

### 📸 Screenshot

![screenshot](./screenshot.png)


### 🏡 Link

- Live Site URL: [Visit Online](https://luking-frontendmentor-challenges.netlify.app/profile-card-component/)

## 🚧 My process

### 🔖 Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### ✍️ What I learned

```css
/* body bg styles */
body::before,
body::after {
  content: "";
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-repeat: no-repeat;
}

body::before {
  background-image: url(./images/bg-pattern-top.svg);
  background-position: right bottom;
  transform: translate(-50%, -50%);
}

body::after {
  background-image: url(./images/bg-pattern-bottom.svg);
  background-position: left top;
  transform: translate(50%, 50%);
}
```



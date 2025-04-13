# Avshalom Portfolio

- This is my portfolio page to show my knolig and projects that i build.

## ⚠️ Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>.

<div align="center">
  <br />
    <a href="https://www.youtube.com/watch?v=E-fdPfRxkzQ" target="_blank">
      <img src="public/images/project-img.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </div>

  <h3 align="center">Interactive 3D Portfolio Website</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔗 [Assets & Snippets](#links)
6. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

The 3D Portfolio project is a highly engaging personal website that features animated 3D scenes, smooth camera transitions, interactive model showcases, and responsive design. It’s ideal for developers, designers, or freelancers looking to stand out in the digital crowd.

## <a name="tech-stack">⚙️ Tech Stack</a>


- This project wa build with [Vite-Framework](https://vite.dev/) and [React](https://react.dev/).

- [Three.js](https://threejs.org/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction).
- [Drei](https://www.npmjs.com/package/@react-three/drei)
- [GSAP](https://gsap.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [React-countup](https://www.npmjs.com/package/react-countup).

## <a name="features">🔋 Features</a>

### Features of the 3D Portfolio Project

👉 Animated 3D models and reveal animations

👉 Realistic lighting and shadows

👉 GSAP-powered scroll interactions

👉 Responsive design with Tailwind CSS and Flexbox/Grid

👉 Micro Interactions

👉 Multi-section layout (About, Projects, Contact)

👉 Mobile optimized 3D experience

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Creating the Project**

Create the new vite project:

```bash
mkdir <project-name>
cd <project-name>
npm create vite@latest ./
npm install
npm run dev
```

If cloned from this repo Install the project dependencies using npm:

```bash
npm install
npm run dev
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

Replace the placeholder values with your actual **[EmailJS](https://www.emailjs.com/)** credentials.

**Installed packages**

```bash
npm install gsap @gsap/react three @react-three/fiber @react-three/drei @react-three/postprocessing
npm install tailwindcss @tailwindcss/vite react-responsive react-countup
```

Open [http://localhost:5173](http://localhost:5173/) in your browser to view the project.

Converting the 3d mashes objects to optimized react jsx file to render.

```bash
npx gltfjsx <Object-file>.glb
```

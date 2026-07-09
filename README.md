# 🧱 Tiles Gallery

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat-level&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-level&logo=react)](https://react.dev/)
[![Better Auth](https://img.shields.io/badge/Better--Auth-1.6.9-orange?style=flat-level)](https://better-auth.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.2.0-green?style=flat-level&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-level&logo=tailwind-css)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.5.19-purple?style=flat-level)](https://daisyui.com/)
[![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-success?style=flat-level&logo=vercel)](https://tiles-gallery-pi.vercel.app/home)

Tiles Gallery is a modern, premium, and highly responsive web application designed for browsing, exploring, and showcasing various collections of premium tiles. Powered by Next.js 16 (App Router) and styled with Tailwind CSS v4 and DaisyUI v5, this platform delivers visually stunning presentation with glassmorphism effects, smooth animations, and protected routes to ensure secure browsing for registered users.

---

## 📸 Project Showcase

![Tiles Gallery Showcase](https://i.ibb.co.com/Q5Kt34v/image.png)

---

## 🔗 Project Links

*   **Live Application:** [tiles-gallery-pi.vercel.app/home](https://tiles-gallery-pi.vercel.app/home)
*   **GitHub Repository:** [github.com/sadikur-sadik/Tiles-Gallery](https://github.com/sadikur-sadik/Tiles-Gallery)
*   **Mock Database Endpoint:** [tiles-json-server.onrender.com/data](https://tiles-json-server.onrender.com/data)

---

## ✨ Core Features

*   **🚀 Next.js App Router Architecture:** Clean structure organized around functional route groups (`(main)` and `(auth)` pages).
*   **🔒 Secure Route Protection:** Essential pages like tile details (`/all-tiles/[details]`), `/profile`, and `/update` are behind middleware validation. Anonymous users are redirected to login.
*   **🔑 Multi-Method Authentication:** Powered by **Better Auth** using:
    *   Traditional Email & Password sign-up and login.
    *   Social Sign-In via Google OAuth.
*   **👤 Dynamic User Profiles:** Authenticated users can view their profile stats and modify their profile settings (like email updates) directly.
*   **🎨 Premium UI/UX Styling:** Built on Tailwind CSS v4 and DaisyUI v5, offering modern layouts with glassmorphic cards, custom layouts, and a responsive experience.
*   **🎬 Micro-Animations & Marquees:** Integrated with `animate.css` for entrance effects and `react-fast-marquee` for dynamic banner displays.

---

## 🛠️ Technologies Used

### Core Framework & Stack
*   **Next.js 16 (App Router)** - React production framework for Server-Side Rendering (SSR) and routing.
*   **React 19** - Component-based UI library.
*   **Better Auth** - Security framework for handling authentication, credentials, and OAuth.
*   **MongoDB** - NoSQL database used to persist authentication sessions, user records, and credentials.
*   **Tailwind CSS v4 & PostCSS** - Modern utility-first styling.
*   **DaisyUI v5** - Component styling library built on top of Tailwind.

---

## 📦 Project Dependencies

The project uses the following major packages:

### Dependencies
| Library | Version | Description |
| :--- | :---: | :--- |
| `next` | `16.2.4` | Next.js framework |
| `react` / `react-dom` | `19.2.4` | React core library |
| `better-auth` | `^1.6.9` | Authentication library |
| `@better-auth/mongo-adapter` | `^1.6.9` | Better Auth MongoDB database adapter |
| `mongodb` | `^7.2.0` | MongoDB driver for database access |
| `animate.css` | `^4.1.1` | Pre-built CSS transitions and animations |
| `react-fast-marquee` | `^1.6.5` | Lightweight marquee component for dynamic tickers |
| `react-hook-form` | `^7.74.0` | Performant and flexible form validation |
| `react-icons` | `^5.6.0` | SVG icons helper |
| `react-toastify` | `^11.1.0` | Custom toast notifications |

### Dev Dependencies
| Library | Version | Description |
| :--- | :---: | :--- |
| `tailwindcss` | `^4` | Tailwind CSS style compiler |
| `@tailwindcss/postcss` | `^4` | PostCSS support for Tailwind v4 |
| `daisyui` | `^5.5.19` | UI component library |
| `eslint` | `^9` | Code linter |
| `eslint-config-next` | `16.2.4` | Next.js configuration for ESLint |

---

## 🚀 Local Development Setup Guide

Follow these steps to run the Tiles Gallery project locally:

### 1. Prerequisites
Ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (version `v18.x` or higher recommended)
*   [Git](https://git-scm.com/)
*   A MongoDB database (either a local instance or a cloud cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### 2. Clone the Repository
```bash
git clone https://github.com/sadikur-sadik/Tiles-Gallery.git
cd Tiles-Gallery
```

### 3. Install Dependencies
Run the command below in the project directory to install all the dependencies:
```bash
npm install
```

### 4. Configure Environment Variables
Create a file named `.env` in the root of the project and populate it with the following environment variables:

```env
# Better Auth setup
BETTER_AUTH_SECRET=your_better_auth_secret_here
BETTER_AUTH_URL=http://localhost:3000

# MongoDB Database URI (Make sure to replace with your connection string)
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>

# Google OAuth Credentials (for social login)
GOOGLE_CLIENT_ID=your_google_client_id_here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
```

> [!TIP]
> You can generate a strong random 32-character key for `BETTER_AUTH_SECRET` by running:
> ```bash
> openssl rand -base64 32
> ```

### 5. Start the Local Servers

Start the Next.js development server:
```bash
npm run dev
```

The application will start running at **[http://localhost:3000](http://localhost:3000)**. Open your browser and navigate to this URL to view the site locally.

### 6. Building for Production

If you want to build and test the production bundle of the application, execute:
```bash
# Build the application
npm run build

# Start the server
npm run start
```

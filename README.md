# Nice Gadgets — E-Commerce Web Application

A modern and fully responsive e-commerce web application for smartphones, tablets, and accessories.  
The project was built using a clean architecture, reusable UI components, and an optimized frontend workflow.  
---

## 🔗 Live Demo:
https://async-misfits.github.io/nice-gadgets-project/#/

---

## 🔧 Tech Stack

### **Frontend**
- React + TypeScript  
- Vite  
- SCSS Modules  
- Atomic Design architecture   
- Swiper.js     
- React Router v6 (HashRouter)

### **State Management**
- Redux Toolkit  
- LocalStorage persistence  

### **Backend**
- Supabase (PostgreSQL + API)  
- Dynamic product fetching  

### **Tooling & Quality**
- ESLint + TypeScript ESLint  
- Prettier  
- Husky (pre-commit hooks)  
- GitHub Actions (GH-Pages deployment)  
- Vite aliasing (`@/`)

---

## ✨ Key Features

### 🏠 Homepage
- Full-width Promo Slider  
- Category Cards (Phones / Tablets / Accessories)  
- Product carousels:
  - **Brand New Models**
  - **Hot Prices** 

### 📱 Catalog Pages
- Dynamic category routes  
- Product cards with Add to Cart / Add to Favorites  
- Price comparison & discounts  

### 📄 Product Details Page
- Full product specs  
- Image gallery   
- Related products  

### 🛒 Cart
- Add / Remove / Update quantity  
- Total price & count  

### ⭐ Favorites
- Save/unsave products  
- Uses shared ProductCard logic  

### 🧭 Routing
- Custom breadcrumbs  
- Back button navigation  
- 404 page  
- Product Not Found fallback  

---

## 🚀 Deployment

The application is deployed via **GitHub Pages** with automatic CI/CD:

- Build with Vite  
- Deploy through GitHub Actions  
- Uses `HashRouter` for client-side navigation compatibility  

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Async-Misfits/nice-gadgets-project.git

# Install dependencies
npm install

# Run in development
npm run dev

```

---

## 👥 Team

Dmytro — Tech Lead / Frontend Developer

Daria — Project Manager / Frontend Developer

Nazar — Frontend Developer

Yevhen — Frontend Developer

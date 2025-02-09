# 💳 Modern Payment App

This is a **Next.js-based payment application** with a **card freeze functionality**. It features a sleek **dark-themed UI**, smooth **animations**, and interactive elements for a modern user experience.

---

## 🚀 Features

✅ **Card Freeze/Unfreeze** – Toggle between active and frozen states with a smooth frost effect.  
✅ **Bottom Navigation** – Navigate seamlessly between different sections (Home, Pay, Give).  
✅ **Realistic Card Details** – Uses `faker.js` to generate card numbers and expiry dates.  
✅ **Smooth Animations** – Implemented using **Framer Motion** and **CSS animations**.  
✅ **Mobile-Optimized UI** – Fully responsive design using **Tailwind CSS**.  
✅ **Fast Performance** – Built with **Next.js** for optimized rendering and routing.  

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx        # Main app layout
│   ├── page.tsx          # Home page
│   ├── pay/page.tsx      # Pay screen
│   ├── give/page.tsx     # Give screen
│
├── components/
│   ├── bottom-nav.tsx    # Bottom navigation bar
│   ├── card-screen.tsx   # Card display and freeze functionality
│
├── styles/
│   ├── globals.css       # Global styles
│
└── public/               # Static assets
```

---

## ⚙️ Technologies Used

- **Next.js** – Fast client-side routing & server rendering.
- **React.js** – Component-based UI development.
- **Tailwind CSS** – Utility-first styling for a modern UI.
- **Framer Motion** – Smooth animations & interactions.
- **faker.js** – Generates random card details for testing.

---

## 🎯 How It Works

1️⃣ **Card Freeze Effect** – Uses CSS `backdrop-filter`, gradients, and animations to simulate frost.  
2️⃣ **Navigation** – Built with Next.js `Link` and `usePathname` to highlight active tabs.  
3️⃣ **State Management** – Uses React `useState` for toggling the freeze state & payment mode.  

---

## 🛠 Challenges & Solutions

**1️⃣ Frost Effect:**  
✔️ Used a **gradient overlay, blur filters, and SVG patterns** to create a realistic frozen card effect.  

**2️⃣ State Management:**  
✔️ Used `useState` for now, but could be replaced with **Zustand or Redux** for global state management.  

---

## 🔥 Future Enhancements

🚀 **Backend Integration** – Connect with a real API for user authentication and card freezing.  
🚀 **Unit & Integration Tests** – Improve reliability with Jest & React Testing Library.  
🚀 **Optimized Animations** – Ensure smooth performance on low-end devices.  

---

## 🏗️ Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/latha0001/payment-interface.git
cd payment-interface

```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

The app will run at **`http://localhost:3000`** 🚀

---

## 📜 License
This project is **MIT Licensed** – Feel free to use and modify! 🎉

---

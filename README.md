# **AI Model Hub**
<img width="100" height="100" src="https://ai-model-hub-sj.netlify.app/logo.png">

*React + Vite Application for AI Model Subscription Management*

Netlify Live: https://ai-model-hub-sj.netlify.app/ 
GitHUB Live: 
---

## **1. Overview**
The **AI Model Hub** is a web application built with **React, Vite, and Tailwind CSS** that allows users to browse, select, and subscribe to various AI models. The application provides a unified subscription model for accessing multiple AI services under a single plan.

### **Key Features**
- **Model Catalog**: Displays a list of AI models with descriptions, pricing, and status indicators.
- **Shopping Cart**: Users can add models to a cart and view their selections.
- **Responsive UI**: Built with Tailwind CSS and DaisyUI for a modern, responsive design.
- **Real-time Feedback**: Uses `react-toastify` for success/error notifications.
- **Dynamic Data Fetching**: Models are loaded asynchronously from `models.json`.

---

## **2. Architecture Overview**
### **Tech Stack**
| Category       | Technology                          | Purpose                                                                 |
|----------------|-------------------------------------|-------------------------------------------------------------------------|
| **Frontend**   | React (v19.2.4)                     | Core UI and component-based architecture.                                |
| **Build Tool** | Vite (v8.0.1)                       | Fast development server and bundler.                                    |
| **Styling**    | Tailwind CSS (v4.2.2) + DaisyUI     | Utility-first CSS framework for rapid UI development.                   |
| **State Mgmt** | React Hooks (`useState`, `useEffect`) | Local state management for cart and tab switching.                     |
| **Notifications** | `react-toastify` (v11.0.5)         | User feedback via toast notifications.                                    |
| **Icons**      | Lucide React (v1.3.0)               | Customizable SVG icons for UI elements.                                 |

---

## **3. Project Structure**
```
ai-model-hub/
├── public/                  # Static assets (HTML, images, JSON data)
│   ├── index.html           # Entry HTML file
│   ├── logo.png             # Application logo
│   └── models.json          # AI model data (mock API)
├── src/                     # Source code
│   ├── components/           # Reusable UI components
│   │   ├── Banner.jsx        # Hero banner component
│   │   ├── Cart.jsx          # Shopping cart UI
│   │   ├── Footer.jsx        # Footer section
│   │   ├── ModelCard.jsx     # Individual model card
│   │   ├── Models.jsx        # Model listing grid
│   │   └── NavBar.jsx        # Navigation bar
│   ├── App.jsx               # Main application component
│   ├── index.css             # Global CSS (Tailwind + DaisyUI)
│   └── main.jsx              # React entry point
├── .gitignore                # Ignored files (logs, node_modules, etc.)
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

---

## **4. Setup & Installation**
### **Prerequisites**
- **Node.js** (v18+ recommended)
- **npm** or **yarn** (v7+)

### **Installation Steps**
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ai-model-hub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   - The app will be available at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   - Outputs optimized files to the `dist/` directory.


---

## **5. Key Components**
### **5.1. `App.jsx` (Main Component)**
- **Purpose**: Orchestrates the application state (tabs, cart) and renders child components.
- **Key Logic**:
  - Manages active tab (`model` or `cart`) via `useState`.
  - Handles cart state (`carts` array) for adding/removing models.
  - Uses `Suspense` for async model data loading.

```jsx
const [activeTab, setActiveTab] = useState("model");
const [carts, setCarts] = useState([]);

const modelPromise = getModel(); // Async fetch of models.json
```

---

### **5.2. `Models.jsx` (Model Listing)**
- **Purpose**: Displays a grid of AI models using `ModelCard`.
- **Key Features**:
  - Uses `use()` hook to await `modelPromise`.
  - Renders models in a responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

```jsx
const models = use(modelPromise);

return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {models.map((model) => (
      <ModelCard model={model} key={model.id} carts={carts} setCarts={setCarts} />
    ))}
  </div>
);
```

---

### **5.3. `ModelCard.jsx` (Individual Model UI)**
- **Purpose**: Represents a single AI model with:
  - Image, title, description, price, and status badge.
  - "Add to Cart" button with toast feedback.
- **Key Logic**:
  - Tracks subscription state (`isSubscribed`) to prevent duplicates.
  - Uses `react-toastify` for success/error messages.

```jsx
const handleSubscribe = () => {
  const isFound = carts.find(item => item.id === model.id);
  if (isFound) {
    toast.error("Item already in cart!");
    return;
  }
  setIsSubscribed(true);
  setCarts([...carts, model]);
  toast.success("Item added to cart!");
};
```

---

### **5.4. `Cart.jsx` (Shopping Cart)**
- **Purpose**: Displays cart contents and allows removal of items.
- **Key Features**:
  - Calculates total price via `reduce()`.
  - Renders empty state if cart is empty.
  - Provides "Remove" buttons for each item.

```jsx
const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

const handleRemove = (id) => {
  const filteredCarts = carts.filter(item => item.id !== id);
  setCarts(filteredCarts);
  toast.success("Item removed from the cart");
};
```

---

### **5.5. `NavBar.jsx` (Navigation)**
- **Purpose**: Provides global navigation with:
  - Logo, menu items (`Home`, `About`, `Services`, `Contact`), and a CTA button.
- **Key Features**:
  - Responsive design (hidden on mobile, full menu on desktop).

```jsx
<div className="navbar">
  <div className="navbar-start">
    <div className="flex items-center gap-1 font-bold text-xl">
      <img className="w-10" src="/logo.png" /> Ai Hub
    </div>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal gap-10 px-1 text-lg">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Services</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
  </div>
</div>
```

---

## **6. Configuration**
### **6.1. `package.json`**
- **Scripts**:
  | Script | Command | Description                          |
  |--------|---------|--------------------------------------|
  | `dev`  | `vite`  | Starts the development server.       |
  | `build`| `vite build` | Generates production-ready files.   |
  | `lint` | `eslint .` | Runs ESLint for code quality checks. |
  | `preview` | `vite preview` | Serves the production build locally. |

- **Dependencies**:
  - `@tailwindcss/vite`, `lucide-react`, `react-toastify`: UI and utility libraries.
  - `react`, `react-dom`: Core React dependencies.

- **Dev Dependencies**:
  - `@vitejs/plugin-react`: React plugin for Vite.
  - `eslint`, `daisyui`: Linting and styling tools.

---

### **6.2. `vite.config.js`**
- **Purpose**: Configures Vite plugins.
- **Key Settings**:
  - Enables React support via `@vitejs/plugin-react`.
  - Integrates Tailwind CSS via `@tailwindcss/vite`.

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

### **6.3. `eslint.config.js`**
- **Purpose**: Configures ESLint for React projects.
- **Key Rules**:
  - Enforces React hooks (`react-hooks`) and refresh rules.
  - Extends `@eslint/js` for base JavaScript rules.
  - Ignores `dist/` directory.

```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);
```

---

## **7. Data Flow**
1. **Model Data**:
   - Loaded asynchronously from `public/models.json` via `fetch()`.
   - Stored in `modelPromise` and rendered via `use()` hook.

2. **Cart State**:
   - Managed locally in `App.jsx` via `useState`.
   - Passed down to `ModelCard` and `Cart` components.

3. **User Feedback**:
   - Success/error messages handled by `react-toastify`.

---

## **8. Styling**
### **8.1. `index.css`**
- **Purpose**: Global styles and Tailwind/DaisyUI imports.
- **Key Rules**:
  - Sets default font (`Outfit` from Google Fonts).
  - Imports Tailwind and DaisyUI plugins.

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
@import "tailwindcss";
@plugin "daisyui";
```

### **8.2. Tailwind/DaisyUI Classes**
- **Example Components**:
  - **ModelCard**: Uses `shadow-lg`, `rounded-3xl`, and `border-zinc-300`.
  - **Cart**: Employs `bg-zinc-100`, `hover:border-red-600/50` for interactive states.
  - **Banner**: Leverages `bg-linear-to-r` for gradient text.

---

## **9. Development Guidelines**
### **9.1. Coding Standards**
- **Component Structure**:
  - Each component should be self-contained (props, state, logic).
  - Use `PascalCase` for component filenames (e.g., `ModelCard.jsx`).
- **State Management**:
  - Prefer `useState` for local component state.
  - Avoid prop drilling; lift state up or use context if needed.
- **Async Operations**:
  - Use `use()` for suspended data fetching (e.g., `modelPromise`).
  - Handle errors gracefully (e.g., toast notifications).



### **9.3. Linting**
- Run `npm run lint` to enforce ESLint rules.
- Fix errors before committing (Git pre-commit hooks recommended).

---

## **10. Deployment**
### **10.1. Production Build**
1. Run `npm run build` to generate optimized files in `dist/`.
2. Deploy the `dist/` directory to:
   - **Static Hosting**: Netlify, Vercel, GitHub Pages.

---

## **11. API Documentation**
### **11.1. Mock API (`models.json`)**
- **Endpoint**: `/models.json` (served from `public/`).
- **Response Schema**:
  ```json
  [
    {
      "id": 1,
      "title": "ChatGPT",
      "description": "The world's most popular AI assistant...",
      "price": 20,
      "image": "https://.../logo.png",
      "status": "popular"
    }
  ]
  ```


### **11.2. Future API Integration**
- Replace `models.json` with a real API (e.g., REST or GraphQL).
- Example endpoint:
  ```javascript
  const getModel = async () => {
    const res = await fetch(process.env.VITE_API_URL);
    if (!res.ok) throw new Error("Failed to fetch models");
    return res.json();
  };
  ```
---


## **12. Troubleshooting**
| Issue                          | Solution                                                                 |
|--------------------------------|--------------------------------------------------------------------------|
| **404 on `/models.json`**      | Ensure `models.json` exists in `public/` and is served by the server.    |
| **Vite dev server not starting** | Check `node_modules` integrity; run `npm install --force`.               |
| **Cart state not updating**    | Verify `setCarts` is called correctly in child components.               |
| **Tailwind classes not applying** | Ensure `@tailwindcss/vite` is in `vite.config.js`.                      |
| **ESLint errors**              | Run `npm run lint` and fix reported issues.                              |

---

## **13. Roadmap**
| Feature               | Priority | Description                                                                 |
|-----------------------|----------|-----------------------------------------------------------------------------|
| **User Authentication** | High     | Add login/signup via Firebase/Auth0.                                        |
| **Payment Integration** | High     | Stripe/PayPal for subscription payments.                                     |
| **Admin Dashboard**   | Medium   | CRUD for managing AI models (backend API).                                 |
| **Dark Mode**         | Low      | Toggle theme via `data-theme` in `index.html`.                             |
| **Model Filtering**   | Low      | Search/filter models by price, status, or category.                        |

---

## **14. Contributing**
1. **Fork the Repository**:
   ```bash
   git clone https://github.com/your-username/ai-model-hub.git
   ```
2. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit Changes**:
   ```bash
   git commit -m "Add dark mode toggle"
   ```
4. **Push to Fork**:
   ```bash
   git push origin feature/your-feature
   ```
5. **Open a Pull Request** on the original repository.

---



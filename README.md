<div align="center">
  
# 🪵 Smart Flooring & Sanitary E-Commerce System 🛁

**Elevating Interior Spaces with Premium Materials and Seamless Installations.**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 Project Overview

The **Smart Flooring & Sanitary E-Commerce System** is a production-ready full-stack web application meticulously designed for interior design businesses, contractors, and retailers. Moving beyond generic e-commerce templates, this platform is deeply specialized in the flooring and sanitary domain. It facilitates the end-to-end user journey—from browsing premium oak flooring and luxury ceramic tiles to instantly calculating dynamic square-footage costs and booking professional installation services.

## ✨ Features

- **🛒 Product Purchasing:** Browse and buy premium flooring, carpets, and sanitary products.
- **📅 Installation Booking:** Securely schedule expert installation teams for a hassle-free experience.
- **🧮 Smart Cost Calculator:** Dynamically calculate exact material and installation costs based on room dimensions (Sq.Ft).
- **🛍️ Complete Shopping Experience:** Features a fully functional shopping cart, wishlist, and modern checkout flow.
- **🛡️ Secure Authentication:** Role-based access control (Admin/User) powered by JSON Web Tokens (JWT).
- **📊 Admin Dashboard:** Comprehensive suite for inventory management, order tracking, and booking oversight.
- **💳 Mock Payment Gateway:** Simulated transaction processing for frictionless checkout testing.
- **📄 Invoice Generation & Order Tracking:** Automatic invoice rendering and real-time order status updates.

## 💻 Tech Stack

### Frontend
- **React.js (Vite)**: Lightning-fast rendering and modern component-based architecture.
- **Tailwind CSS**: Utility-first CSS framework for a premium, responsive, and highly customized UI.
- **React Router DOM**: Seamless client-side routing for single-page application (SPA) performance.
- **Axios**: Promise-based HTTP client for robust API communication.

### Backend
- **Node.js & Express.js**: High-performance, event-driven server environment and minimalist web framework.
- **MongoDB & Mongoose**: Flexible NoSQL database with strict schema validation.
- **Bcrypt & JWT**: Industry-standard password hashing and stateless token-based authentication.

## 📂 Folder Structure

```text
smart-flooring-ecommerce/
│
├── client/                     # Frontend React Application (Vite)
│   ├── public/                 # Static assets (favicons, manifest)
│   ├── src/
│   │   ├── assets/             # Images, global stylesheets
│   │   ├── components/         # Reusable UI (Navbar, Footer, ProductCards)
│   │   ├── pages/              # Route-level components (Home, Shop, Calculator)
│   │   ├── context/            # React Context API (Auth, Cart state)
│   │   ├── utils/              # Helper functions (Formatting, API wrappers)
│   │   ├── App.jsx             # Root component & Routing definitions
│   │   └── main.jsx            # React DOM rendering entry point
│   ├── tailwind.config.js      # Custom theme and design system tokens
│   └── vite.config.js          # Bundler configuration
│
├── server/                     # Backend Node.js API
│   ├── config/                 # Database connection & runtime config (db.js)
│   ├── controllers/            # Route logic (auth, products, orders, bookings)
│   ├── middleware/             # Express middlewares (JWT verification, error handling)
│   ├── models/                 # Mongoose database schemas
│   ├── routes/                 # Express API endpoint definitions
│   ├── data/                   # Mock data and seeder payloads
│   ├── seeder.js               # Database population script
│   └── server.js               # Main Express application entry point
│
├── .gitignore                  # Git tracking exclusions
└── README.md                   # Project documentation
```

## 🚀 Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/smart-flooring-ecommerce.git
   cd smart-flooring-ecommerce
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Seed the Database (Optional but recommended):**
   ```bash
   cd ../server
   npm run data:import
   ```

5. **Run the Application:**
   Open two terminal windows:
   - Terminal 1 (Backend): `cd server && npm run dev`
   - Terminal 2 (Frontend): `cd client && npm run dev`

## ⚙️ Environment Variables Setup

Create a `.env` file in the **`server`** directory with the following configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
# Replace with your MongoDB Atlas URI for production
MONGO_URI=mongodb://localhost:27017/smart-flooring

# Security
# Generate a strong, random string for your JWT Secret
JWT_SECRET=your_super_secret_jwt_key_123!
```

Create a `.env` file in the **`client`** directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user & get JWT
- `GET /api/auth/profile` - Get logged-in user profile (Protected)

### Products
- `GET /api/products` - Retrieve all flooring/sanitary products
- `GET /api/products/:id` - Get details of a single product
- `POST /api/products` - Create a new product (Admin Only)
- `PUT /api/products/:id` - Update product details (Admin Only)

### Orders
- `POST /api/orders` - Submit a new order & process mock payment (Protected)
- `GET /api/orders/myorders` - Fetch all orders for the current user (Protected)
- `GET /api/orders` - Fetch all system orders (Admin Only)

### Bookings
- `POST /api/bookings` - Submit an installation booking request (Protected)
- `GET /api/bookings/mybookings` - View user's scheduled installations (Protected)
- `GET /api/bookings` - Manage all installation requests (Admin Only)

## 🌐 Deployment Instructions

### 1. Database (MongoDB Atlas)
- Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Whitelist your IP address (or `0.0.0.0/0` for production backend access).
- Copy the Connection URI and update the `MONGO_URI` in your backend deployment.

### 2. Backend Deployment (Render / Railway)
- Connect your GitHub repository to Render/Railway.
- Set the Root Directory to `server`.
- Build Command: `npm install`
- Start Command: `npm start`
- Add environment variables (`MONGO_URI`, `JWT_SECRET`, `PORT`).

### 3. Frontend Deployment (Vercel / Netlify)
- Connect your GitHub repository to Vercel.
- Set the Framework Preset to `Vite`.
- Root Directory: `client`
- Build Command: `npm run build`
- Install Command: `npm install`
- Add environment variable: `VITE_API_URL=https://your-backend-url.onrender.com/api`

## 📸 Screenshots

*(Replace placeholder URLs with actual screenshots of your application)*

| Home Page | Smart Calculator |
| :---: | :---: |
| <img src="https://via.placeholder.com/600x400.png?text=Home+Page+Hero+Section" alt="Home Page" /> | <img src="https://via.placeholder.com/600x400.png?text=Smart+Price+Calculator" alt="Calculator" /> |

| Shop/Product List | Admin Dashboard |
| :---: | :---: |
| <img src="https://via.placeholder.com/600x400.png?text=Flooring+Products+Grid" alt="Shop" /> | <img src="https://via.placeholder.com/600x400.png?text=Admin+Inventory+Management" alt="Admin" /> |

## 🧮 Smart Price Calculator Explanation

The core feature of this platform is the **Smart Cost Calculator**, built to resolve the pain point of estimating flooring jobs.
- **User Input:** Length & Width of the room (in feet).
- **Dynamic Calculation:** `Length × Width = Total Square Footage`.
- **Material Pricing:** `Sq.Ft × Product Price/Sq.Ft`.
- **Installation:** Users can toggle professional installation. If checked: `Sq.Ft × Installation Price/Sq.Ft`.
- **Taxation:** Automatically calculates and appends a standard 18% GST to the subtotal, yielding the final estimate.

## 🔐 Security Features
- **Password Hashing:** Passwords are never stored in plain text. They are securely hashed using `bcrypt.js` with a high salt round.
- **Route Protection:** API routes are guarded by custom Express middleware ensuring valid JWTs before allowing data access.
- **Role Validation:** Admin-specific mutations (like editing product inventory) perform strict role-checks against the decoded JWT payload.

## 🛡️ Authentication Details
Authentication relies on stateless JSON Web Tokens (JWT). Upon successful login via `/api/auth/login`, the server issues a signed token valid for 30 days. The React frontend stores this token locally (or in memory via Context) and attaches it as a `Bearer` token in the `Authorization` header of all subsequent Axios requests.

## 👑 Admin Dashboard Features
The Admin role unlocks a comprehensive management suite:
- **Product Management:** Full CRUD capabilities to adjust inventory stock, update pricing per sq.ft, and add new sanitary/flooring arrivals.
- **Order Tracking:** View all customer purchases, update payment statuses, and mark physical goods as "Delivered".
- **Booking Management:** Oversee installation schedules, confirm booking dates, and assign contractor availability.

## 📅 Booking System Features
Specifically designed for the interior space, the booking system allows users to seamlessly request installation dates without necessarily purchasing materials (e.g., if they already own the flooring). Users input their site address, total square footage, and desired date, which is then entered into a "Pending" queue for admin confirmation.

## 🔮 Future Enhancements
- [ ] Integration with Stripe / Razorpay for live payment processing.
- [ ] 3D Room Visualizer utilizing WebGL to preview flooring textures.
- [ ] Email notifications (via SendGrid/Nodemailer) for order confirmations and booking updates.
- [ ] Contractor portal for independent installers to claim booking jobs.

## 🤝 Contributing Guide
Contributions, issues, and feature requests are welcome! 
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📜 License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## 👨‍💻 Author
**Sarthak Jain**
- GitHub: [@sarthakjain](https://github.com/sarthakjain)
- LinkedIn: [Sarthak Jain](https://linkedin.com/in/sarthakjain)

---
<div align="center">
  <i>Built with ❤️ for modern interior and flooring businesses.</i>
</div>

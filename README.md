# Handloom Fashion Platform

A professional full-stack web application for displaying and selling handloom fashion products to global buyers.

## Features

### Authentication System
- JWT-based authentication
- Role-based signup (Admin, Artisan, Buyer)
- Strong password validation
- Protected routes

### User Roles

#### Admin Dashboard
- Manage users
- Manage products
- View all orders
- Platform analytics

#### Artisan Dashboard
- Add/Edit/Delete products
- Manage inventory
- View orders
- Track sales

#### Buyer Dashboard
- Browse products
- Add to cart
- Place orders
- View order history

### Pages
- Home (Hero section with handloom theme)
- Products (Filter & Search)
- Product Details
- Cart
- Checkout
- About Us
- Contact
- Role-based Dashboards

## Tech Stack

- **Frontend**: React.js (Functional Components & Hooks)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **State Management**: Context API
- **Authentication**: JWT (localStorage)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Demo Credentials

### Admin
- Email: admin@handloom.com
- Password: Any password

### Artisan
- Email: artisan@handloom.com
- Password: Any password

### Buyer
- Email: buyer@handloom.com
- Password: Any password

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── Auth/            # Authentication pages
│   ├── Admin/           # Admin dashboard
│   ├── Artisan/         # Artisan dashboard
│   ├── Buyer/           # Buyer pages
│   └── Public/          # Public pages
├── context/             # Context API
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── services/            # API services
│   └── api.js
├── routes/              # Route protection
│   └── ProtectedRoute.jsx
├── utils/               # Utility functions
│   └── validation.js
└── App.jsx              # Main app component
```

## Password Requirements

- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character

## Features Implemented

✅ JWT Authentication
✅ Role-based Access Control
✅ Protected Routes
✅ Shopping Cart
✅ Product Management
✅ Order Management
✅ Responsive Design
✅ Form Validation
✅ Search & Filter
✅ Modern UI with Tailwind CSS

## Backend Integration

The frontend is ready for backend API integration. Update the `API_BASE_URL` in `src/services/api.js` to connect to your backend server.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

MIT License - Feel free to use this project for your portfolio or learning purposes.

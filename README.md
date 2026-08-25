# E-shopping

A full-stack clothing e-commerce application with a customer storefront, admin dashboard, and Express/MongoDB backend.

## Project Structure

- `Frontent/` - Customer-facing React and Vite storefront
- `admin/` - React and Vite admin dashboard
- `backend/` - Express API, MongoDB models, authentication, products, cart, and orders

## Requirements

- Node.js 18 or newer
- MongoDB connection
- Cloudinary account for product images

## Configuration

Create `backend/.env`:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Create `Frontent/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Create `admin/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Do not commit `.env` files or real credentials.

## Install Dependencies

Run each command from the indicated folder:

```powershell
cd backend
npm install

cd ..\Frontent
npm install

cd ..\admin
npm install
```

## Run the Application

Start the backend:

```powershell
cd backend
npm run server
```

Start the customer storefront in another terminal:

```powershell
cd Frontent
npm run dev
```

Start the admin dashboard in another terminal:

```powershell
cd admin
npm run dev
```

The backend runs on `http://localhost:4000`. Vite displays the frontend and admin URLs in the terminal.

## Main Features

- Customer registration and login
- Product browsing, searching, filtering, and sorting
- Shopping cart management
- Cash-on-delivery order placement
- Customer order history
- Admin product management
- Admin order listing and status updates
- Cloudinary image uploads

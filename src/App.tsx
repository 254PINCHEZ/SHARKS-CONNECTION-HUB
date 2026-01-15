import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './pages/Login';
import Products from './pages/products';
import Networking from './pages/Networking';
// import Computer-Parts from './pages/Computer- Parts';
// import Register from './pages/Register';
// import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
// import UserDashboard from './pages/userPages/UserDashboard';
// import UserOrders from './pages/userPages/UserOrders';
// import UserProfile from './pages/userPages/UserProfile';
// import AdminDashboard from './pages/admin/AdminDashboard';
// import AllOrders from './pages/admin/AllOrders';
// import AllProducts from './pages/admin/AllProducts';
// import AllCustomers from './pages/admin/AllCustomers';
// import Inventory from './pages/admin/Inventory';
// import CategoryProducts from './pages/CategoryProducts';

function App() {
  const router = createBrowserRouter([
    // Public routes
    {
      path: '/',
      element: <Home />
    },
    
    {
      path: '/products',
      element: <Products />
    },
    // {
    //   path: '/products/:id',
    //   element: <ProductDetails />
    // },
    // {
    //   path: '/category/:category',
    //   element: <CategoryProducts />
    // },
    {
      path: '/Networking',
      element: <Networking />
    },
    // {
    //   path: '/Computer Parts',
    //   element: <Computer-Parts />
    // },
    // {
    //   path: '/cables',
    //   element: <CategoryProducts />
    // },
    // {
    //   path: '/tools',
    //   element: <CategoryProducts />
    // },
    {
      path: '/about',
      element: <About />
    },
    // {
    //   path: '/contact',
    //   element: <Contact />
    // },
    // {
    //   path: '/register',
    //   element: <Register />
    // },
    // {
    //   path: '/login',
    //   element: <Login />
    // },
    // {
    //   path: '/cart',
    //   element: <Cart />
    // },
    // {
    //   path: '/checkout',
    //   element: <Checkout />
    // },
    
    // // User Dashboard routes (for customers)
    // {
    //   path: '/dashboard',
    //   element: <UserDashboard />
    // },
    // {
    //   path: '/dashboard/my-orders',
    //   element: <UserOrders />
    // },
    // {
    //   path: '/dashboard/profile',
    //   element: <UserProfile />
    // },
    // {
    //   path: '/dashboard/wishlist',
    //   element: <UserOrders /> // Temporary - will create Wishlist page later
    // },
    
    // // Admin Dashboard routes (for shop management)
    // {
    //   path: '/admin/dashboard',
    //   element: <AdminDashboard />
    // },
    // {
    //   path: '/admin/orders',
    //   element: <AllOrders />
    // },
    // {
    //   path: '/admin/products',
    //   element: <AllProducts />
    // },
    // {
    //   path: '/admin/customers',
    //   element: <AllCustomers />
    // },
    // {
    //   path: '/admin/inventory',
    //   element: <Inventory />
    // },
    // {
    //   path: '/admin/suppliers',
    //   element: <Inventory /> // Temporary - will create Suppliers page later
    // },
    // {
    //   path: '/admin/reports',
    //   element: <AdminDashboard /> // Temporary - will create Reports page later
    // }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
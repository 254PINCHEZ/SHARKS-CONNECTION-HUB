import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
// import Login from './pages/Login';
import ComputerCables from './pages/computerCables';
import Accessories from './pages/accessories';
import ElectricalElectronics from './pages/ElectricalElectronics';
import  CCTVCameras from './pages/CCTVCameras';
// import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';


function App() {
  const router = createBrowserRouter([
    // Public routes
    {
      path: '/',
      element: <Home />
    },
    
    {
      path: '/Accessories',
      element: <Accessories />
    },
    {
      path: '/CCTVCameras',
      element: <CCTVCameras />
    },
    {
      path: '/ElectricalElectronics',
      element: <ElectricalElectronics />
    },
    {
      path: '/computerCables',
      element: <ComputerCables />
    },
    // {
    //   path: '/Computer Parts',
    //   element: <Computer-Parts />
    // },
    
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/ContactPage',
      element: <ContactPage />
    },
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
    
    
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
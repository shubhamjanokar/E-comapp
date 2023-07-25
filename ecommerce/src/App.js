
import './App.css';
import LoginPage from './pages/LoginPage';
import Signup from './features/auth/components/Signup';
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Cart from './features/cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
]);


function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;

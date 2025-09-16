import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SubscribeCopa from "./pages/SubscripeCopa"
import Login from "./pages/Login"
import RegisterTeams from "./pages/RegisterTeams"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/subscribe",
    element: <SubscribeCopa />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterTeams />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Ticket from './components/Ticket';
import Create from './components/Create';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/tickets/:id",
          element: <Ticket />
        },
        {
          path: "/create",
          element: <Create />
        }

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
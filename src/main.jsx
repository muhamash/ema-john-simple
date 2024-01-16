import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import OrderLoader from './components/Shop/OrderLoader';
import Home from "./components/Home/Home";
import "./index.css"


const router = createBrowserRouter( [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'order',
        element: <Order />,
        loader: OrderLoader,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route />
    </RouterProvider>
  </React.StrictMode>
);
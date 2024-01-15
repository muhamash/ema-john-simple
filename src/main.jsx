// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
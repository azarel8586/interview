import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Pages
import App from './App';
import Home from './Home';
import PublicHolidays from './common/PublicHolidays';
import Accordion from './common/Accordion';
import ToDo from './common/ToDo';
import Pokemon from './common/Pokemon';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/day01',
        element: <PublicHolidays/>
      },
      {
        path: '/day02',
        element: <Accordion/>
      },
      {
        path: '/day03',
        element: <ToDo/>
      },
      {
        path: '/day04',
        element: <Pokemon/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);


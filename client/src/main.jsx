import React from 'react'
import ReactDOM from 'react-dom/client'
import MainMenu from './pages/MainMenu';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.scss';
import Game from './pages/Game';
import Rules from './pages/Rules';

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainMenu />,
  },
  {
    path:"/game/:id",
    element: <Game />,
  },
  {
    path:"/rules",
    element: <Rules />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

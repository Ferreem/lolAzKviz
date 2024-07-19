import React from 'react'
import ReactDOM from 'react-dom/client'
import MainMenu from './pages/MainMenu';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.scss';
import Game from './pages/Game';

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainMenu />,
  },
  {
    path:"/game",
    element: <Game />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

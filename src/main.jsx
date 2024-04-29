import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/acceuil.jsx';
import Login from './pages/login.jsx';
import Layout from './components/layout.jsx';
import RegisterRestaurantForm from './pages/RegisterRestaurantForm.jsx';
import Contact from './pages/contact.jsx';
import Register from './pages/register.jsx';
import AboutPage from './pages/about.jsx';
import RestaurantAllList from './pages/RestaurantsList.jsx';
import './index.css'



 const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path:"/",
          element:<HomePage/>,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/registerform",
          element:<RegisterRestaurantForm/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/listerestaurant",
          element:<RestaurantAllList/>
        },
      
      ]
    }
  ]
 )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Importer le fichier de styles Tailwind CSS ici


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/




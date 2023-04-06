import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Book from './Components/Book/Book';
import Contact from './Components/Contact/Contact';
import SingleBook from './Components/SingleBook/SingleBook';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children:[
      { 
        path:'/',
        element:<Home></Home>
       },
       {
        path:'About',
        element:<About></About>
       },
       {
        path:'Books',
        element:<Book></Book>
       },
       {
        path:'Contact',
        element:<Contact></Contact>
       },
       {
        path:'book/:id',
        element:<SingleBook></SingleBook>,
        loader:({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
       },
       {
        path: 'loader',
        element: <LoadingSpinner></LoadingSpinner>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)

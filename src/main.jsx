import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import Root from './routes/Root';
import ErrorPage from './Error-page';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import Movie, {loader as movieLoader} from './routes/components/Movie';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,

      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/signup",
            element: <SignUp/>
        },
        {
            path: "/movie/:movieId",
            element: <Movie/>,
            loader: movieLoader
        }
      ]
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home";
import {Provider} from "react-redux";
import myntraStore from './store/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/", element: <Home/>, /*loader:postLoader,*/
      },
      {
        path:"/bag",
        element:<Bag/>,
        /*action:createPostAction,*/

      }

    ],
  },
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider  router={router}/>
    </Provider>
  </StrictMode>,
)


import { createBrowserRouter } from 'react-router-dom'
import RootLayouts from '../layouts/RootLayouts';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Adventure from '../components/Adventure';
import Registration from '../pages/Registration';


const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>,
          children:[
            {
              path:'/',
              element:<Adventure></Adventure>,
              loader: ()=>fetch('/data.json'),
            }
          ]
        },
        
        {
          path:"/auth/login",
          element:<Login/>,
        },
        {
          path:"/auth/registration",
          element:<Registration/>,
        },
        
      ]
    },
  ]);
  

export default router

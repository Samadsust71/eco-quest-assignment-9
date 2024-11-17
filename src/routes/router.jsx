
import { createBrowserRouter } from 'react-router-dom'
import RootLayouts from '../layouts/RootLayouts';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts/>,
      errorElement:<ErrorPage/>
    },
  ]);
  

export default router

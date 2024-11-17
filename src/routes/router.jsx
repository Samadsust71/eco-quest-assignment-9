
import { createBrowserRouter } from 'react-router-dom'
import RootLayouts from '../layouts/RootLayouts';

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts/>
    },
  ]);
  

export default router

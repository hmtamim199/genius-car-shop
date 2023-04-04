
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Main from '../../Layout/Main';
import Login from '../../Pages/Login/Login';


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

export default Router;

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './LogInPage/Login'
import Dashboard from './Dashboard/Dashboard'

function App() {
  const router = createBrowserRouter([
    
    {path:'/',
    element: <Login></Login>
    },
    {path:'/dashboard',
    element: <Dashboard></Dashboard>
    }

   ])

  return (
  <div className="">
     <RouterProvider router={router}></RouterProvider>
  </div>
  )
}

export default App

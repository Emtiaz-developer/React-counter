import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Navbar from "./Componentes/menubar/Index"
import RootLayout from "./RootLayouts/RootLayout"
import Home from "./pages/Home"
import GetValues from "./pages/GetValues"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/getvalues" element={<GetValues/>}/>
        </Route>
      </Route>
    )
  )


  return (
  <RouterProvider router={router}/>
  )
}

export default App

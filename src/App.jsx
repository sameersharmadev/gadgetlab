import {Routes,Route,Link,NavLink} from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Components/Home"
import Gaming from "./Components/Gaming"
import Creators from "./Components/Creators"
import {laptops} from "./Laptops.js"
import {createContext} from 'react'
const LaptopContext=createContext()
function App() {
  return (
    <>
    <LaptopContext.Provider value={laptops}>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="gaming" element={<Gaming/>}/>
          <Route path="creator" element={<Creators/>}/>
        </Route>
      </Routes>
      </LaptopContext.Provider>
    </>
  )
}
export {LaptopContext}
export default App

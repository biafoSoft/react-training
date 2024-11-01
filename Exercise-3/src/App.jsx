
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  return(
    
      <Layout>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/carts' element={<Cart/>}/>
          </Routes>
      </Layout>
    
  )
}

export default App

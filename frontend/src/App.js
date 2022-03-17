import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import themeOptions from './assets/theme'

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={themeOptions}>
        <Header />
        <main className='container mx-auto border-2 border-solid'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App

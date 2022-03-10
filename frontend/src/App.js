import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { ThemeProvider } from '@mui/material'
import themeOptions from "./assets/theme";

const App = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <Router>
        <Header />
        <main className='container mx-auto border-2 border-solid'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto border-2 border-solid'>
        <HomeScreen />

      </main>
      <Footer />
    </>
  )
}

export default App

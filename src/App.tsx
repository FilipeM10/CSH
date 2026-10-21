import Header from './_shared/HeaderComponent/Header'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Footer from './_shared/footerComponent/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage id="home" />
        <div className="mainScope">
          <AboutMe id="about" />
          <Services id="services" />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
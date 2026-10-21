import Header from './_shared/HeaderComponent/Header.tsx'
import HomePage from './components/HomePage.tsx'
import AboutMe from './components/AboutMe.tsx'
import Services from './components/Services.tsx'
import Footer from './_shared/footerComponent/Footer.tsx'

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
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Header from './_shared/Header'
import Services from './components/Services'

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
    </>
  )
}

export default App
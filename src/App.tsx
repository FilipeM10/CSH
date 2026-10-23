import Footer from './_shared/footerComponent/Footer.tsx'
import Header from './_shared/HeaderComponent/Header.tsx'
import HomePage from './components/HomePage.tsx'
import Services from './components/Services.tsx'
import Contatos from './components/Contacts.tsx'
import AboutMe from './components/AboutMe.tsx'
import Process from './components/Process.tsx'
import Reveal from './_shared/Reveal.tsx'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage id="home" />
        <div className="mainScope">
          <Reveal variant="zoom"><AboutMe id="about" /></Reveal>
          <Reveal variant="left"><Services id="services" /></Reveal>
          <Reveal variant="right"><Process id="process" /></Reveal>
          <Reveal variant="left"><Contatos id="contacts" /></Reveal>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
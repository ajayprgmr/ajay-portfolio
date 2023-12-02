import Topbar from './assets/components/topbar/topbar.jsx'
import Home from './assets/components/home/home.jsx'
import Articles from './assets/components/articles/aticles.jsx'
import Works from './assets/components/works/works.jsx'
import AboutMe from './assets/components/about/about.jsx'
import ContactMe from './assets/components/contactme/contactme.jsx'
import './app.scss'
function App() {
  return (
    <div className='app'>
      <Topbar />
      <Home />
      <Articles />
      <Works />
      <AboutMe />
      <ContactMe />
    </div>
  )
}

export default App

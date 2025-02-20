import Navbar from '../Components/Navbar'
import Home from './Home'
import "../../src/index.css"
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Utama = () => {
  return (
    <>
      <div className=" bgbg flex flex-col">
        <div className=''>
          <Navbar/>
        </div>
        <div className=" mb-10">
          <Home/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Skills/>
        </div>
        <div>
          <Projects/>
        </div>
        <div>
          <Contact/>
        </div>
      </div>
    </>
  )
}

export default Utama
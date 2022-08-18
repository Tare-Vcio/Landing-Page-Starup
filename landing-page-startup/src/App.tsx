import './App.css'
import shape from "./assets/Header/shape.svg"
import Header from './components/Header'
import Banner from "./components/Banner"
import BuildUp from "./components/Build-up"
import Solution from "./components/Solution"
import Feedback from "./components/Feedback"
import Subscriber from "./components/Subcriber"
import Footer from "./components/Footer"
function App() {

  return (
    <div className='w-full bg-[#151719] relative pb-[63px]'>
      <img className="absolute z-0 top-0 right-0" src={shape} alt="Shape" />
      <Header />
      <Banner />
      <BuildUp />
      <Solution />
      <Feedback />
      <Subscriber />
      <Footer />
    </div>
  )
}

export default App

import './App.css'
import Header from './Components/Header'
import Section from './Components/Section'
import Footer from './Components/Footer'
import Nav from './Components/nav'
import {BrowserRouter} from 'react-router-dom' //importing BrowserRouter , named import as it is inside {}


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Nav/>
      <Section/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

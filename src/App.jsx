import { ChakraProvider } from '@chakra-ui/react'
// import { useEffect, useState } from "react"
import './App.css'
import Body from './components/body/body/Body'
import Footer from './components/footer/Footer'
import ContactSection from './components/body/contactSection/ContactSection'
import Header from './components/Header/Header'

function App() {
  // const [isScrolled, setIsScrolled] = useState(false)

  // useEffect(()=>{
  //   const handleScroll = ()=>{
  //   const contactScroll = document.getElementById('contactSection').getBoundingClientRect().top;
  //   contactScroll<window.innerHeight ? setIsScrolled(true):
  //   setIsScrolled(false);
  //   }
  //   window.addEventListener('scroll', handleScroll)
  
  //   return ()=>{
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  
  // },[])
 
  return (
    <>
      <ChakraProvider/>
      <Header />
      
      <div>
      <Body />
      </div>
      
      
      <Footer  />
      <ChakraProvider/>
     </>
  )
}

export default App

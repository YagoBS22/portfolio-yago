import { Stack } from '@mui/material'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css'
import React, { useRef } from "react";

function App() {
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Stack
    className='app-container'
    >
      <Header scrollToSection={scrollToSection} projectsRef={projectsRef} experiencesRef={experiencesRef} contactRef={contactRef}/>
      <Body projectsRef={projectsRef} experiencesRef={experiencesRef} contactRef={contactRef}/>
      <Footer/>
    </Stack>
    )
}

export default App

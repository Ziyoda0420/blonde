import React from 'react'
import Header from './components/Header'
import Section1 from './components/Main/Section1'
import Section2 from './components/Main/Section2'
import Section3 from './components/Main/Section3'
import Section4 from './components/Main/Section4'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

      </main>
      <Footer />
    </div>
  )
}

export default App
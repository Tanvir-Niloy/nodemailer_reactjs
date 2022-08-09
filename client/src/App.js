import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Sidebar/>
      <About />
      <Contact/>
    </div>
  )
}

export default App
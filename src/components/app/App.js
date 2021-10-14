import './App.css'
import Header from '../Header/Header.js'
import AboutTheSite from '../AboutTheSite/AboutTheSite.js'
import Statistics from '../Statistics/Statistics.js'
import Boost from '../Boost/Boost.js'
import Footer from '../Footer/Footer.js'
import { useEffect, useState } from 'react'

function App() {
  const [textInput, setTextInput] = useState('')
  const [links, setLinks] = useState([])
  const [errorInput, setErrorInput] = useState(false)
  const [dirty, setDirty] = useState(false)

  console.log(links)

  useEffect(() => {
    const re = /^(ftp|http|https):\/\/[^ "]+$/
    if (re.test(textInput)) {
      setErrorInput(false)
    } else {
      setErrorInput(true)
    }
  }, [textInput])

  function addItemLink(e) {
    e.preventDefault()
    const re = /^(ftp|http|https):\/\/[^ "]+$/
    if (re.test(textInput)) {
      setLinks(oldItems => [...oldItems, textInput])
      setDirty(false)
      setTextInput('')
    }
  }

  return (
    <div className="App">
      <Header />
      <AboutTheSite />
      <Statistics
        links={links}
        addItemLink={addItemLink}
        textInput={textInput}
        setTextInput={setTextInput}
        errorInput={errorInput}
        dirty={dirty}
        setDirty={setDirty}
      />
      <Boost />
      <Footer />
    </div>
  )
}

export default App

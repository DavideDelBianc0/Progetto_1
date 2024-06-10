import './App.css'
import Footer from './Footer'
import Body from './Body'
import { useState } from 'react'
import Header from './Header'
function App() {

  const [risposta,SetRisposta]=useState("")

    function sendProp(ext:string):void
    {
       SetRisposta(ext)
    }

  return (
    <>
      <Header nome='Gianpaolo' immagineURL='https://pierpippo.png' parentela='cogino'></Header>
      <div id="contenitoreFooter">
        <Footer onSentFunction={sendProp}></Footer>
      </div>
      
      <div id="contenitoreBody">
        <Body risposta={risposta}></Body>
      </div>
    </>
  )
}




export default App

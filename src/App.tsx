//import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Body from './Body'
import { useState } from 'react'
function App() {

  const [risposta,SetRisposta]=useState("")

  function sendProp(ext:string):void
{
  SetRisposta(ext)
}

  return (
    <>
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

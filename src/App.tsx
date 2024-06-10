import './App.css'
import Footer from './Footer'
import Body from './Body'
import React, { useState } from 'react'
import Header from './Header'



function App() {

  const [risposta,SetRisposta]=useState("")
  const [arr,addBodyMessage]=useState<Array<React.JSX.Element>>([])
  const arrVisualizzare:React.JSX.Element[] = arr
    function sendProp(ext:string):void
    {
       SetRisposta(ext)
       generaMessaggio(risposta , false)
    }
    function generaMessaggio(ext:string, sender:boolean)
    {
      const bd = <Body textToAdd={ext} senderMess={sender}></Body>
      addBodyMessage([...arr, bd])
      arrVisualizzare.push(bd)
    }

  return (
    <>
      <p id="contenitore">
        <Header nome='Gianpaolo' immagineURL='https://pierpippo.png' parentela='cogino' ></Header>

        <div id="contenitoreBody">
          {
            arrVisualizzare
          }
        </div>

        <div id="contenitoreFooter">
          <Footer onSentFunction={sendProp}></Footer>
        </div>
      </p>
    </>
  )
}




export default App

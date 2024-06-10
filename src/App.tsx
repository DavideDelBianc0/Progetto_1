import './App.css'
import Footer from './Footer'
import Body from './Body'
import React, { useState } from 'react'
import Header from './Header'
import { Messaggio } from './types'



function App() {

  const [arr,addBodyMessage]=useState<Array<Messaggio>>([])
  // const arrVisualizzare:React.JSX.Element[] = arr
    function sendProp(ext:string):void
    {
       addBodyMessage([...arr, {textToAdd:ext , senderMess:false}])
    }
    //function generaMessaggio(messaggio:Messaggio) {return (<Body textToAdd={messaggio.textToAdd} senderMess={messaggio.senderMess}></Body>)}

  return (
    <>
      <p id="contenitore">
        <Header nome='Gianpaolo' immagineURL='https://pierpippo.png' parentela='cogino' ></Header>

        <div id="contenitoreBody">
          {
            //arr.map(generaMessaggio)
            arr.map((messaggio)=>{return (<Body textToAdd={messaggio.textToAdd} senderMess={messaggio.senderMess}></Body>)})
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

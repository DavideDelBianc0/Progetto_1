//import { useState } from 'react'
import './App.css'
import Footer from './Footer'
function App() {

  return (
    <>
      <div id="contenitoreFooter">
        <Footer onSentFunction={sendProp}></Footer>
      </div>
      
    </>
  )
}
function sendProp(ext:string):void
{
   console.log(ext)
}

export default App

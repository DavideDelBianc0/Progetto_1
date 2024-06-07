import './Footer.css'
import { useState } from 'react'

function Footer(){
    const [scritta, setScritta] = useState("")
    console.log(scritta)
    return(
        <>
            <input type="text" id="barraInput" value={scritta} onChange={(e)=>setScritta(e.target.value)}></input>
            <input type='button' id="btnInvia" onClick={()=> {
                {
                    setScritta("")
                    //const momentanea:string = mess()
                    //setScritta(momentanea)
                }
            } }></input>
            
        </>

    );
}
//function mess():string{
//    let x = document.getElementById("barraInput")?.value
//    return (x)
//}
export default Footer
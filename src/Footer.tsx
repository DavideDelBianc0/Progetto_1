import './Footer.css'
import { useState } from 'react'
type FooterProps =  { onSentFunction:(parametro: string) => void} 
function Footer( {onSentFunction}:FooterProps ) {
    const [scritta, setScritta] = useState("")
    return (
        <>
            <input type="text" id="barraInput" value={scritta} onChange={(e) => setScritta(e.target.value)}></input>
            <input type='button' id="btnInvia" onClick={() => {
                {
                    onSentFunction(scritta)
                    setScritta("")
                    //const momentanea:string = mess()
                    //setScritta(momentanea)
                }
            }}></input>

        </>

    );


}

//function mess():string{
//    let x = document.getElementById("barraInput")?.value
//    return (x)
//}
export default Footer
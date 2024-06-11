import './Footer.css'
import { useState } from 'react'
type FooterProps =  { onSentFunction:(parametro: string) => void} 
function Footer( {onSentFunction}:FooterProps ) {
    const [scritta, setScritta] = useState("")
    return (
        <>
            <input type="text" className="barraInput" value={scritta} onChange={(e) => setScritta(e.target.value)}></input>
            <input type='button' className="btnInvia" onClick={() => {
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
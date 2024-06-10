import './Body.css'
import { Messaggio } from './types'
      

function Body(mess:Messaggio) {
    function controllaTipo():string             //funzione che distingue i vari tipi di Id in caso di specifica modifica
    {
        let tipo: string =""
        if(mess.senderMess)
            tipo = "idUtente"
        else 
            tipo = "idComput"
        return tipo
    }

    return (

        <>
            <p id={controllaTipo()}>
                {mess.textToAdd}
            </p>
            
        </>
    );
}

export default Body
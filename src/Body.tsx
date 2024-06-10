type messaggio = {textToAdd: string; senderMess: boolean}       //classe che inserisce il messaggio (textToAdd) con le caratteristiche visuali che dipendono dal mittente I/O o no

function Body(mess:messaggio) {
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
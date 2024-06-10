import { useState } from 'react'
type BodyProps = {risposta:string}
function Body(Par:BodyProps) {
    
return (

    <>
        <textarea id="casellaRisposta" value={Par.risposta}> </textarea>
        
    </>
);
}

export default Body
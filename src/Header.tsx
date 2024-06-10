import './Header.css'
import Freccia from '../images/arrow-left-3099.png'
type infoLogPage = { nome: string; immagineURL:string; parentela:string}
function Header(datiLog:infoLogPage){
    return(
        <>
            <div id="contenitoreHeader">
                <img src={Freccia} id="imgFreccia"></img>
                <img src={datiLog.immagineURL} id="imgLog"></img>
                <div>{datiLog.nome}</div>
                <span>{datiLog.parentela}</span>
            </div>
        </>
    );
}

export default Header
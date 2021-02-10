

export const WebExpertApp = ({nombre}) => {
    return (
        <>
        <h1>Estampados Chalón</h1>
        <div>
            Bienvenido a la web {nombre}
        </div> 

        <nav className="listaPrincipal">
            <ul >
                <li>Quienes somos</li>
                <li>Misión</li>
                <li>Visión</li>
                <li>Contactanos</li> 
                
            </ul>
        </nav> 

<div className="elDiv">
        <nav className="listaAnimes ">
        <header className="nombreLista">Estampes disponibles</header>
        	
        	
                <li className="objetos"><a>Inuyasha</a></li>
                <li className="objetos"><a>Spiderman</a></li>
                <li className="objetos"><a >Pokemón</a></li>
                <li className="objetos"><a >Dragon Ball</a></li>
                <li className="objetos"><a >Las chicas superpoderosas</a></li>
                
        	
        	
        </nav>

        <div className="lasFotos">
            <img className="fotoSpiderman" src="https://images.evisos.com.pe/2011/11/01/polos-diseno-spiderman-hombre-arana_7036eeb8_3.jpg"/>
            <img className="fotoSpiderman" src="https://http2.mlstatic.com/D_NQ_NP_768207-MPE32060074362_092019-W.jpg"/>
            
        </div>
</div>        

        </>
    )
}

import Network from "./Resources/Network.svg"
import CurriculoFabrício from "./Resources/CurriculoFabricio.pdf";



function Objective() {
    return(
        <div>
            <div>
                <div>
                    <h1>Meu nome é Fabrício</h1>
                    <p>Sou desenvolvedor front end</p>
                </div>
                <div>
                  <a href={CurriculoFabrício} download="Curriculo Fabricio Lopes">Currículo! </a>
                </div>
                <div>
                    <img src={Network} />
                </div>
            </div>
                <a href="#Sobre">Role para baixo</a>
        </div>
    )
}

export default Objective;
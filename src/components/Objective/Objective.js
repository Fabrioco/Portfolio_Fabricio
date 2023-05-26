import Network from "./Resources/Network.svg"
import CurriculoFabrício from "./Resources/CurriculoFabricio.pdf";

import About from '../Contacts/Contact'

import './index.css';

function Objective() {
    return(
        <div id="AllObjective">
            <div id="panel">
                <div id="my-person">
                    <p>Meu nome é <h2 id="my-name">Fabrício</h2></p>
                    <p>Sou desenvolvedor front end</p>
                    <a id="link" href={CurriculoFabrício} download="Curriculo Fabricio Lopes">Currículo</a>
                </div>
                <div>
                    <img id="svg" src={Network} />
                </div>
            </div>
                <a id="down" href="#about">Role para baixo</a>
        </div>
    )
}

export default Objective;
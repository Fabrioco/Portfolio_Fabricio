import Network from "./components/Resources/Network.svg"
import CurriculoFabrício from './components/Resources/CurriculoFabricio.pdf';
import picture from "./components/Resources/picture-me.jpeg"

import './index.css'

function Home() {

    return(
        <div>
            <div id="AllProject">
            <div id="header">
                <h1 id="title">Portfolio</h1>
                    <nav id="navegation">
                        <ol>
                            <li id='home'><a href="#AllObjective">Ínicio</a></li>
                            <li id='about'><a href="#AllAbout">Sobre</a></li>
                            <li id='project'><a href="#project">Projetos</a></li>
                            <li id='contact'><a href="#contact">Contato</a></li>
                        </ol>
                    </nav>
            </div>
        </div>
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
        <div id="about">
            <div id="AllAbout">
                <h2 id="TitleAbout">Saiba mais sobre mim</h2>
                <p id="TextMe">
                    loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
            </div>
            <div>
                <img id='PicMe' src={picture} />
            </div>
        </div>
        <div id="project">
            <div>
                <div>
                    <h2>Projetos</h2>
                </div>
                {/* https://fabrioco.github.io/Projeto-Android/ projeto android
                    https://fabrioco.github.io/Projeto-Cordel/ projeto cordel
                    https://primeflix-fabricio.netlify.app prime flix*/}
            </div>
        </div>
        <div id="contact">
            <div>
                <h3>Contatos</h3>
                <h3>Redes Sociais</h3>
            </div>
            <div>
                <p>fl5513108@gmail.com</p>
                <p>11 96016-8159</p>
            </div>
            <div>
                <a>LinkedIn</a>
                <a>Facebook</a>
            </div>
        </div>
        <div>
            <p>&copy; Fabrício Oliveira Lopes</p>
        </div>
        </div>
    )
}

export default Home;
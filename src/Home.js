import Network from "./components/Resources/Network.svg"
import CurriculoFabrício from './components/Resources/CurriculoFabricio.pdf';
import picture from "./components/Resources/picture-me.jpeg"
import HTML from './components/Resources/html.svg';
import CSS from './components/Resources/css.svg';
import JS from './components/Resources/JS.svg';
import RJS from './components/Resources/ReactJS.svg';
import locked from './components/Resources/lock.svg'

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
                <a id="down" href="#AllAbout">Role para baixo</a>
                <a id="BackToTop" href="#header">&uarr;</a>
        </div>
        <div id="content-about">
            <div id="AllAbout">
                <h2 id="TitleAbout">Saiba mais sobre mim</h2>
                <p id="TextMe">
                Olá, tenho 20 anos, com um pouco de conhecimento em Inglês e aprendendo Japonês. Com conhecimentos básicos em HTML5, CSS3, JavaScript e ReactJS.
                  Ainda sem experiência, pois estou estudando para poder conseguir um emprego na área da programação. De começo como Desenvolvedor Front-End Junior.</p>
            </div>
            <div>
                <img id='PicMe' src={picture} />
            </div>
            <div id="disciplines">
                <img className="courses" src={HTML} />
                <img className="courses" src={CSS} />
                <img className="courses" src={JS} />
                <img className="courses" src={RJS} />
                <img className="courses" src={locked} />
                <img className="courses" src={locked} />
                <img className="courses" src={locked} />
                <img className="courses" src={locked} />
                <img className="courses" src={locked} />
            </div>
        </div>
        <div id="project">
            <div id="project">
                <div>
                    <h2>Projetos</h2>
                </div>
                {/* https://fabrioco.github.io/Projeto-Android/ projeto android
                    https://fabrioco.github.io/Projeto-Cordel/ projeto cordel
                    https://primeflix-fabricio.netlify.app prime flix*/}
            </div>
        </div>
        <div id="contact">
            <div id="contact">
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
import Network from "./components/Resources/Obejective/Network.svg"
import CurriculoFabrício from './components/Resources/Obejective/CurriculoFabricio.pdf';

import picture from "./components/Resources/About/picture-me.jpeg"

import HTML from './components/Resources/About/html.svg';
import CSS from './components/Resources/About/css.svg';
import JS from './components/Resources/About/JS.svg';
import RJS from './components/Resources/About/ReactJS.svg';
import locked from './components/Resources/About/lock.svg';

import android from './components/Resources/Projects/android.svg';
import cordel from './components/Resources/Projects/cordel.svg';
import primeflix from './components/Resources/Projects/primeflix.svg';
import whatever from './components/Resources/Projects/whatever.svg'

import facebook from './components/Resources/Contacts/facebooklink.svg';
import linkedin from './components/Resources/Contacts/linkedinlink.svg';

import './index.css';
import './indexmobile.css';

function Home() {

    document.title = 'Portfolio'

    return(
        <div id='Principal'>
            <div id="AllProject">
            <div id="header">
                <h1 id="title">Portfolio</h1>
                    <nav id="navegation">
                        <ol>
                            <li id='home'><a href="#AllObjective">Ínicio</a></li>
                            <li id='about'><a href="#AllAbout">Sobre</a></li>
                            <li id='project'><a href="#AllProjects">Projetos</a></li>
                            <li id='contact'><a href="#AllContact">Contato</a></li>
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
        <div>
            <div id="AllProjects">
                <div>
                    <h2 id="TitleProjects">Meus Projetos</h2>
                </div>
                <div id="projects">
                    <div id="whatever"  >
                        <img className="PicWhatever" src={whatever} />
                        <p id="TextProjects">Em Breve</p>
                        </div>
                    <div id='seconds'>
                        <img className="PicProjects" src={android} />
                        <p id="TextProjects">Projeto Android</p>
                        <a id="btns" target="_blank" href="https://fabrioco.github.io/Projeto-Android/">Acessar</a>
                        </div>
                    <div id="first">
                        <img id="PicPrime" src={primeflix} />
                        <p id="TextProjects" >Prime Flix</p>
                        <a id="btns" target="_blank" href="https://primeflix-fabricio.netlify.app/">Acessar</a>
                        </div>
                    <div id='seconds'>
                        <img className="PicProjects" src={cordel} />
                        <p id="TextProjects" >Projeto Cordel</p>
                        <a id="btns" target="_blank" href="https://fabrioco.github.io/Projeto-Cordel/">Acessar</a>
                        </div>

                    <div id="whatever">
                        <img className="PicWhatever" src={whatever} />
                        <p id="TextProjects">Em Breve</p>                        
                        
                        </div>
                </div>
            </div>
        </div>
        <div id="AllContact">
            <div id="Contact">
                <h3 id="TitleContact" >Contatos</h3>
                <p className="TextContact">Email: fl5513108@gmail.com</p>
                <p className="TextContact">Celular: (11) 96016-8159</p>  
            </div>
            <div id="SocialMedia">
                <h3 id="TitleContact" >Redes Sociais</h3>
                <a className="TextContact" target="_blank" href="https://www.linkedin.com/in/fabricio-lopes1325">
                <img id="svglinkedin" src={linkedin} />LinkedIn</a>

                <a href="https://www.facebook.com/bibicio.oliveiralopes" target="_blank" className="TextContact">
                    <img id="svgfacebook" src={facebook} />Facebook</a>
            </div>
        </div>
        <div id="btnBackTop">
                <a id="BackToTop" href="#header">&uarr;</a>
                </div>
        </div>
    )
}

export default Home;
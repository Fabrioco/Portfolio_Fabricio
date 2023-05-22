import './index.css'

function Header() {
    return(
        <div id="AllProject">
            <div id="header">
                <h1 id="title">Portfolio</h1>
                    <nav id="navegation">
                        <ol>
                            <li id='home'><a href="#home">Ínicio</a></li>
                            <li id='about'><a href="#about">Sobre</a></li>
                            <li id='project'><a href="#projects">Projetos</a></li>
                            <li id='contact'><a href="contact">Contato</a></li>
                        </ol>
                    </nav>
            </div>
        </div>
    )
}

export default Header;
import './headerStyle.css'

const Header = () => {

    return (
        <header className="header">
            <div className="logo-container">
                <img src="../../public/Logo-CSH.png" alt="CSH Logo" className="logo" />
            </div>
            <nav className="nav-links">
                <ul>
                    <a href="#home">Inicio</a>
                    <a href="#about">Sobre</a>
                    <a href="#services">Serviços</a>
                </ul>
            </nav>
        </header>
    )
}

export default Header
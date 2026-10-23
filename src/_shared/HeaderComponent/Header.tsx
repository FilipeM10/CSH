import style from './headerStyle.module.css'

const Header = () => {

    return (
        <header className={style["header"]}>
            <div className={style["logo-container"]}>
                <img src="/logoCSH.png" alt="CSH Logo" className={style["logo"]} />
            </div>
            <nav className={style["nav-links"]}>
                <ul>
                    <a href="#home">Inicio</a>
                    <a href="#about">Sobre</a>
                    <a href="#services">Serviços</a>
                    <a href="#process">Processo</a>
                    <a href="#contacts">Contatos</a>
                </ul>
            </nav>
        </header>
    )
}

export default Header
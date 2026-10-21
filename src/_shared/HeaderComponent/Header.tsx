import style from './headerStyle.module.css'

const Header = () => {

    return (
        <header className={style["header"]}>
            <div className={style["logo-container"]}>
                <img src="../../public/Logo-CSH.png" alt="CSH Logo" className={style["logo"]} />
            </div>
            <nav className={style["nav-links"]}>
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
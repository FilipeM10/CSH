import { useState } from 'react'
import style from './headerStyle.module.css'
import FaFIIcons from '../icons/FaFiIcons.tsx'

const links = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Processo", href: "#process" },
    { label: "Contatos", href: "#contacts" },
]

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <header className={style["header"]}>
            <div className={style["logo-container"]}>
                <img src="/logoCSH-sm.png" alt="CSH Logo" width={330} height={220} className={style["logo"]} />
            </div>
            <nav id="menu-principal" className={`${style["nav-links"]}${menuAberto ? ` ${style["open"]}` : ''}`}>
                <ul>
                    {links.map(({ label, href }) => (
                        <li key={href}>
                            <a href={href} onClick={() => setMenuAberto(false)}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button
                type="button"
                className={style["menu-button"]}
                onClick={() => setMenuAberto(aberto => !aberto)}
                aria-expanded={menuAberto}
                aria-controls="menu-principal"
                aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            >
                <FaFIIcons typeModule="fi" name={menuAberto ? "FiX" : "FiMenu"} size={24} />
            </button>
        </header>
    )
}

export default Header

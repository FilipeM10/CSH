import style from './footerStyle.module.css'
import FaFIIcons from '../icons/FaFiIcons.tsx'
import { email, whatsappFormatado, whatsappLink, mailtoLink, githubLink, linkedinLink } from '../contactInfo.ts'

const servicos = [
    "E-commerce e Lojas Virtuais",
    "Sistemas Web e Plataformas SaaS",
    "Integração de Sistemas e APIs",
    "Landing Pages",
    "Sites Institucionais",
    "Domínio",
    "Squarespace Payments",
    "Análise de dados",
    "Busca e otimização com IA",
]

const navegacao = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Processo", href: "#process" },
    { label: "Contato", href: "#contacts" },
]

const Footer = () => {
    const anoAtual = new Date().getFullYear()

    return (
        <footer className={`${style["footer-component"]}`}>
            <div className={style["footer-grid"]}>
                <div className={style["brand"]}>
                    <div className={style["logo-estruture"]}>
                        <img src="/logoCSH-sm.png" alt="logo footer CSH" width={330} height={220} loading="lazy" className={style["logo"]} />
                        <span className={`gradient-element ${style["csh-footer-name"]}`}>Cyber System Hub Studio</span>
                    </div>
                    <p className={style["brand-description"]}>
                        Soluções web sob medida: sites, sistemas e integrações para tirar sua ideia do papel.
                    </p>
                </div>

                <nav className={style["navigation"]} aria-label="Serviços">
                    <span className={style["column-title"]}>Serviços</span>
                    <ul className={`${style["link-list"]} ${style["link-list-two-columns"]}`}>
                        {servicos.map((servico) => (
                            <li key={servico}>
                                <a href="#services">{servico}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav className={style["navigation"]} aria-label="Navegação">
                    <span className={style["column-title"]}>Navegação</span>
                    <ul className={style["link-list"]}>
                        {navegacao.map(({ label, href }) => (
                            <li key={href}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div id="contato" className={style["navigation"]}>
                    <span className={style["column-title"]}>Contato</span>
                    <ul className={style["link-list"]}>
                        <li>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={style["contact-item"]}>
                                <FaFIIcons typeModule="fa" name="FaWhatsapp" size={16} />
                                {whatsappFormatado}
                            </a>
                        </li>
                        <li>
                            <a href={mailtoLink} className={style["contact-item"]}>
                                <FaFIIcons typeModule="fi" name="FiMail" size={16} />
                                {email}
                            </a>
                        </li>
                    </ul>
                    <div className={style["item-icon"]}>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={style["social-link"]}>
                            <FaFIIcons typeModule="fi" name="FiGithub" size={18} />
                        </a>
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={style["social-link"]}>
                            <FaFIIcons typeModule="fa" name="FaLinkedinIn" size={18} />
                        </a>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={style["social-link"]}>
                            <FaFIIcons typeModule="fa" name="FaWhatsapp" size={18} />
                        </a>
                        <a href={mailtoLink} aria-label="E-mail" className={style["social-link"]}>
                            <FaFIIcons typeModule="fi" name="FiMail" size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={style["footer-bottom"]}>
                <span>© {anoAtual} Cyber System Hub Studio. Todos os direitos reservados.</span>
                <a href="#home" className={style["back-to-top"]}>
                    Voltar ao topo
                    <FaFIIcons typeModule="fi" name="FiArrowUp" size={14} />
                </a>
            </div>
        </footer>
    )
}

export default Footer

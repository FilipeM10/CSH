import { useEffect, useState } from 'react'
import style from '../style/contacts.module.css'
import FaFIIcons from '../_shared/icons/FaFiIcons.tsx'
import Reveal from '../_shared/Reveal.tsx'
import { email, whatsappFormatado, whatsappLink, mailtoLink, githubLink, linkedinLink } from '../_shared/contactInfo.ts'

interface ContactsProps {
    id: string
}

const canais = [
    {
        label: "WhatsApp",
        valor: whatsappFormatado,
        href: whatsappLink,
        icon: <FaFIIcons typeModule="fa" name="FaWhatsapp" size={22} />,
        externo: true,
    }, {
        label: "E-mail",
        valor: email,
        href: mailtoLink,
        icon: <FaFIIcons typeModule="fi" name="FiMail" size={22} />,
        externo: false,
    }, {
        label: "LinkedIn",
        valor: "Filipe Monteiro",
        href: linkedinLink,
        icon: <FaFIIcons typeModule="fa" name="FaLinkedinIn" size={22} />,
        externo: true,
    }, {
        label: "GitHub",
        valor: "@FilipeM10",
        href: githubLink,
        icon: <FaFIIcons typeModule="fi" name="FiGithub" size={22} />,
        externo: true,
    },
]

const infos = [
    { icon: <FaFIIcons typeModule="fi" name="FiClock" size={16} />, texto: "Resposta em até 24h" },
    { icon: <FaFIIcons typeModule="fi" name="FiMapPin" size={16} />, texto: "Salvador – BA · atendimento remoto em todo o Brasil" },
    { icon: <FaFIIcons typeModule="fi" name="FiCalendar" size={16} />, texto: "Seg a Sab, 9h–20h" },
]

const Contacts = ({ id }: ContactsProps) => {
    const [copiado, setCopiado] = useState(false)

    useEffect(() => {
        if (!copiado) return
        const timer = setTimeout(() => setCopiado(false), 2000)
        return () => clearTimeout(timer)
    }, [copiado])

    const copiarEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopiado(true)
        } catch {
            console.warn("Não foi possível copiar o e-mail")
        }
    }

    return (
        <section id={id} className={`section container-second-body ${style["contacts"]}`}>
            <div className={style["contacts-header"]}>
                <span className="comment-dev">// contato</span>
                <span className="subtitle">Vamos <span className="gradient-element">conversar?</span></span>
                <p className={style["contacts-description"]}>
                    Tem um projeto em mente ou quer tirar uma dúvida? Escolha o canal que preferir e eu retorno o quanto antes.
                </p>
            </div>

            <div className={style["contacts-grid"]}>
                <div className={style["cards"]}>
                    {canais.map((canal, index) => (
                        <Reveal key={canal.label} variant="left" delay={index * 100} className={style["card"]}>
                            <a
                                href={canal.href}
                                className={style["card-link"]}
                                {...(canal.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                <span className={style["card-icon"]}>{canal.icon}</span>
                                <span className={style["card-text"]}>
                                    <span className={style["card-label"]}>{canal.label}</span>
                                    <span className={style["card-value"]}>{canal.valor}</span>
                                </span>
                                <span className={style["card-arrow"]}>
                                    <FaFIIcons typeModule="fi" name="FiArrowUpRight" size={18} />
                                </span>
                            </a>

                            {canal.label === "E-mail" && (
                                <button
                                    type="button"
                                    onClick={copiarEmail}
                                    className={`${style["copy-button"]}${copiado ? ` ${style["copied"]}` : ''}`}
                                    aria-label="Copiar e-mail"
                                >
                                    <FaFIIcons typeModule="fi" name={copiado ? "FiCheck" : "FiCopy"} size={13} />
                                    {copiado ? "Copiado!" : "Copiar"}
                                </button>
                            )}
                        </Reveal>
                    ))}
                </div>

                <Reveal variant="left" delay={canais.length * 100} className={style["status-panel"]}>
                    <div className={style["window-bar"]}>
                        <span /><span /><span />
                        <span className={style["window-title"]}>status.ts</span>
                    </div>

                    <div className={style["status-body"]}>
                        <div className={style["status-available"]}>
                            <span className={style["live-dot"]} />
                            Disponível para novos projetos
                        </div>

                        <ul className={style["info-list"]}>
                            {infos.map(({ icon, texto }) => (
                                <li key={texto}>
                                    <span className={style["info-icon"]}>{icon}</span>
                                    {texto}
                                </li>
                            ))}
                        </ul>

                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={style["cta"]}>
                            <FaFIIcons typeModule="fa" name="FaWhatsapp" size={18} />
                            Iniciar conversa no WhatsApp
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Contacts

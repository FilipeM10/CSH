import { useEffect, useRef, useState } from 'react'
import style from '../style/services.module.css'
import Reveal from '../_shared/Reveal.tsx'
import FaFIIcons from '../_shared/icons/FaFiIcons.tsx'
import workspaceImg from '../assets/Workspace.jpg'
import analiseDadosImg from '../assets/analiseDados.jpg'
import iaSeoImg from '../assets/IASEO.jpg'
import marketingImg from '../assets/marketing.jpg'
import dashboardImg from '../assets/DashboardFluxoPro.jpg'
import dominiosImg from '../assets/Dominios.jpg'
import integracaoEmailsImg from '../assets/IntegraçãoEmails.jpg'

interface ServicesProps {
    id: string;
}

const Services = ({ id }: ServicesProps) => {
    const trackRef = useRef<HTMLDivElement>(null)
    const frameRef = useRef(0)
    const [ativo, setAtivo] = useState(0)

    // No mobile/tablet a lista vira um carrossel com scroll-snap; o card ativo é o mais próximo do centro
    const atualizarAtivo = () => {
        frameRef.current = 0
        const track = trackRef.current
        if (!track) return

        const centro = track.scrollLeft + track.clientWidth / 2
        let maisProximo = 0
        let menorDistancia = Infinity
        Array.from(track.children as HTMLCollectionOf<HTMLElement>).forEach((card, i) => {
            const distancia = Math.abs(card.offsetLeft + card.offsetWidth / 2 - centro)
            if (distancia < menorDistancia) {
                menorDistancia = distancia
                maisProximo = i
            }
        })
        setAtivo(maisProximo)
    }

    const handleScroll = () => {
        if (!frameRef.current) frameRef.current = requestAnimationFrame(atualizarAtivo)
    }

    useEffect(() => () => cancelAnimationFrame(frameRef.current), [])

    const irPara = (index: number) => {
        const track = trackRef.current
        const card = track?.children[index] as HTMLElement | undefined
        if (!track || !card) return

        setAtivo(index)
        const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        track.scrollTo({
            left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
            behavior: reduzirMovimento ? 'auto' : 'smooth',
        })
    }

    const services = [
        {
            nome: 'Landing Pages e Sites Institucionais',
            descricao: 'Criação de páginas de alta conversão, portfólios e sites institucionais otimizados para converter visitantes em clientes.',
            img: workspaceImg
        }, {
            nome: 'Análise de dados',
            descricao: 'Monitore o desempenho de seu site e transforme dados brutos em insights estratégicos com bancos de dados otimizados',
            img: analiseDadosImg
        }, {
            nome: 'Busca e otimização com IA',
            descricao: 'Use sua própria ferramenta integrada à IA na auditoria de seus sites melhorando seu tráfego de buscas e automatizando seus serviços',
            img: iaSeoImg
        }, {
            nome: 'E-commerce e Lojas Virtuais',
            descricao: 'Desenvolvimento de plataformas de vendas completas, com integração de meios de pagamento, cálculo de frete e painel administrativo fácil de usar.',
            img: marketingImg
        }, {
            nome: 'Sistemas Web e Plataformas SaaS',
            descricao: 'Desenvolvimento de sistemas web personalizados para automatizar processos internos de empresas ou criar novos produtos digitais.',
            img: workspaceImg
        }, {
            nome: 'Integração de Sistemas e APIs',
            descricao: 'Conexão entre diferentes ferramentas (CRMs, gateways de pagamento, ERPs, automações de marketing) para centralizar dados.',
            img: dashboardImg
        }, {
            nome: 'Domínio',
            descricao: 'Registre o dominio perfeito para o seu negócio, Privacidade WHOIS, SSL e DNS premium incluídos garantindo uma presença online profissional e fácil de encontrar.',
            img: dominiosImg
        }, {
            nome: 'Squarespace Payments',
            descricao: 'crie um e-mail comercial no Google Workspace para oficializar sua empresa',
            img: integracaoEmailsImg
        }
    ]

    return (
        <div id={id} className="services container-second-body section">
            <div className={style["services-container"]}>
                <span className="comment-dev">// serviços</span>
                <span className="subtitle">Meus Serviços</span>
            </div>
            <div className={style["carousel"]}>
                <button
                    type="button"
                    className={`${style["carousel-arrow"]} ${style["arrow-prev"]}`}
                    onClick={() => irPara(ativo - 1)}
                    disabled={ativo === 0}
                    aria-label="Serviço anterior"
                >
                    <FaFIIcons typeModule="fi" name="FiChevronLeft" size={22} />
                </button>
                <div className={style["services-content"]} ref={trackRef} onScroll={handleScroll}>
                    {
                        services.map((service, index) => (
                            <Reveal
                                key={index}
                                variant="left"
                                delay={(index % 4) * 120}
                                className={`${style["service-item"]}${index === ativo ? ` ${style["active"]}` : ''}`}
                            >
                                <div
                                    className={`${style["service-bg"]}${service.img ? '' : ` ${style["service-bg-empty"]}`}`}
                                    style={service.img ? { backgroundImage: `url(${service.img})` } : undefined}
                                />
                                <div className={style["service-info"]}>
                                    <h3 className={style["service-title"]}>{service.nome}</h3>
                                    <p className={style["service-description"]}>{service.descricao}</p>
                                </div>
                            </Reveal>
                        ))
                    }
                </div>
                <button
                    type="button"
                    className={`${style["carousel-arrow"]} ${style["arrow-next"]}`}
                    onClick={() => irPara(ativo + 1)}
                    disabled={ativo === services.length - 1}
                    aria-label="Próximo serviço"
                >
                    <FaFIIcons typeModule="fi" name="FiChevronRight" size={22} />
                </button>
            </div>
            <div className={style["carousel-dots"]}>
                {services.map((service, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`${style["dot"]}${index === ativo ? ` ${style["dot-active"]}` : ''}`}
                        onClick={() => irPara(index)}
                        aria-label={`Ir para ${service.nome}`}
                        aria-current={index === ativo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services

import style from '../style/services.module.css'

interface ServicesProps {
    id: string;
}

const Services = ({ id }: ServicesProps) => {
    const services = [
        {
            nome: 'Landing Pages e Sites Institucionais',
            descricao: 'Criação de páginas de alta conversão, portfólios e sites institucionais otimizados para converter visitantes em clientes.',
            img: 'src/assets/Workspace.png'
        }, {
            nome: 'Análise de dados',
            descricao: 'Monitore o desempenho de seu site e transforme dados brutos em insights estratégicos com bancos de dados otimizados',
            img: '/src/assets/analiseDados.png'
        }, {
            nome: 'Busca e otimização com IA',
            descricao: 'Use sua própria ferramenta integrada à IA na auditoria de seus sites melhorando seu tráfego de buscas e automatizando seus serviços',
            img: '/src/assets/IASEO.png'
        }, {
            nome: 'E-commerce e Lojas Virtuais',
            descricao: 'Desenvolvimento de plataformas de vendas completas, com integração de meios de pagamento, cálculo de frete e painel administrativo fácil de usar.',
            img: '/src/assets/marketing.png'
        }, {
            nome: 'Sistemas Web e Plataformas SaaS',
            descricao: 'Desenvolvimento de sistemas web personalizados para automatizar processos internos de empresas ou criar novos produtos digitais.',
            img: '/src/assets/Workspace.png'
        }, {
            nome: 'Integração de Sistemas e APIs',
            descricao: 'Conexão entre diferentes ferramentas (CRMs, gateways de pagamento, ERPs, automações de marketing) para centralizar dados.',
            img: '/src/assets/DashboardFluxoPro.png'
        }, {
            nome: 'Domínio',
            descricao: 'Registre o dominio perfeito para o seu negócio, Privacidade WHOIS, SSL e DNS premium incluídos garantindo uma presença online profissional e fácil de encontrar.',
            img: '/src/assets/Dominios.png'
        }, {
            nome: 'Squarespace Payments',
            descricao: 'crie um e-mail comercial no Google Workspace para oficializar sua empresa',
            img: '/src/assets/IntegraçãoEmails.png'
        }
    ]

    return (
        <div id={id} className="services container-second-body section">
            <div className={style["services-container"]}>
                <span className="comment-dev">// serviços</span>
                <span className="subtitle">Meus Serviços</span>
            </div>
            <div className={style["services-content"]}>
                {
                    services.map((service, index) => (
                        <div key={index} className={style["service-item"]}>
                            <div
                                className={`${style["service-bg"]}${service.img ? '' : ` ${style["service-bg-empty"]}`}`}
                                style={service.img ? { backgroundImage: `url(${service.img})` } : undefined}
                            />
                            <div className={style["service-info"]}>
                                <h3 className={style["service-title"]}>{service.nome}</h3>
                                <p className={style["service-description"]}>{service.descricao}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services

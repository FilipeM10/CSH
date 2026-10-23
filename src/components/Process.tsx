import type { CSSProperties } from 'react'
import style from '../style/process.module.css'
import FaFIIcons from '../_shared/icons/FaFiIcons.tsx'
import useRevealOnScroll from '../_shared/hooks/useRevealOnScroll.ts'

interface ProcessProps {
    id: string
}

const etapas = [
    {
        titulo: "Conversa inicial",
        descricao: "Entendo seu negócio, objetivos e referências para definir o que o projeto precisa.",
        icon: <FaFIIcons typeModule="fi" name="FiMessageCircle" size={24} />,
    }, {
        titulo: "Proposta",
        descricao: "Você recebe escopo e prazo por escrito, sem surpresas no meio do caminho.",
        icon: <FaFIIcons typeModule="fi" name="FiFileText" size={24} />,
    }, {
        titulo: "Desenvolvimento",
        descricao: "Construo o projeto e compartilho prévias para você acompanhar a evolução.",
        icon: <FaFIIcons typeModule="fi" name="FiCode" size={24} />,
    }, {
        titulo: "Ajustes",
        descricao: "Revisamos juntos e refinamos os detalhes combinados até ficar do seu jeito.",
        icon: <FaFIIcons typeModule="fi" name="FiSliders" size={24} />,
    }, {
        titulo: "Entrega e suporte",
        descricao: "Coloco o site no ar e dou suporte para qualquer dúvida ou correção após a entrega.",
        icon: <FaFIIcons typeModule="fi" name="FiSend" size={24} />,
    },
]

const Process = ({ id }: ProcessProps) => {
    const { ref: sectionRef, visivel } = useRevealOnScroll<HTMLElement>()

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`section container-second-body ${style["process"]}${visivel ? ` ${style["visible"]}` : ''}`}
        >
            <div className={style["process-header"]}>
                <span className="comment-dev">// processo</span>
                <span className="subtitle">Como <span className="gradient-element">funciona</span></span>
                <p className={style["process-description"]}>
                    Do primeiro contato ao site no ar, um caminho simples e transparente.
                </p>
            </div>

            <ol className={style["timeline"]}>
                {etapas.map((etapa, index) => (
                    <li
                        key={etapa.titulo}
                        className={style["step"]}
                        style={{ '--i': index } as CSSProperties}
                    >
                        <div className={style["step-marker"]}>
                            <span className={style["step-icon"]}>{etapa.icon}</span>
                            <span className={style["step-number"]}>{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className={style["step-text"]}>
                            <h3 className={style["step-title"]}>{etapa.titulo}</h3>
                            <p className={style["step-description"]}>{etapa.descricao}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default Process

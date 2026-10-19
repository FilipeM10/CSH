import { useRef, type MouseEvent } from 'react'
import '../style/homePage.css'

const HomePage = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    // atualiza as variáveis CSS direto no elemento para não re-renderizar a cada movimento
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = containerRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
        el.style.setProperty('--my', `${e.clientY - rect.top}px`)
        el.style.setProperty('--glow-opacity', '1')
    }

    const handleMouseLeave = () => {
        containerRef.current?.style.setProperty('--glow-opacity', '0')
    }

    return (
        <div
            className="container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="grid-glow" aria-hidden="true" />
            <span className='comment-dev'>
                &gt; bem vindo ao seu ambiente ideal de desenvolvimento<span className='cursor-blink'>_</span>
            </span>
            <span className='title'>Desenvolvendo o <span className='gradient-element'>futuro</span> <br />Fazendo seu negócio rodar</span>
            <p className='csh-description'>Cyber System Host — desenvolvimento de software, APIs e <br /> infraestrutura sob medida.</p>

            <div className='homeBtn'>
                <button className='btn see-project'>Ver projetos</button>
                <button className='btn talk-toMe'>Fale comigo</button>
            </div>
        </div>
    )
}

export default HomePage

import { useEffect, useRef, type MouseEvent } from 'react'
import '../style/homePage.css'
import HeroCode from './HeroCode'

interface HomePageProps {
    id: string;
}

// raio do brilho; precisa bater com o tamanho do .grid-glow no CSS (diâmetro = 2x)
const GLOW_RADIUS = 180

const HomePage = ({ id }: HomePageProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const glowRef = useRef<HTMLDivElement>(null)
    const linesRef = useRef<HTMLDivElement>(null)
    const pointerRef = useRef({ x: 0, y: 0 })
    const frameRef = useRef(0)
    const gridSizeRef = useRef(0)

    useEffect(() => () => cancelAnimationFrame(frameRef.current), [])

    // move o brilho só com transform (sem repintar); no máximo uma atualização por quadro
    const updateGlow = () => {
        frameRef.current = 0
        const container = containerRef.current
        const glow = glowRef.current
        const lines = linesRef.current
        if (!container || !glow || !lines) return

        if (!gridSizeRef.current) {
            gridSizeRef.current = parseFloat(getComputedStyle(container).getPropertyValue('--grid-size')) || 48
        }
        const grid = gridSizeRef.current

        const rect = container.getBoundingClientRect()
        const x = pointerRef.current.x - rect.left - GLOW_RADIUS
        const y = pointerRef.current.y - rect.top - GLOW_RADIUS

        // as linhas internas recuam o resto da divisão pela grade para ficarem alinhadas com a grade do fundo
        const offsetX = ((x % grid) + grid) % grid
        const offsetY = ((y % grid) + grid) % grid

        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`
        lines.style.transform = `translate3d(${-offsetX}px, ${-offsetY}px, 0)`
    }

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        pointerRef.current = { x: e.clientX, y: e.clientY }
        if (!frameRef.current) frameRef.current = requestAnimationFrame(updateGlow)
        if (glowRef.current) glowRef.current.style.opacity = '1'
    }

    const handleMouseLeave = () => {
        if (glowRef.current) glowRef.current.style.opacity = '0'
    }

    return (
        <div
            id={id}
            className="container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="grid-glow" ref={glowRef} aria-hidden="true">
                <div className="grid-glow-lines" ref={linesRef} />
            </div>
            <div className='hero-content'>
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

            <HeroCode />
        </div>
    )
}

export default HomePage

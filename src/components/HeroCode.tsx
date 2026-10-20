import { useEffect, useRef, useState, type MouseEvent } from 'react'
import '../style/heroCode.css'

type TokenKind = 'kw' | 'var' | 'fn' | 'str' | 'prop' | 'bool' | 'punc' | 'pl'

interface Token {
    k: TokenKind;
    v: string;
}

const CODE: Token[][] = [
    [{ k: 'kw', v: 'const' }, { k: 'pl', v: ' ' }, { k: 'var', v: 'futuro' }, { k: 'pl', v: ' = ' }, { k: 'kw', v: 'await' }, { k: 'pl', v: ' ' }, { k: 'var', v: 'csh' }, { k: 'punc', v: '.' }, { k: 'fn', v: 'desenvolver' }, { k: 'punc', v: '({' }],
    [{ k: 'pl', v: '  ' }, { k: 'prop', v: 'stack' }, { k: 'punc', v: ': [' }, { k: 'str', v: "'React'" }, { k: 'punc', v: ', ' }, { k: 'str', v: "'Node'" }, { k: 'punc', v: ', ' }, { k: 'str', v: "'Cloud'" }, { k: 'punc', v: '],' }],
    [{ k: 'pl', v: '  ' }, { k: 'prop', v: 'apis' }, { k: 'punc', v: ': ' }, { k: 'bool', v: 'true' }, { k: 'punc', v: ',' }],
    [{ k: 'pl', v: '  ' }, { k: 'prop', v: 'sobMedida' }, { k: 'punc', v: ': ' }, { k: 'bool', v: 'true' }, { k: 'punc', v: ',' }],
    [{ k: 'punc', v: '})' }],
    [],
    [{ k: 'var', v: 'seuNegocio' }, { k: 'punc', v: '.' }, { k: 'fn', v: 'rodar' }, { k: 'punc', v: '(' }, { k: 'var', v: 'futuro' }, { k: 'punc', v: ')' }],
]

const TERMINAL = [
    { k: 'cmd', text: 'npm run deploy' },
    { k: 'ok', text: '✓ build concluído em 1.2s' },
    { k: 'ok', text: '✓ APIs online · infraestrutura pronta' },
    { k: 'live', text: 'seu negócio está rodando' },
]

const lineLength = (line: Token[]) => line.reduce((sum, tok) => sum + tok.v.length, 0)

// cada quebra de linha conta como 1 caractere para dar uma pausa natural entre as linhas
const TOTAL_CHARS = CODE.reduce((sum, line) => sum + lineLength(line) + 1, 0)

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const HeroCode = () => {
    const [chars, setChars] = useState(0)
    const [termLines, setTermLines] = useState(0)
    const tiltRef = useRef<HTMLDivElement>(null)

    // inclina a janela na direção do mouse; atualiza variáveis CSS direto no elemento para não re-renderizar
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = tiltRef.current
        if (!el || prefersReducedMotion()) return
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        el.style.setProperty('--tilt-x', `${(0.5 - y) * 16}deg`)
        el.style.setProperty('--tilt-y', `${(x - 0.5) * 20}deg`)
        el.style.setProperty('--glare-x', `${x * 100}%`)
        el.style.setProperty('--glare-y', `${y * 100}%`)
    }

    const handleMouseLeave = () => {
        const el = tiltRef.current
        if (!el) return
        el.style.setProperty('--tilt-x', '0deg')
        el.style.setProperty('--tilt-y', '0deg')
    }

    // máquina de etapas: digita o código, depois imprime o terminal, espera e reinicia
    useEffect(() => {
        if (prefersReducedMotion()) {
            setChars(TOTAL_CHARS)
            setTermLines(TERMINAL.length)
            return
        }

        let timer: number
        if (chars < TOTAL_CHARS) {
            timer = window.setTimeout(() => setChars(c => c + 1), 35 + Math.random() * 45)
        } else if (termLines < TERMINAL.length) {
            timer = window.setTimeout(() => setTermLines(n => n + 1), termLines === 0 ? 600 : 750)
        } else {
            timer = window.setTimeout(() => {
                setChars(0)
                setTermLines(0)
            }, 5000)
        }
        return () => clearTimeout(timer)
    }, [chars, termLines])

    let remaining = chars
    let cursorLine = -1

    const renderedLines = CODE.map((line, i) => {
        const len = lineLength(line)
        const shown = Math.max(0, Math.min(remaining, len))
        if (cursorLine === -1 && remaining <= len) cursorLine = i
        remaining -= len + 1

        let left = shown
        const parts = line.map((tok, j) => {
            const part = tok.v.slice(0, Math.max(0, left))
            left -= tok.v.length
            return part ? <span key={j} className={`tk-${tok.k}`}>{part}</span> : null
        })

        return { parts, active: i === cursorLine }
    })

    const typingDone = chars >= TOTAL_CHARS

    return (
        <div
            className="hero-visual"
            aria-hidden="true"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="hero-tilt" ref={tiltRef}>
                <div className="hero-stage">
                    <div className="code-window">
                        <div className="code-titlebar">
                            <span className="dot dot-red" />
                            <span className="dot dot-yellow" />
                            <span className="dot dot-green" />
                            <span className="code-filename">futuro.ts</span>
                        </div>
                        <div className="code-body">
                            {renderedLines.map((line, i) => (
                                <div key={i} className={`code-line${line.active ? ' active' : ''}`}>
                                    <span className="ln">{i + 1}</span>
                                    <span className="code-text">
                                        {line.parts}
                                        {line.active && !typingDone && <span className="caret" />}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`terminal${termLines > 0 ? ' visible' : ''}`}>
                        <div className="terminal-titlebar">bash</div>
                        <div className="terminal-body">
                            {TERMINAL.slice(0, termLines).map((line, i) => (
                                <div key={i} className={`term-line term-${line.k}`}>
                                    {line.k === 'cmd' && <span className="term-prompt">$ </span>}
                                    {line.k === 'live' && <span className="live-dot" />}
                                    {line.text}
                                    {line.k === 'live' && <span className="cursor-blink">_</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="chip chip-status">
                        <span className="live-dot" /> 200 OK
                    </div>
                    <div className="chip chip-latency">⚡ 12ms</div>
                </div>
            </div>
        </div>
    )
}

export default HeroCode

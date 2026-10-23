import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import style from '../style/heroCode.module.css'

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

const TOTAL_CHARS = CODE.reduce((sum, line) => sum + lineLength(line) + 1, 0)

const LINE_STARTS = CODE.map((_, i) => CODE.slice(0, i).reduce((sum, line) => sum + lineLength(line) + 1, 0))

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const HeroCode = () => {
    const [chars, setChars] = useState(() => (prefersReducedMotion() ? TOTAL_CHARS : 0))
    const [termLines, setTermLines] = useState(() => (prefersReducedMotion() ? TERMINAL.length : 0))
    const tiltRef = useRef<HTMLDivElement>(null)

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

    useEffect(() => {
        if (prefersReducedMotion()) return

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

    const cursorLine = LINE_STARTS.findIndex((start, i) => chars - start <= lineLength(CODE[i]))

    const renderedLines = CODE.map((line, i) => {
        let left = Math.max(0, Math.min(chars - LINE_STARTS[i], lineLength(line)))

        const parts: ReactNode[] = []
        for (let j = 0; j < line.length; j++) {
            const tok = line[j]
            const part = tok.v.slice(0, Math.max(0, left))
            left -= tok.v.length
            if (part) parts.push(<span key={j} className={style[`tk-${tok.k}`]}>{part}</span>)
        }

        return { parts, active: i === cursorLine }
    })

    const typingDone = chars >= TOTAL_CHARS

    return (
        <div
            className={style['hero-visual']}
            aria-hidden="true"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className={style['hero-tilt']} ref={tiltRef}>
                <div className={style['hero-stage']}>
                    <div className={style['code-window']}>
                        <div className={style['code-titlebar']}>
                            <span className={`${style['dot']} ${style['dot-red']}`} />
                            <span className={`${style['dot']} ${style['dot-yellow']}`} />
                            <span className={`${style['dot']} ${style['dot-green']}`} />
                            <span className={style['code-filename']}>futuro.ts</span>
                        </div>
                        <div className={style['code-body']}>
                            {renderedLines.map((line, i) => (
                                <div key={i} className={`${style['code-line']}${line.active ? ` ${style['active']}` : ''}`}>
                                    <span className={style['ln']}>{i + 1}</span>
                                    <span className={style['code-text']}>
                                        {line.parts}
                                        {line.active && !typingDone && <span className={style['caret']} />}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${style['terminal']}${termLines > 0 ? ` ${style['visible']}` : ''}`}>
                        <div className={style['terminal-titlebar']}>bash</div>
                        <div className={style['terminal-body']}>
                            {TERMINAL.slice(0, termLines).map((line, i) => (
                                <div key={i} className={`${style['term-line']} ${style[`term-${line.k}`]}`}>
                                    {line.k === 'cmd' && <span className={style['term-prompt']}>$ </span>}
                                    {line.k === 'live' && <span className={style['live-dot']} />}
                                    {line.text}
                                    {line.k === 'live' && <span className="cursor-blink">_</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${style['chip']} ${style['chip-status']}`}>
                        <span className={style['live-dot']} /> 200 OK
                    </div>
                    <div className={`${style['chip']} ${style['chip-latency']}`}>⚡ 12ms</div>
                </div>
            </div>
        </div>
    )
}

export default HeroCode

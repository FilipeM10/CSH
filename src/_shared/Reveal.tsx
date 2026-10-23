import type { CSSProperties, ReactNode } from 'react'
import useRevealOnScroll from './hooks/useRevealOnScroll.ts'

type RevealVariant = 'up' | 'left' | 'right' | 'zoom'

interface RevealProps {
    variant?: RevealVariant
    delay?: number
    className?: string
    children: ReactNode
}

const Reveal = ({ variant = 'up', delay = 0, className, children }: RevealProps) => {
    const { ref, visivel } = useRevealOnScroll<HTMLDivElement>(0.1)

    const classes = [
        'reveal',
        `reveal-${variant}`,
        visivel ? 'is-visible' : '',
        className ?? '',
    ].filter(Boolean).join(' ')

    return (
        <div ref={ref} className={classes} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>
            {children}
        </div>
    )
}

export default Reveal

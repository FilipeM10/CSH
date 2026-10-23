import { useEffect, useRef, useState } from 'react'

const useRevealOnScroll = <T extends HTMLElement>(threshold = 0.2) => {
    const ref = useRef<T>(null)
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisivel(true)
                observer.disconnect()
            }
        }, { threshold })

        observer.observe(element)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, visivel }
}

export default useRevealOnScroll

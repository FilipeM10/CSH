import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface IconProps {
    name: string;
    color?: string;
    size?: number;
    className?: string;
}

const LucideIconModule = ({ name, color, size, className }: IconProps) => {
    const LucideIconComponent = Icons[name as keyof typeof Icons] as LucideIcon | undefined
    if(!LucideIconComponent) {
        console.warn(`Ícone "${name}" não encontrado na lucide-react`);
        return null;
    }

    return (
        <LucideIconComponent 
            color={color} 
            size={size} 
            className={className} 
        />
    );
}

export default LucideIconModule

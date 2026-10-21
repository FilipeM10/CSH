import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import type { IconType } from 'react-icons'

const modules = {
    fa: FaIcons,
    fi: FiIcons,
}

type IconsProps = {
    color?: string;
    size?: number;
    className?: string;
} & (
    | { typeModule: 'fa'; name: keyof typeof FaIcons }
    | { typeModule: 'fi'; name: keyof typeof FiIcons }
)

const FaFiIcons = ({ typeModule, name, color, size, className }: IconsProps) => {
    const IconComponent = (modules[typeModule] as Record<string, IconType>)[name]
    if(!IconComponent) {
        console.warn(`Ícone "${name}" não encontrado em react-icons/${typeModule}`);
        return null;
    }

    return (
        <IconComponent
            color={color}
            size={size}
            className={className}
        />
    );
}

export default FaFiIcons

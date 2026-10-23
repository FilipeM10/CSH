import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import {
    FiArrowUp, FiArrowUpRight, FiCalendar, FiCheck, FiChevronLeft, FiChevronRight, FiClock, FiCode, FiCopy, FiFileText,
    FiGithub, FiMail, FiMapPin, FiMenu, FiMessageCircle, FiSend, FiSliders, FiX,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'

// Importar só os ícones usados evita empacotar as bibliotecas inteiras (~1,4 MB).
// Para usar um ícone novo, importe-o acima e adicione-o aqui.
const modules = {
    fa: { FaLinkedinIn, FaWhatsapp },
    fi: {
        FiArrowUp, FiArrowUpRight, FiCalendar, FiCheck, FiChevronLeft, FiChevronRight, FiClock, FiCode, FiCopy, FiFileText,
        FiGithub, FiMail, FiMapPin, FiMenu, FiMessageCircle, FiSend, FiSliders, FiX,
    },
}

type IconsProps = {
    color?: string;
    size?: number;
    className?: string;
} & (
    | { typeModule: 'fa'; name: keyof typeof modules.fa }
    | { typeModule: 'fi'; name: keyof typeof modules.fi }
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

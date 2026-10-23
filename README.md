# Cyber System Hub Studio (CSH)

Landing page da **Cyber System Hub Studio**, estúdio de desenvolvimento de software de Filipe Monteiro. A página apresenta os serviços oferecidos (sites, sistemas web, APIs, integrações, análise de dados e infraestrutura), explica como funciona o processo de trabalho e reúne os canais de contato, com uma identidade visual inspirada em editores de código e terminais.

## Seções da página

A página é de rolagem única, e o menu do header navega por âncoras entre as seções:

| Seção        | Componente              | O que tem                                                                                                                                                                        |
| ------------ | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Início**   | `HomePage` + `HeroCode` | Hero com grade de fundo e um brilho que acompanha o mouse, aurora animada e uma janela de código em 3D que inclina com o cursor, "digita" o código e imprime a saída no terminal |
| **Sobre**    | `AboutMe`               | Apresentação do desenvolvedor e um bloco de código estilizado com a stack                                                                                                        |
| **Serviços** | `Services`              | Grade com 8 cards de serviços, com imagem de fundo e entrada escalonada                                                                                                          |
| **Processo** | `Process`               | Linha do tempo com 5 etapas (conversa inicial → entrega e suporte) que acende em sequência ao aparecer na tela                                                                   |
| **Contatos** | `Contacts`              | Cards de WhatsApp, e-mail (com botão de copiar), LinkedIn e GitHub, e um painel de disponibilidade e horários                                                                    |

O `Header` (logo + navegação) e o `Footer` aparecem em toda a página.

## Destaques técnicos

- **Animações leves**: o brilho do hero e a inclinação da janela de código atualizam o `transform` e variáveis CSS direto no elemento, com `requestAnimationFrame`, sem causar re-render no React.
- **Entrada no scroll**: o componente `Reveal` e o hook `useRevealOnScroll` usam `IntersectionObserver` para animar cada seção uma única vez quando ela entra na tela (variantes `zoom`, `left` e `right`).
- **Acessibilidade**: respeita `prefers-reduced-motion`. Com movimento reduzido, o código do hero já aparece escrito, sem animação.
- **CSS Modules**: cada componente tem o próprio arquivo de estilo, e os estilos globais (cores, tipografia, classes utilitárias) ficam em `src/index.css`.
- **Dados de contato centralizados** em `src/_shared/contactInfo.ts`, usados pelo Footer e pela seção de Contatos.
- **Responsivo**: o layout se adapta a telas menores (o hero empilha e a linha do tempo fica vertical).

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- CSS Modules
- [react-icons](https://react-icons.github.io/react-icons/) e [lucide-react](https://lucide.dev/)
- ESLint

## Estrutura de pastas

```
public/                    logos e favicon
src/
├── main.tsx               ponto de entrada
├── App.tsx                monta o Header, as seções e o Footer
├── index.css              estilos globais e animações de reveal
├── assets/                imagens dos cards de serviço
├── components/            seções da página (HomePage, HeroCode, AboutMe, Services, Process, Contacts)
├── style/                 CSS Modules das seções
└── _shared/
    ├── HeaderComponent/   cabeçalho e navegação
    ├── footerComponent/   rodapé
    ├── hooks/             useRevealOnScroll
    ├── icons/             wrappers de ícones (react-icons / lucide)
    ├── Reveal.tsx         wrapper de animação de entrada
    └── contactInfo.ts     e-mail, WhatsApp, GitHub e LinkedIn
```

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # checagem de tipos + build de produção em dist/
npm run preview   # serve o build localmente
npm run lint      # roda o ESLint
```

## Contato

Desenvolvido por **Filipe Monteiro**, Cyber System Hub Studio.

- GitHub: [@FilipeM10](https://github.com/FilipeM10)
- LinkedIn: [Filipe Monteiro](https://www.linkedin.com/in/filipe-monteiro-6670312b4/)

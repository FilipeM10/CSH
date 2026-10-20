import '../style/aboutMe.css'

interface AboutMeProps {
    id: string;
}

const AboutMe = ({ id }: AboutMeProps) => {

    return (
        <div id={id} className="aboutMe-container">
            <div className='info-aboutMe section'>
                <span className='comment-dev'>// Sobre mim</span>
                <span className='subtitle'>Ofertas claras e seguras, meu código suas regras</span>
                <span className='description-aboutMe'>
                    Sou Filipe Monteiro, 
                    desenvolvedor de sistemas apaixonado por transformar problemas complexos em software simples e eficiente. 
                    Na CSH, acompanho cada projeto da ideia ao deploy.
                </span>
            </div>
            <div className='code-aboutMe'>
                <div className="header-code">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                </div>
                <div className="body-code">
                    <pre><code>
                        <span className="function">const</span> <span className="variables">dev</span> = {'{'}{'\n'}
                        {'  '}<span className="variables">name</span>: <span className="string">"Filipe Monteiro"</span>,{'\n'}
                        {'  '}<span className="variables">empresa</span>: <span className="string">"Cyber System Host"</span>,{'\n'}
                        {'  '}<span className="variables">stack</span>: [{'\n'}
                        {'    '}<span className="string">"TypeScript"</span>, <span className="string">"React"</span>, <span className="string">"Node.js"</span>,{'\n'}
                        {'    '}<span className="string">"Python"</span>, <span className="string">"Cloud"</span>, <span className="string">"Linux"</span>, <span className="string">"SQL"</span>{'\n'}
                        {'  '}],{'\n'}
                        {'}'}
                    </code></pre>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
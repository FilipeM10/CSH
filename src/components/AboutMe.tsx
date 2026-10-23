import style from '../style/aboutMe.module.css'

interface AboutMeProps {
    id: string;
}

const AboutMe = ({ id }: AboutMeProps) => {

    return (
        <div id={id} className={style['aboutMe-container']}>
            <div className={`section ${style['info-aboutMe']}`}>
                <span className='comment-dev'>// Sobre mim</span>
                <span className='subtitle'>Ofertas claras e seguras, meu código suas regras</span>
                <span className={style['description-aboutMe']}>
                    Sou Filipe Monteiro,
                    desenvolvedor de sistemas apaixonado por transformar problemas complexos em software simples e eficiente.
                    Na CSH, acompanho cada projeto da ideia ao deploy.
                </span>
            </div>
            <div className={style['code-aboutMe']}>
                <div className={style["header-code"]}>
                    <span className={style["dot red"]} />
                    <span className={style["dot yellow"]} />
                    <span className={style["dot green"]} />
                </div>
                <div className={style["body-code"]}>
                    <pre><code>
                        <span className={style["function"]}>const</span> <span className={style["variables"]}>dev</span> = {'{'}{'\n'}
                        {'  '}<span className={style["variables"]}>name</span>: <span className={style["string"]}>"Filipe Monteiro"</span>,{'\n'}
                        {'  '}<span className={style["variables"]}>empresa</span>: <span className={style["string"]}>"Cyber System Hub Studio"</span>,{'\n'}
                        {'  '}<span className={style["variables"]}>stack</span>: [{'\n'}
                        {'    '}<span className={style["string"]}>"TypeScript"</span>, <span className={style["string"]}>"React"</span>, <span className={style["string"]}>"Node.js"</span>,{'\n'}
                        {'    '}<span className={style["string"]}>"Python"</span>, <span className={style["string"]}>"Cloud"</span>, <span className={style["string"]}>"Linux"</span>, <span className={style["string"]}>"SQL"</span>{'\n'}
                        {'  '}],{'\n'}
                        {'}'}
                    </code></pre>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
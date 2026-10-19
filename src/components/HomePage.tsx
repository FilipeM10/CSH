import '../style/AppContent.css'

const HomePage = () => {
    return (
        <div className="container">
            <p className='welcome-dev'>
                &gt; bem vindo ao seu ambiente ideal de desenvolvimento<span className='cursor-blink'>_</span>
            </p>
            <span className='title'>Desenvolvendo o <span className='gradient-element'>futuro</span> <br />Fazendo seu negócio rodar</span>
            <p className='csh-description'>Cyber System Host — desenvolvimento de software, APIs e <br /> infraestrutura sob medida.</p>

            <div className='homeBtn'>
                <button className='btn see-project'>Ver projetos</button>
                <button className='btn talk-toMe'>Fale comigo</button>
            </div>
        </div>
    )
}

export default HomePage
import style from './footerStyle.module.css'

const Footer = () => {
    return (
        <footer className={style["container-second-body"]}>
            <img src="/Logo-CSH.png" alt="logo footer CSH" className={style['logo']} />
        </footer>
    )
}

export default Footer
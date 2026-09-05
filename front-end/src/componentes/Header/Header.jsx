
import styles from './Header.module.css'


function Header(){

    return(

        <header className={styles.header}>
            <div className={styles.logo}>Dream-trip</div>
                <nav className={styles.nav}>
                    <a href="#inicio">Inicio</a>
                    <a href="#destinos">Destinos</a>
                    <a href="#cadastro">Cadastro</a>
                </nav>


        </header>




    )


}

export default Header
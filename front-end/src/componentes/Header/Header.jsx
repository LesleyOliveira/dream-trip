
import styles from './Header.module.css'


function Header({aoClicarCadastrar}){

    return(

        <header className={styles.header}>
            <div className={styles.logo}>Dream-trip</div>
                <nav className={styles.nav}>
                    <a href="#inicio">Inicio</a>
                    <a href="#destinos">Destinos</a>
                    <a href="#cadastro" onClick={aoClicarCadastrar}>Cadastro</a>
                </nav>


        </header>




    )


}

export default Header
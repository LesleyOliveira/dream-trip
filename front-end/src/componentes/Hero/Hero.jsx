import styles from './Hero.module.css'


function Hero({aoClicarCadastrar}){

    return(
        <section className={styles.hero} id="inicio">
        <div className={styles.conteudo}>
            <p className={styles.destaque}>Minhas próximas aventuras.</p>

            <h1>Nunca desista
                <span>o Mundo está me esperando para conhecer ele!!!</span>
            </h1>

            <p className={styles.descricao}>
                Organizando os destinos dos meus sonhos || Planejando sempre!

            </p>

            <a href="#cadastro" className={styles.botao} onClick={aoClicarCadastrar}>Cadastre destino</a>

        </div>
        
        </section>
    )


    }

    export default Hero
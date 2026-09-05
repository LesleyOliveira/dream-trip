import { useState } from "react";
import styles from './FormDestino.module.css';

function FormDestino() {
    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [pais, setPais] = useState('');

    return (
        <section className={styles.containerPrincipal} id="cadastro">
            <div className={styles.card}>
                <h2>Cadastre o seu destino</h2>
                <p className={styles.subtitulo}>Qual lugar do mundo você deseja conhecer?</p>

                <form className={styles.formulario}>
                    <div className={styles.campo}>
                        <label>Nome do destino:</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} 
                        />
                    </div>

                    <div className={styles.linhaCampos}>
                        <div className={styles.campo}>
                            <label>Cidade</label>
                            <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} 
                            />
                        </div>

                        <div className={styles.campo}>
                            <label>País</label>
                            <input type="text" value={pais}onChange={(e) => setPais(e.target.value)} 
                            />
                        </div>
                    </div>

                    <button type="button" className={styles.botao}>Cadastrar Destino</button>
                </form>
            </div>
        </section>
    );
}

export default FormDestino;
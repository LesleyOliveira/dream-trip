import { useState } from "react";
import styles from './FormDestino.module.css';

function FormDestino() {
    const [formulario, setFormulario] = useState({
        nome: '',
        cidade: '',
        pais: '',
        continente: '',
        categoria: '',
        custoEstimado: '',
        prioridade: '',
        status: '',
        observacao: ''
    })


    function alterarCampo(e){
        const nomeCampo = e.target.name
        const valor = e.target.value 
        setFormulario({
            ...formulario,
            [nomeCampo]:valor
        })
    }


    async function cadastrarDestino() {
        const resposta = await fetch('http://localhost:8080/destinos' ,{
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(formulario)
        })
            console.log('STatus:',resposta.status)

            if(!resposta.ok){
                console.log("ERRO PRA CADASTROOOO")
                return
            }
        const dados = await resposta.json()
        console.log('DESTINO QUE FOI:',dados)

    }

    return (
        <section className={styles.formulario} id="cadastro">

        <div className={styles.card}>
            <h2 className={styles.titulo}> Cadastre seu destino</h2>
            <p className={styles.subtitulo}>
                Qual vai ser o nosso próximo destino?
            </p>

            <div className={styles.form}>

            <div className={styles.campo}>
                <label>Nome do destino</label>
                <input type="text"
                name="nome"
                value={formulario.nome}
                onChange={alterarCampo}
                />

            </div>

            <div className={styles.campo}>
                <label htmlFor="">Cidade</label>
                <input type="text" name="cidade" value={formulario.cidade}
                onChange={alterarCampo}
                 />

            </div>

            <div className={styles.campo}>
                <label htmlFor="">Pais</label>
                <input type="text" name="pais" value={formulario.pais} 
                onChange={alterarCampo}
                />

            </div>


            <div className={styles.campo}>
                <label htmlFor="">Continente</label>
                <select name="continente" value={formulario.continente}
                onChange={alterarCampo}>
                <option value="">Selecione</option>
                <option value="AMERICA">América</option>
                <option value="EUROPA">Europa</option>
                <option value="ASIA">Ásia</option>
                <option value="AFRICA">África</option>
                <option value="OCEANIA">Oceania</option>
                </select>
            </div>

            <div className={styles.campo}>
             <label>Categoria</label>
             <select name="categoria" value={formulario.categoria}onChange={alterarCampo} >
                <option value="">Selecione</option>
               <option value="PRAIA">Praia</option>
               <option value="CIDADE">Cidade</option>
                <option value="NATUREZA">Natureza</option>
                <option value="HISTORIA">Histórico</option>
                </select>
             </div>

            <div className={styles.campo}>
                <label htmlFor="">Custo estimado</label>
                <input type="number"
                name="custoEstimado"
                value={formulario.custoEstimado} 
                onChange={alterarCampo}/>
            </div>

            <div className={styles.campo}>
                <label htmlFor="">Prioridade</label>
                <select name="prioridade" value={formulario.prioridade} onChange={alterarCampo}>
                    <option value="">Selecione</option>
                    <option value="ALTA">Alta</option>
                    <option value="MEDIA">Media</option>
                    <option value="BAIXA">Baixa</option>
                </select>
            </div>

            <div className={styles.campo}>
                <label htmlFor="">Status</label>
                <select name="status" value={formulario.status}
                onChange={alterarCampo}>

                    <option value="">Selecione</option>
                    <option value="QUERO_CONHECER">Quero conhecer</option>
                    <option value="PLANEJANDO">Planejando</option>
                    <option value="VISITADO">Já visitei</option>

                </select>

            </div>



            <div className={`${styles.campo} ${styles.campoCompleto}`}> 
                <label htmlFor="">Observação</label>
                <textarea name="observacao" value={formulario.observacao} onChange={alterarCampo}/>

            </div>

            <button type="button" className={styles.botao} onClick={cadastrarDestino}>Cadastrar destino</button>



           </div>


        </div>



        
        </section>
    )
}

export default FormDestino;

 
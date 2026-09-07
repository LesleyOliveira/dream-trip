import { useEffect, useState } from "react";
import styles from "./ListaDestinos.module.css";

function ListaDestinos(){

    const[destinos, setDestinos] = useState([]);
    const[carregando, setCarregando] = useState(true);
    const[erro, setErro] = useState("");

    useEffect(() =>{buscarDestinos();},[]);

    async function buscarDestinos(){

        try{
            const resposta = await fetch("http://localhost:8080/destinos");
            
            if(!resposta.ok){
                throw new Error("Erro ao buscar o destino desejado!");
            }

            const dados = await resposta.json();
            setDestinos(dados);

        }catch(error) {
            setErro("Deu erro ao carregar dados, tente dnv")
        }finally{
            setCarregando(false);
        }

    }

    if(carregando){
        return <p className={styles.mensagem}>Carreando os destinos..</p>
    }

    if(erro){
        return  <p className={styles.erro}>{erro}</p>
    }

    return(

        <section className={styles.lista}  >
            <h2 className={styles.titulo}>Meus destinos dos sonhos!!</h2>
            
            {destinos.length === 0 ? (
                <p>Não tem nenhumm destino cadastrado ainda</p>
            ): (
                <div className={styles.grade}>
                    {destinos.map((destino) => (
                        <div className={styles.card} key={destino.id}>
                            <h3>{destino.nome}</h3>
                            <p>{destino.cidade}, {destino.pais}</p>
                            <p>{destino.continente}</p>                        
                            <p>{destino.categoria}</p>
                            <p>{destino.custoEstimado}</p>
                            <p>{destino.prioridade}</p>

                            <p>{destino.status}</p>
                            {destino.observacao && 
                            (<p className={styles.observacao}>
                                {destino.observacao}
                                </p>)}
                             </div>
                             
                            )
                    )
                    
                    }

                </div>
            )}


        </section>


    );


}

export default ListaDestinos;
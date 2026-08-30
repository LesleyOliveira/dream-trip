package school.sptech.dream_trip;

public class Destino {

    private Integer id;
    private String nome;
    private String cidade;
    private String pais;
    private String continente;
    private String categoria;
    private Double custoEstimado;
    private String prioridade;
    private String status;
    private String observacao;

    public Destino() {
    }

    public Destino(Integer id, String nome, String pais, String cidade, String continente, String categoria, Double custoEstimado, String prioridade, String status, String observacao) {
        this.id = id;
        this.nome = nome;
        this.pais = pais;
        this.cidade = cidade;
        this.continente = continente;
        this.categoria = categoria;
        this.custoEstimado = custoEstimado;
        this.prioridade = prioridade;
        this.status = status;
        this.observacao = observacao;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getContinente() {
        return continente;
    }

    public void setContinente(String continente) {
        this.continente = continente;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Double getCustoEstimado() {
        return custoEstimado;
    }

    public void setCustoEstimado(Double custoEstimado) {
        this.custoEstimado = custoEstimado;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(String prioridade) {
        this.prioridade = prioridade;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }
}

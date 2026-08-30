CREATE database dreamtrip;
use dreamtrip;

CREATE TABLE destinos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    pais VARCHAR(255) NOT NULL,
    continente VARCHAR(255) NOT NULL,
    categoria VARCHAR(255) NOT NULL,
    custoEstimado DECIMAL(10, 2) NOT NULL,
    prioridade VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    observacao TEXT
);

INSERT INTO destinos (nome, cidade, pais, continente, categoria, custoEstimado, prioridade, status, observacao) 
VALUES 
('Times Square', 'Nova York', 'EUA', 'América do Norte', 'Urbano', 12000.00, 'BAIXA', 'VISITADO', 'Frio demais no inverno!'),
('Monte Fuji', 'Tóquio', 'Japão', 'Ásia', 'Natureza', 15000.00, 'ALTA', 'QUERO_CONHECER', 'Tentar ir na época das cerejeiras.'),
('Coliseu', 'Roma', 'Itália', 'Europa', 'Histórico', 9500.00, 'MEDIA', 'QUERO_CONHECER', NULL);



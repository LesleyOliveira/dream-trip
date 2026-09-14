CREATE database dreamtrip;
use dreamtrip;
drop database dreamtrip;

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







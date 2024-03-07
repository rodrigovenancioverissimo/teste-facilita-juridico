create table clientes (
    id SERIAL primary key,
    nome VARCHAR(255) not null,
    email VARCHAR(255) not null unique,
    telefone VARCHAR(20) not null,
    coordenada_x DOUBLE precision not null,
    coordenada_y DOUBLE precision not null
);

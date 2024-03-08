Usado e testado com Node V20.9.0, Postgres 16.2


# Instalação Banco de dados
Garanta que você tenha o Postgres Instalado na sua máquina (Caso não tenho o postgres recomendo usar o docker para criar um)
Crie um banco de dados com o nome clientes_db ou o que você desejar e execute o SQL para criar a tabela:
```SQL
create table clientes (
    id SERIAL primary key,
    nome VARCHAR(255) not null,
    email VARCHAR(255) not null unique,
    telefone VARCHAR(20) not null,
    coordenada_x DOUBLE precision not null,
    coordenada_y DOUBLE precision not null
);

```
# Instalação Backend
Copie o arquivo .env.example para .env e altere as variáveis de acordo com seu ambiente.
Abra o terminal na pasta api e execute os comandos:
```bash
npm install
npm run start
```

# Instala Frontend
Abra o terminal na pasta web e execute os comandos:
```bash
npm install
npm run start
```

A aplicação pode ser acessada em [http://localhost:3000/](http://localhost:3000/)

import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from 'src/clientes/dto/create-cliente.dto';
import { DatabaseService } from 'src/database/database.service';
import { Cliente } from '../entities/cliente';
import { FindClienteDto } from '../dto/find-cliente.dto';

@Injectable()
export class ClienteRepository {
  constructor(private readonly dbService: DatabaseService) {}

  async create(clienteData: CreateClienteDto): Promise<void> {
    const { nome, email, telefone, coordenadaX, coordenadaY } = clienteData;

    const query =
      'INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5)';
    await this.dbService
      .getPool()
      .query(query, [nome, email, telefone, coordenadaX, coordenadaY]);
  }

  async delete(id: string): Promise<void> {
    const query = 'DELETE FROM clientes WHERE id = $1';
    await this.dbService.getPool().query(query, [id]);
  }

  async findByEmail(email: string): Promise<Cliente | null> {
    const query = 'SELECT * FROM clientes WHERE email = $1';
    const { rows } = await this.dbService.getPool().query(query, [email]);
    return rows.length ? rows[0] : null;
  }

  async findAll(queryData: FindClienteDto = {}): Promise<Cliente[]> {
    const { nome, email, telefone, coordenadaX, coordenadaY } = queryData;
    const filterStatement = [];
    const filterData = [];
    if (nome) {
      filterStatement.push(`nome ilike $${filterData.length + 1}`);
      filterData.push(`%${nome}%`);
    }
    if (email) {
      filterStatement.push(`email ilike $${filterData.length + 1}`);
      filterData.push(`%${email}%`);
    }
    if (telefone) {
      filterStatement.push(`telefone ilike $${filterData.length + 1}`);
      filterData.push(`%${telefone}%`);
    }
    if (coordenadaX) {
      filterStatement.push(
        `cast(coordenada_x as text) ilike $${filterData.length + 1}`,
      );
      filterData.push(`${coordenadaX}%`);
    }
    if (coordenadaY) {
      filterStatement.push(
        `cast(coordenada_y as text) ilike $${filterData.length + 1}`,
      );
      filterData.push(`${coordenadaY}%`);
    }
    const query = `SELECT * FROM clientes ${
      filterStatement.length ? `where ${filterStatement.join(' and ')}` : ''
    } ;`;
    const { rows } = await this.dbService.getPool().query(query, filterData);
    return rows;
  }
}

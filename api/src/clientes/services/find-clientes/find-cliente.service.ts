// src/clientes/clientes.service.ts

import { Injectable } from '@nestjs/common';
import { FindClienteDto } from 'src/clientes/dto/find-cliente.dto';
import { Cliente } from 'src/clientes/entities/cliente';
import { ClienteRepository } from 'src/clientes/repositories/cliente.repository';

@Injectable()
export class FindClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async run(clienteData: FindClienteDto): Promise<Cliente[]> {
    return this.clienteRepository.findAll(clienteData);
  }
}

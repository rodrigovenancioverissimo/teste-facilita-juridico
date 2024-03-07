// src/clientes/clientes.service.ts

import { ConflictException, Injectable } from '@nestjs/common';
import { CreateClienteDto } from 'src/clientes/dto/create-cliente.dto';
import { ClienteRepository } from 'src/clientes/repositories/cliente.repository';

@Injectable()
export class CreateClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async run(clienteData: CreateClienteDto): Promise<void> {
    const existingCliente = await this.clienteRepository.findByEmail(
      clienteData.email,
    );
    if (existingCliente) throw new ConflictException('E-mail already in use');

    return this.clienteRepository.create(clienteData);
  }
}

// src/clientes/clientes.service.ts

import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/clientes/entities/cliente';
import { ClienteRepository } from 'src/clientes/repositories/cliente.repository';
import { ordenarCoordenadas } from '../../../tools/TSP.js';

@Injectable()
export class CalculateRouteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async run(): Promise<Cliente[]> {
    const coordinates = await this.clienteRepository.findAll();
    return ordenarCoordenadas(coordinates);
  }
}

import { Injectable } from '@nestjs/common';
import { ClienteRepository } from 'src/clientes/repositories/cliente.repository';

@Injectable()
export class DeleteClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async run(id: string): Promise<void> {
    return this.clienteRepository.delete(id);
  }
}

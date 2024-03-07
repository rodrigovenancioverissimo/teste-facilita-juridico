import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ClienteRepository } from './repositories/cliente.repository';
import { FindClienteService } from './services/find-clientes/find-cliente.service';
import { CreateClienteService } from './services/create-cliente/create-cliente.service';
import { DeleteClienteService } from './services/delete-cliente/delete-cliente.service';
import { CalculateRouteService } from './services/calculate-route/calculate-route.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    CreateClienteService,
    ClienteRepository,
    FindClienteService,
    DeleteClienteService,
    CalculateRouteService,
  ],
  controllers: [ClientesController],
})
export class ClientesModule {}

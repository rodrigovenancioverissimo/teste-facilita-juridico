import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common';
import { Cliente } from './entities/cliente';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { FindClienteDto } from './dto/find-cliente.dto';
import { CreateClienteService } from './services/create-cliente/create-cliente.service';
import { FindClienteService } from './services/find-clientes/find-cliente.service';
import { DeleteClienteService } from './services/delete-cliente/delete-cliente.service';
import { CalculateRouteService } from './services/calculate-route/calculate-route.service';

@Controller('clientes')
export class ClientesController {
  constructor(
    private readonly createClienteService: CreateClienteService,
    private readonly findClienteService: FindClienteService,
    private readonly deleteClienteService: DeleteClienteService,
    private readonly calculateRouteService: CalculateRouteService,
  ) {}

  @Post()
  create(@Body() clienteData: CreateClienteDto): Promise<void> | void {
    return this.createClienteService.run(clienteData);
  }

  @Delete()
  delete(@Body('id') id: string): Promise<void> | void {
    return this.deleteClienteService.run(id);
  }

  @Get()
  findAll(@Query() query: FindClienteDto): Promise<Cliente[]> | Cliente[] {
    return this.findClienteService.run(query);
  }

  @Get('calculate-route')
  calculateRoute(): Promise<Cliente[]> | Cliente[] {
    return this.calculateRouteService.run();
  }
}

import { IsOptional, IsNumberString } from 'class-validator';

export class FindClienteDto {
  @IsOptional()
  nome?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  telefone?: string;

  @IsOptional()
  coordenada_x?: number;

  @IsOptional()
  coordenada_y?: number;
}

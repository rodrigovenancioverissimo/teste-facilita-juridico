import { IsOptional, IsNumberString } from 'class-validator';

export class FindClienteDto {
  @IsOptional()
  nome?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  telefone?: string;

  @IsOptional()
  @IsNumberString()
  coordenadaX?: number;

  @IsOptional()
  @IsNumberString()
  coordenadaY?: number;
}

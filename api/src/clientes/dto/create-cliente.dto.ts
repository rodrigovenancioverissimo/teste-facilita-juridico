import { IsNotEmpty, IsEmail, IsPhoneNumber, IsNumber } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  telefone: string;

  @IsNotEmpty()
  coordenada_x: number;

  @IsNotEmpty()
  coordenada_y: number;
}

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
  @IsNumber()
  coordenadaX: number;

  @IsNotEmpty()
  @IsNumber()
  coordenadaY: number;
}

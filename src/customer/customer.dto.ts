import { IsString, MinLength, MaxLength } from "class-validator";
  
  export class CustomerDto {

    @IsString({ message: 'Não é um nome válido!' })
    @MinLength(3, { message: 'O campo primeiro nome deve ter no mínimo 2 caracteres' })
    @MaxLength(30, { message: 'O campo primeiro nome deve ter no máximo 30 caracteres' })
    firstname: string;

    @IsString({ message: 'Não é um nome válido!' })
    @MinLength(4, { message: 'O campo primeiro nome deve ter no mínimo 4 caracteres' })
    @MaxLength(30, { message: 'O campo primeiro nome deve ter no máximo 30 caracteres' })
    lastname: string;

    @IsString({ message: 'Não é uma data válida!' })
    birth: string;

    @IsString({ message: 'Não é um gênero válido!' })
    gender: string;

    @IsString({ message: 'Não é um número de celular válido!' })
    @MaxLength(20, { message: 'O campo número de celular deve ter no máximo 20 caracteres' })
    cellphone: string;

    @IsString({ message: 'Não é um número de telefone válido!' })
    @MaxLength(20, { message: 'O campo número de telefone deve ter no máximo 20 caracteres' })
    telephone: string;

    @IsString({ message: 'Não é um email válido!' })
    @MaxLength(40, { message: 'O campo email deve ter no máximo 80 caracteres' })
    email: string;

    @IsString({ message: 'Não é um endereço válido!' })
    address: string;

    @IsString({ message: 'Não é um cpf válido!' })
    @MinLength(10, { message: 'O campo cpf deve ter no mínimo 10 caracteres' })
    @MaxLength(12, { message: 'O campo cpf deve ter no máximo 11 caracteres' })
    cpf: string;

    @IsString({ message: 'Não é um rg válido!' })
    @MinLength(8, { message: 'O campo rg deve ter no mínimo 8 caracteres' })
    @MaxLength(12, { message: 'O campo rg deve ter no máximo 12 caracteres' })
    rg: string;

  }
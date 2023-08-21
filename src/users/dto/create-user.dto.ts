import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email do usuario' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome completo do usuario' })
  name: string;

  @IsBoolean()
  @ApiProperty({
    description: 'Define se usuario é administrador',
    default: false,
  })
  admin: boolean;
}

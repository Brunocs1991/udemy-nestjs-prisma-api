import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ description: 'Titulo do Post' })
  @IsString()
  @IsNotEmpty()
  title: string;
  @ApiProperty({ description: 'Conteudo do Post' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'E-mail do autor do Post' })
  @IsEmail()
  authorEmail: string;
}

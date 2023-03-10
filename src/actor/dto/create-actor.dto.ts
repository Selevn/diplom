import { IsOptional, IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateActorDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;

    @IsDateString()
    @ApiProperty()
    birthDate: Date;

    @IsNumber()
    @ApiProperty()
    height: number;

    @IsNumber()
    @ApiProperty()
    weight: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    contacts: string;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional()
    description?: string;

    @IsOptional()
    @IsNumber()
    @ApiPropertyOptional()
    bitMap?: number;
}

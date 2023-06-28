import { IsNumber, IsOptional } from 'class-validator';

export class QueryTypeLandingDto {
	@IsNumber()
	@IsOptional()
	type_landing: number;
}

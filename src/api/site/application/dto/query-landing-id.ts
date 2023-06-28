import { IsNumber } from 'class-validator';

export class QueryLandingIdDto {
	@IsNumber()
	id: number;
}

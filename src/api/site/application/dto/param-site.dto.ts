import { IsNumber } from 'class-validator';

export class ParamsSiteDto {
	@IsNumber()
	id: number;
}

import { IsNotEmpty, IsNumber } from 'class-validator';

export class LandingIdDto {
	@IsNotEmpty()
	@IsNumber()
	id: number;
}

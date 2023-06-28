import { IsNotEmpty, IsOptional, IsBoolean, IsNumber } from 'class-validator';
import { ILanding } from '@landing/domain/interface/landing';

export class LandingCreateDto implements ILanding {
	@IsOptional()
	name: string;

	@IsOptional()
	description: string;

	@IsOptional()
	term_condition: string;

	@IsOptional()
	title: string;

	@IsNumber()
	site_id: number;

	@IsNumber()
	type_product_id: number;

	@IsNumber()
	type_landing_id: number;

	@IsNotEmpty()
	url_path: string;

	@IsBoolean()
	@IsOptional()
	status: boolean;
}

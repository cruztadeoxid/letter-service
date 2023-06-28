import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class LandingUpdate {
	@IsOptional()
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	description: string;

	@IsOptional()
	@IsString()
	term_condition: string;

	@IsOptional()
	@IsString()
	url_path: string;

	@IsOptional()
	@IsString()
	title: string;

	@IsOptional()
	@IsBoolean()
	status: boolean;
}

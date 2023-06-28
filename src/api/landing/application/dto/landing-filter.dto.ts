import { IFilterLanding } from '@landing/domain/interface/filter.landing';
import { Transform } from 'class-transformer';
import { IsBoolean, IsIn, IsOptional, IsPositive } from 'class-validator';
import { format } from 'date-fns';

export class FilterLandingDto implements IFilterLanding {
	@IsOptional()
	@IsPositive()
	site_id: number;

	@IsOptional()
	@IsIn([1, 2, 3])
	type_landing_id: number;

	@IsOptional()
	booking_window_start: string = format(new Date(), 'yyyy-MM-dd');

	@IsOptional()
	booking_window_end: string = format(new Date(), 'yyyy-MM-dd');

	@Transform(({ obj, key }) => {
		const value = obj[key];
		if (typeof value === 'string') {
			return obj[key] === 'true';
		}

		return value;
	})
	@IsBoolean()
	@IsOptional()
	status: boolean;
}

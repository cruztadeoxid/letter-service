import { ISite } from '@site/domain/interface/site.interface';
import { IsString } from 'class-validator';

export class GetSiteDto implements Pick<ISite, 'name'> {
	@IsString()
	name: string;
}

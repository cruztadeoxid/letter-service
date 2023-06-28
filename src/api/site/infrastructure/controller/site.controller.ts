import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetSiteDto } from '@site/application/dto/get-site.dto';
import { ParamsSiteDto } from '@site/application/dto/param-site.dto';
import { QueryLandingIdDto } from '@site/application/dto/query-landing-id';
import { QueryTypeLandingDto } from '@site/application/dto/query-type-landing';
import { SiteService } from '@site/application/service/site.service';
import { ISite } from '../../domain/interface/site.interface';

@Controller('site')
export class SiteController {
	constructor(private readonly siteService: SiteService) {}

	@Get()
	public async getSiteWithLanding(@Query() typeLanding: QueryTypeLandingDto) {
		return await this.siteService.getWithLanding(typeLanding.type_landing);
	}

	@Get(':id')
	public async get(@Param() param: ParamsSiteDto) {
		return await this.siteService.findOne(param.id);
	}

	@Get('autocomplete/:name')
	public async getAutocomplete(@Param() site: GetSiteDto): Promise<ISite[]> {
		return await this.siteService.getAutocomplete(site.name);
	}

	@Get('landing/:id')
	public async getByLanding(@Param() landing: QueryLandingIdDto) {
		return await this.siteService.getByLandingId(landing.id);
	}
}

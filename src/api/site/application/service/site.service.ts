import { Injectable } from '@nestjs/common';
import { ISite } from '@site/domain/interface/site.interface';
import { SiteRepository } from '@site/infrastructure/repository/site.repository';

@Injectable()
export class SiteService {
	constructor(private readonly siteRespository: SiteRepository) {}

	public async findOne(siteId: number) {
		return this.siteRespository.findOne(siteId);
	}
	public async getAutocomplete(name: string): Promise<ISite[]> {
		return await this.siteRespository.getAutocomplete(name);
	}

	public async getWithLanding(typeLandingId: number): Promise<ISite[]> {
		return await this.siteRespository.getWithLanding(typeLandingId);
	}

	public async getByLandingId(landingId: number): Promise<ISite> {
		return await this.siteRespository.getByLanidngId(landingId);
	}

	public async getAutocompleteUrl(domain: string, path: string): Promise<ISite> {
		return await this.siteRespository.getAutocompleteUrl(domain, path);
	}
}

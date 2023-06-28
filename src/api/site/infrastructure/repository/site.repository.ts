import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from '@site/domain/entity/site.entity';
import { ISite } from '../../domain/interface/site.interface';
import { IsNull, Like, Not, Repository } from 'typeorm';

@Injectable()
export class SiteRepository {
	constructor(
		@InjectRepository(Site) private readonly siteRespository: Repository<Site>
	) {}

	public async findOne(siteId: number): Promise<ISite> {
		return await this.siteRespository.findOne({
			select: {
				landing: {
					id: true,
					url_path: true,
					title: true,
					type_landing_id: true,
					status: true
				}
			},
			where: {
				id: siteId
			},
			relations: {
				landing: true
			}
		});
	}

	public async getAutocomplete(name: string): Promise<ISite[]> {
		return await this.siteRespository.findBy({
			name: Like(`%${name}%`)
		});
	}

	public async getAutocompleteUrl(domain: string, path: string): Promise<ISite> {
		return await this.siteRespository.findOne({
			where: {
				url: Like(`%${domain}%`),
				landing: {
					url_path: path
				}
			},
			relations: {
				landing: true
			}
		});
	}

	public async getByLanidngId(landingId: number): Promise<ISite> {
		return await this.siteRespository.findOne({
			where: {
				landing: {
					id: landingId
				}
			}
		});
	}

	public async getWithLanding(typeLandingId: number): Promise<ISite[]> {
		return await this.siteRespository.find({
			select: {
				landing: {}
			},
			where: {
				landing: {
					id: Not(IsNull()),
					type_landing: {
						id: typeLandingId
					}
				}
			},
			relations: {
				landing: true
			}
		});
	}
}

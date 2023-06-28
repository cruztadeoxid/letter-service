import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { ISite } from '../../domain/interface/site.interface';
import { Landing } from '@landing/domain/entity/landing.entity';

@Entity({ name: 'sitios' })
export class Site implements ISite {
	@PrimaryColumn({ name: 'sitio_id' })
	id: number;

	@Column({ name: 'sitio_nombre' })
	name: string;

	@Column({ name: 'sitio_url' })
	url: string;

	@Column({ name: 'sitio_prefijo' })
	prefix: string;

	@OneToMany(() => Landing, (landing) => landing.site)
	landing: Landing[];
}

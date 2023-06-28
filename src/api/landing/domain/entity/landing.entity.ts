import { Site } from '@site/domain/entity/site.entity';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn
} from 'typeorm';
import { TypeLanding } from './type_landing.entity';
import { ILanding } from '../interface/landing';

@Entity({ name: 'cms_landing' })
export class Landing implements ILanding {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	term_condition: string;

	@Column()
	url_path: string;

	@Column()
	title: string;

	@Column()
	site_id: number;

	@Column()
	type_product_id: number;

	@Column({ name: 'cms_type_landing_id' })
	type_landing_id: number;

	@Column()
	status?: boolean;

	@ManyToOne(() => Site, (site) => site.landing)
	@JoinColumn({ name: 'site_id' })
	site?: Site;

	@ManyToOne(() => TypeLanding, (type_landing) => type_landing.landing)
	@JoinColumn({ name: 'cms_type_landing_id' })
	type_landing?: TypeLanding;
}

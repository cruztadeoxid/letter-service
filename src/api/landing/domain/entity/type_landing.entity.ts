import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ITypeLanding } from '../interface/type-landing';
import { Landing } from './landing.entity';

@Entity({ name: 'cms_type_landing' })
export class TypeLanding implements ITypeLanding {
	@PrimaryColumn()
	id?: number;

	@Column()
	name: string;

	@Column()
	status: boolean;

	@OneToMany(() => Landing, (landing) => landing.type_landing)
	landing?: Landing[];
}

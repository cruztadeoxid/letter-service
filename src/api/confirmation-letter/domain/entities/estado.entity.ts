import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('estado')
export class Estado {
	@PrimaryGeneratedColumn({ name: 'estado_id' })
	id: string;

	@Column({ name: 'pais_id' })
	country_id: number;

	@Column({ name: 'estado_nombre_ing' })
	state_name_en: string;

	@Column({ name: 'estado_nombre_esp' })
	state_name_es: string;

	@Column({ name: 'folio' })
	folio: string;

	@Column({ name: 'estado_id_mit' })
	state_id_mit: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cliente')
export class Cliente {
	@PrimaryGeneratedColumn({ name: 'cliente_id' })
	id: number;

	@Column({ name: 'cliente_nombre', length: 30 })
	name: string;

	@Column({ name: 'cliente_apellido', length: 30 })
	last_name: string;

	@Column({ name: 'cliente_genero', length: 30, select: false })
	genero: string;

	@Column({ name: 'cliente_email', length: 100 })
	email: string;

	@Column({ name: 'cliente_pais', length: 30, select: false })
	country: string;

	@Column({ name: 'cliente_username', length: 30, select: false })
	username: string;

	@Column({ name: 'cliente_password', length: 30, select: false })
	password: string;

	@Column({ name: 'cliente_activo', select: false })
	activo: number;

	@Column({ name: 'cliente_mailing', select: false })
	mailing: number;

	@Column({ name: 'cliente_domicilio', length: 100, select: false })
	domicile: string;

	@Column({ name: 'cliente_nacimiento', length: 100, select: false })
	birthplace: string;

	@Column({ name: 'cliente_pais_n', length: 30, select: false })
	country_n: string;

	@Column({ name: 'cliente_ciudad', length: 100 })
	city: string;

	@Column({ name: 'cliente_estado', length: 100 })
	state: string;

	@Column({ name: 'cliente_postal_code', length: 20 })
	postal_code: string;

	@Column({ name: 'cliente_comentario', select: false })
	comment: string;

	@Column({ name: 'cliente_contacto', length: 100, select: false })
	contact: string;

	@Column({ name: 'cliente_contacto_opcion', length: 100, select: false })
	contact_option: string;

	@Column({ name: 'cliente_id_campana', select: false })
	campana_id: number;

	@Column({ name: 'api_token', length: 100, select: false })
	api_token: string;

	@Column({ name: 'provider', length: 100, select: false })
	provider: string;

	@Column({ name: 'remember_token', select: false })
	remember_token: string;

	@Column({ name: 'provider_id', select: false })
	provider_id: string;

	@Column({ name: 'register_email', select: false })
	register_email: number;

	@Column({ name: 'site_id', select: false })
	site_id: number;

	@Column({ name: 'fecha_creacion', type: 'datetime', select: false })
	createdAt: string;
}

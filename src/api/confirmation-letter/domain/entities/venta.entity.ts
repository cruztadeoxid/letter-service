import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn
} from 'typeorm';
import { Cliente } from './cliente.entity';
import { VentaDescripcion } from './venta-descripcion.entity';
import { TourDescripcion } from './tour-descripcion.entity';
import { VentaPagos } from './venta-pagos.entity';

@Entity({ name: 'venta' })
export class Venta {
	@PrimaryGeneratedColumn({ name: 'venta_id' })
	id: number;

	@Column({ name: 'venta_moneda' })
	sale_coin: string;

	@Column({ name: 'venta_total' })
	total_sale: string;

	@Column({ name: 'venta_site_id' })
	site_id: number;

	@OneToOne(() => Cliente)
	@JoinColumn({
		name: 'venta_user_id'
	})
	cliente: Cliente;

	@OneToMany(() => VentaDescripcion, (venta) => venta.venta)
	@JoinColumn({ name: 'venta_id' })
	venta_descripcion: VentaDescripcion[];

	@OneToMany(() => VentaPagos, (venta) => venta.venta)
	@JoinColumn({ name: 'venta_id' })
	venta_pagos: VentaPagos[];
}

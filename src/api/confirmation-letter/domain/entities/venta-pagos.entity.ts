import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn
} from 'typeorm';
import { Venta } from './venta.entity';

@Entity('venta_pagos')
export class VentaPagos {
	@PrimaryGeneratedColumn({ name: 'pago_id' })
	id: number;

	@Column({ name: 'monto' })
	amount: number;

	@Column({ name: 'pago_auth' })
	auth_payment: string;

	@Column({ name: 'afiliacion_banco' })
	bank_affiliation: string;

	@Column({ name: 'num_tarjeta' })
	number_card: string;

	@Column({ name: 'pago_pay' })
	pay_description: string;

	@ManyToOne(() => Venta, (venta) => venta.venta_pagos)
	@JoinColumn({ name: 'venta_id' })
	venta: Venta;
}

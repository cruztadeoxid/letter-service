import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn
} from 'typeorm';
import { Venta } from './venta.entity';
import { VentaDescripcion } from './venta-descripcion.entity';

@Entity('tour_descripcion')
export class TourDescripcion {
	@PrimaryGeneratedColumn({ name: 'descripcion_id' })
	id: number;

	@Column({ name: 'descripcion_inclusiones' })
	inclusions: string;

	@Column({ name: 'descripcion_exclusiones' })
	exclusions: string;

	@Column({ name: 'descripcion_regulaciones' })
	regulations: string;

	@Column({ name: 'descripcion_politicas' })
	politics: string;

	// @ManyToOne(() => VentaDescripcion, (venta) => venta.tour_descripcion)
	// @JoinColumn({
	// 	name: 'descripcion_tour'
	// })
	// venta_descripcion: VentaDescripcion;
}

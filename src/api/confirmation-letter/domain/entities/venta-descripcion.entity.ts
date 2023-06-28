import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn
} from 'typeorm';
import { Venta } from './venta.entity';
import { TourDescripcion } from './tour-descripcion.entity';

@Entity('venta_descripcion')
export class VentaDescripcion {
	@PrimaryGeneratedColumn({ name: 'descripcion_id' })
	id: number;

	@Column({ name: 'descripcion_venta' })
	sale: number;

	@Column({ name: 'descripcion_fecha', type: 'datetime' })
	createdAt: string;

	@Column({ name: 'descripcion_adultos' })
	adults: number;

	@Column({ name: 'descripcion_cuartos' })
	rooms: number;

	@Column({ name: 'descripcion_fecha1', type: 'date' })
	date1: string;

	@Column({ name: 'descripcion_fecha2', type: 'date' })
	date2: string;

	@Column({ name: 'descripcion_precio' })
	price: number;

	@Column({ name: 'descripcion_producto', length: 200 })
	product: string;

	@Column({ name: 'descripcion_tarifa' })
	tariff: string;

	@Column({ name: 'descripcion_total' })
	total: number;

	@Column({ name: 'descripcion_total_mxn' })
	total_mxn: number;

	@Column({ name: 'descripcion_total_usd' })
	total_usd: number;

	@Column({ name: 'descripcion_brief' })
	brief: string;

	@Column({ name: 'descripcion_menores' })
	minors: number;

	@Column({ name: 'descripcion_tipo_producto' })
	type_product: number;

	@Column({ name: 'descripcion_tarifa_id' })
	tariff_id: string;

	@Column({ name: 'descripcion_producto_id' })
	product_id: string;

	@Column({ name: 'descripcion_servicio_id' })
	service_id: string;

	@Column({ name: 'descripcion_reservable' })
	reservable: number;

	@Column({ name: 'descripcion_pagado' })
	paid: number;

	@Column({ name: 'descripcion_proveedor' })
	provider: number;

	@Column({ name: 'descripcion_vuelo1' })
	vuelo1: string;

	@Column({ name: 'descripcion_vuelo2' })
	vuelo2: string;

	@Column({ name: 'descripcion_servicio_ini' })
	service_ini: string;

	@Column({ name: 'descripcion_infantes' })
	infants: string;

	@Column({ name: 'descripcion_hotel1' })
	hotel1: string;

	@Column({ name: 'descripcion_hotel1_id' })
	hotel1_id: number;

	@Column({ name: 'descripcion_hotel2' })
	hotel2: string;

	@Column({ name: 'descripcion_hotel2_id' })
	hotel2_id: number;

	@Column({ name: 'descripcion_destino' })
	destiny: number;

	@Column({ name: 'descripcion_itinerary' })
	itinerary: string;

	@Column({ name: 'descripcion_add_val_1' })
	add_val1: string;

	@Column({ name: 'descripcion_add_val_2' })
	add_val2: string;

	@Column({ name: 'descripcion_thumb' })
	thumb: string;

	@Column({ name: 'descripcion_serialized' })
	serialized: string;

	@Column({ name: 'descripcion_hora_llegada_vuelo1' })
	flight_arrival_time1: string;

	@Column({ name: 'descripcion_num_vuelo1' })
	flight_num1: string;

	@Column({ name: 'descripcion_linea_area1' })
	flight_line1: string;

	@Column({ name: 'descripcion_linea_area1_id' })
	flight_line1_id: string;

	@Column({ name: 'descripcion_hora_llegada_vuelo2' })
	flight_arrival_time2: string;

	@Column({ name: 'descripcion_num_vuelo2' })
	flight_num2: string;

	@Column({ name: 'descripcion_linea_area2' })
	flight_line2: string;

	@Column({ name: 'descripcion_linea_area2_id' })
	flight_line2_id: string;

	@Column({ name: 'observaciones' })
	observations: string;

	@Column({ name: 'hotel_huesped' })
	guest_hotel: string;

	@Column({ name: 'descripcion_promo_id' })
	promotion_id: number;

	@Column({ name: 'valor_agregado' })
	value_add: string;

	@Column({ name: 'telefono' })
	phone: string;

	@Column({ name: 'tipo_translado' })
	translate_type: number;

	@Column({ name: 'promocode_text' })
	promotion_name: string;

	@Column({ name: 'proveedor_info' })
	info_provider: string;

	@Column({ name: 'descripcion_confirmacion' })
	confirmation: string;

	@ManyToOne(() => Venta, (venta) => venta.venta_descripcion)
	@JoinColumn({ name: 'descripcion_venta' })
	venta: Venta;

	// @ManyToMany(() => TourDescripcion)
	// @JoinTable({ name: 'tour_descripcion' })
	// tour_descripcion: TourDescripcion[];

	// @OneToOne(() => TourDescripcion)
	// @JoinColumn({ name: 'descripcion_producto_id' })
	// tour_descripcion: TourDescripcion;
}

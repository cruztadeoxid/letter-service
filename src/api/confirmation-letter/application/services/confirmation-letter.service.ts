import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Venta } from '../../domain/entities/venta.entity';
import { ConfirmationLetterResponse } from '../../domain/interface/confirmation-letter-response';
import { TourDescripcion } from '../../domain/entities/tour-descripcion.entity';
import { SiteService } from '@site/application/service/site.service';
import { Estado } from '../../domain/entities/estado.entity';
import { ConfirmationLetterRequest } from '../../domain/interface/confirmation-letter-request';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ConfirmationLetterService {
	private entityManagerRepository: EntityManager;
	constructor(
		@InjectRepository(Venta)
		private ventaRepository: Repository<Venta>,
		@InjectRepository(TourDescripcion)
		private tourDescripcionRepository: Repository<TourDescripcion>,
		@InjectRepository(Estado)
		private estadoRepository: Repository<Estado>,
		private readonly siteService: SiteService
	) {}

	async getData(confirmationLetter: ConfirmationLetterRequest) {
		const { venta_id } = confirmationLetter;

		//return venta_id;

		return await this.ventaRepository.manager.transaction(
			async (repository: EntityManager) => {
				this.entityManagerRepository = repository;

				const venta = await this.getVenta(venta_id);

				if (venta) {
					const {
						id,
						sale_coin,
						total_sale,
						cliente,
						venta_descripcion,
						venta_pagos,
						site_id
					} = venta;
					const {
						city,
						email,
						id: id_client,
						last_name,
						postal_code,
						name,
						state
					} = cliente;
					const [venta_d] = venta_descripcion;
					const [venta_p] = venta_pagos;
					const {
						id: id_venta_descripcion,
						adults,
						createdAt,
						minors,
						date1,
						hotel1,
						info_provider,
						product,
						product_id,
						promotion_name,
						tariff,
						thumb,
						total
					} = venta_d;

					const {
						amount,
						auth_payment,
						bank_affiliation,
						id: id_venta_pago,
						number_card,
						pay_description
					} = venta_p;

					const site = await this.siteService.findOne(site_id);
					const lenguage = !site.url.includes('.mx') ? 1 : 2;

					const [product_info] = await this.getProducInfo(+product_id, lenguage);
					let state_name = null;
					if (state) {
						const [state_client] = await this.getStateInfo(state);

						state_name = state_client.e_estado_nombre_ing;
					}

					const date = new Date(createdAt);
					const dateMonth =
						(date.getMonth() + 1).toString().length < 2
							? `0${date.getMonth() + 1}`
							: `${date.getMonth() + 1}`;
					const dateDay =
						date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

					const reservation_code = `${site.prefix}-${adults}${dateMonth}${id_venta_descripcion}${dateDay}`;

					const response: ConfirmationLetterResponse = {
						sale: {
							id,
							currency: sale_coin,
							total_sale,
							reservation_code
						},
						client: {
							city,
							email,
							id: id_client,
							last_name,
							name,
							postal_code,
							state: state_name
						},
						admissions_description: {
							exclusions: product_info.t_descripcion_exclusiones,
							inclusions: product_info.t_descripcion_inclusiones,
							politics: product_info.t_descripcion_politicas,
							regulations: product_info.t_descripcion_regulaciones
						},
						admissions: {
							adults,
							date1,
							hotel1,
							id: id_venta_descripcion,
							provider: info_provider,
							minors,
							product,
							product_id,
							promotion_code: promotion_name,
							service: tariff,
							thumb,
							total
						},
						payment: {
							amount,
							auth_payment,
							bank_affiliation,
							id: id_venta_pago,
							number_card
						}
					};

					return response;
				} else {
					throw new RpcException(`There is no record with the id:${venta_id}`);
				}
			}
		);
	}

	private async getProducInfo(_idProduct: number, lenguage: number) {
		return this.tourDescripcionRepository
			.createQueryBuilder('t')
			.where('descripcion_tour = :_idProduct AND descripcion_idioma = :lenguage', {
				_idProduct,
				lenguage
			})
			.getRawMany();
	}

	private async getStateInfo(_folioCountry: string) {
		return this.estadoRepository
			.createQueryBuilder('e')
			.where('folio = :_folioCountry', {
				_folioCountry
			})
			.getRawMany();
	}

	async getVenta(_id: number) {
		try {
			return await this.ventaRepository.findOne({
				select: {
					id: true,
					sale_coin: true,
					total_sale: true,
					site_id: true,
					venta_descripcion: {
						id: true,
						product: true,
						product_id: true,
						tariff: true,
						total: true,
						adults: true,
						minors: true,
						date1: true,
						hotel1: true,
						thumb: true,
						info_provider: true,
						promotion_name: true,
						createdAt: true
					}
				},
				where: [
					{
						id: _id,
						venta_pagos: {
							pay_description: 'OKMORE'
						}
					}
				],
				relations: {
					cliente: true,
					venta_descripcion: true,
					venta_pagos: true
				}
			});
		} catch (error) {
			throw new RpcException(`There is no record`);
		}
	}
}

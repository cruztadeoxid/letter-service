import { Module } from '@nestjs/common';
import { SiteModule } from '@site/site.module';
import { ConfigModule } from '@nestjs/config';
import { ConfirmationLetterService } from './application/services/confirmation-letter.service';
import { CorfimationLetterController } from './infrastructure/controller/confirmation-letter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './domain/entities/cliente.entity';
import { VentaDescripcion } from './domain/entities/venta-descripcion.entity';
import { TourDescripcion } from './domain/entities/tour-descripcion.entity';
import { VentaPagos } from './domain/entities/venta-pagos.entity';
import { Venta } from './domain/entities/venta.entity';
import { Estado } from './domain/entities/estado.entity';

@Module({
	imports: [
		SiteModule,
		ConfigModule.forRoot(),
		TypeOrmModule.forFeature([
			Cliente,
			VentaDescripcion,
			TourDescripcion,
			VentaPagos,
			Venta,
			Estado
		])
	],
	controllers: [CorfimationLetterController],
	providers: [ConfirmationLetterService]
})
export class ConfirmationLetterModule {}

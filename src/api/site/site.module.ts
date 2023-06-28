import { Module } from '@nestjs/common';
import { SiteController } from './infrastructure/controller/site.controller';
import { SiteRepository } from './infrastructure/repository/site.repository';
import { SiteService } from './application/service/site.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './domain/entity/site.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Site])],
	controllers: [SiteController],
	providers: [SiteRepository, SiteService],
	exports: [SiteService]
})
export class SiteModule {}

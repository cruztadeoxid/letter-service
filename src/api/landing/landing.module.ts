import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Landing } from './domain/entity/landing.entity';
import { TypeLanding } from './domain/entity/type_landing.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Landing, TypeLanding])],
	controllers: [],
	providers: []
})
export class LandingModule {}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigService } from './environment-config.service';

@Module({
	imports: [ConfigModule.forRoot()],
	providers: [EnvironmentConfigService],
	exports: [EnvironmentConfigService]
})
export class EnvironmentConfigModule {}

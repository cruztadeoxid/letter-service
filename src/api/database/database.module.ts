/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from './infrastructure/enviroment/environment-config.module';
import { EnvironmentConfigService } from './infrastructure/enviroment/environment-config.service';
import { getTypeOrmModuleOptionsAdmin, getTypeOrmModuleOptionsExtranet, getTypeOrmModuleOptionsWeb } from './infrastructure/typeorm.options';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptionsAdmin,
    }),
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      name: 'web',
      useFactory: getTypeOrmModuleOptionsWeb,
    }),
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      name: 'extranet',
      useFactory: getTypeOrmModuleOptionsExtranet,
    }),
  ],
})
export class ConnectionDatabaseModule {}

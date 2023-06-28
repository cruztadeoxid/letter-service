/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from './enviroment/environment-config.service';

export const getTypeOrmModuleOptionsAdmin = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: config.geDatabaseType(),
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    autoLoadEntities: true,
    logging: true,
  } as TypeOrmModuleOptions);

export const getTypeOrmModuleOptionsWeb = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: config.geDatabaseType(),
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseNameWeb(),
    autoLoadEntities: true,
    logging: true,
  } as TypeOrmModuleOptions);

export const getTypeOrmModuleOptionsExtranet = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: config.geDatabaseType(),
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseNameExtranet(),
    autoLoadEntities: true,
    logging: true,
  } as TypeOrmModuleOptions);

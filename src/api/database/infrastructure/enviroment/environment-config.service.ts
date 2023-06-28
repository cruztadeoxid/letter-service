/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './environment-config.entity';
@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private configService: ConfigService) {}
  getJwtSecret(): string {
    return this.configService.get<string>('SECRET_KEY');
  }

  getJwtExpirationTime(): string {
    return this.configService.get<string>('TOKEN_EXPIRATION_TIME');
  }

  getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  getDatabasePort(): number {
    return this.configService.get<number>('DATABASE_PORT');
  }

  getDatabaseUser(): string {
    return this.configService.get<string>('DATABASE_USER');
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  geDatabaseType(): string {
    return this.configService.get<string>('DATABASE_TYPE');
  }

  getDatabaseNameWeb(): string {
    return this.configService.get<string>('DATABASE_NAME_WEB');
  }

  getDatabaseNameExtranet(): string {
    return this.configService.get<string>('DATABASE_NAME_EXTRANET');
  }
}

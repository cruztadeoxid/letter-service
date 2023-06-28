import { Module } from '@nestjs/common';
import { ConfirmationLetterModule } from './api/confirmation-letter/confirmation-letter.module';
import { SiteModule } from '@site/site.module';
import { EnvironmentConfigModule } from './api/database/infrastructure/enviroment/environment-config.module';
import { ConnectionDatabaseModule } from './api/database/database.module';
import { LandingModule } from '@landing/landing.module';

@Module({
	imports: [
		ConfirmationLetterModule,
		SiteModule,
		EnvironmentConfigModule,
		ConnectionDatabaseModule,
		LandingModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}

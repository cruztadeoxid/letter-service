import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		AppModule,
		{
			transport: Transport.RMQ,
			options: {
				urls: [
					`amqps://${process.env.USERMQ}:${process.env.PASSWORDMQ}@${process.env.AQUANICKSERVICEURL}:${process.env.PORTMQ}`
				],
				queue: 'carta-confirma',
				queueOptions: {
					durable: true
				}
			}
		}
	);
	await app.listen();
}
bootstrap();

import { Controller } from '@nestjs/common';
import { ConfirmationLetterService } from '../../application/services/confirmation-letter.service';
import { MessagePattern } from '@nestjs/microservices';
import { ConfirmationLetterRequest } from '../../domain/interface/confirmation-letter-request';

@Controller('carta-confirma')
export class CorfimationLetterController {
	constructor(
		private readonly confirmationLetterService: ConfirmationLetterService
	) {}
	@MessagePattern('GET_CONFIRMATION')
	async getConfirmation(confirmationRequest: ConfirmationLetterRequest) {
		return await this.confirmationLetterService.getData(confirmationRequest);
	}
}

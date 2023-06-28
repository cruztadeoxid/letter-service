import { Injectable } from '@nestjs/common';
import { ILanding } from '../interface/landing';

@Injectable()
export abstract class LandingRespository {
	abstract create(newLanding: ILanding): Promise<ILanding>;
}

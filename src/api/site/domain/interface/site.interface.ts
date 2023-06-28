import { ILanding } from '@landing/domain/interface/landing';

export interface ISite {
	id?: number;
	name: string;
	url: string;
	prefix?: string;
	landing?: ILanding[];
}

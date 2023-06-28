import { ITypeLanding } from './type-landing';

export interface ILanding {
	id?: number;
	name: string;
	description: string;
	term_condition: string;
	title: string;
	url_path: string;
	site_id: number;
	type_product_id: number;
	type_landing_id: number;
	type_landing?: ITypeLanding;
	status?: boolean;
}

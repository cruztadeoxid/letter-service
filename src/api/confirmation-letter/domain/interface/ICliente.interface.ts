export interface ICliente {
	id: number;
	name: string;
	last_name: string;
	email: string;
	city: string;
	state: string | null;
	postal_code: string;
}

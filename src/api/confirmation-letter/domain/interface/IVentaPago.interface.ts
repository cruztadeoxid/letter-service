export interface IVentaPago {
	id: number;
	amount: number;
	auth_payment: string;
	bank_affiliation: string;
	number_card: string;
}

import { ICliente } from './ICliente.interface';
import { ITourDescripcion } from './ITourDescripcion.interface';
import { IVenta } from './IVenta.interface';
import { IVentaDescripcion } from './IVentaDescripcion.interface';
import { IVentaPago } from './IVentaPago.interface';

export interface ConfirmationLetterResponse {
	sale: IVenta;
	client: ICliente;
	admissions?: IVentaDescripcion;
	admissions_description?: ITourDescripcion;
	payment?: IVentaPago;
}

import jwt_decode from "jwt-decode";

export const parseJWT = (token) => {
	const decoded = jwt_decode(token);
	return decoded;
}

export const isValidEInvoiceQR = (eInvoice) => {
	return eInvoice && eInvoice?.iss && eInvoice.iss === 'NIC';
};
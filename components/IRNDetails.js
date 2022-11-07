import { Text, View } from "react-native";
import InvoiceRow from "./InvoiceRow";

const IRNDetails = ({eInvoice}) => {
	return(
		<>
			<Text>IRN Details...</Text>
			<InvoiceRow
				label="Seller GSTIN"
				value={eInvoice?.SellerGstin}
				isOdd={true}
			/>
			<InvoiceRow
				label="Buyer GSTIN"
				value={eInvoice?.BuyerGstin}
				isOdd={false}
			/>
			<InvoiceRow
				label="Document No."
				value={eInvoice?.DocNo}
				isOdd={true}
			/>
			<InvoiceRow
				label="Document Date"
				value={eInvoice?.DocDt}
				isOdd={false}
			/>
			<InvoiceRow
				label="Document Type"
				value={eInvoice?.DocTyp}
				isOdd={true}
			/>
			<InvoiceRow
				label="Main HSN Code"
				value={eInvoice?.MainHsnCode}
				isOdd={false}
			/>
			<InvoiceRow
				label="Line Items"
				value={eInvoice?.ItemCnt}
				isOdd={true}
			/>
			<InvoiceRow
				label="Invoice Reference Number"
				value={eInvoice?.Irn}
				isOdd={false}
			/>
			<InvoiceRow
				label="Invoice Amount"
				value={eInvoice?.TotInvVal}
				isOdd={true}
			/>
		</>
	);
};

export default IRNDetails;
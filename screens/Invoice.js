import { Text, View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';
import IRNDetails from "../components/IRNDetails";
import { parseJWT } from "../utils/qrcode";

const Invoice = ({route}) => {
	const eInvoice = JSON.parse(route?.params?.eInvoice?.data);

	if(!eInvoice) {
		return(
			<View style={styles.screen}>
				<LottieView
					autoPlay
					source={require("../assets/404.json")}
				/>
			</View>
		);
	}

	return(
		<View style={styles.screen}>
			<Text style={styles.pageTitle}>Invoice Details</Text>
			<IRNDetails eInvoice={eInvoice} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#000000'
	},
	pageTitle: {
		color: '#FFFFFF',
		fontSize: 20,
		textAlign: 'center',
		marginTop: 20
	}
});

export default Invoice;
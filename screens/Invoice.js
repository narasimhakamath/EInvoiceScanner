import { Text, View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';

const Invoice = ({eInvoice}) => {
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
		<View>
			<Text>INVOICE SCREEN</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#000000'
	}
});

export default Invoice;
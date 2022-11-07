import { Text, View, StyleSheet, Alert } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { isValidEInvoiceQR, parseJWT } from "../utils/qrcode";
import { useIsFocused } from "@react-navigation/native";


const Scanner = ({navigation}) => {
	const isFocused = useIsFocused();

	const scannerHandler = ({data}) => {
		if(data) {
			const eInvoice = parseJWT(data);
			const isValid = isValidEInvoiceQR(eInvoice);
			if(isValid) {
				navigation.navigate('InvoiceScreen', {eInvoice});
			}
		}
	}

	return(
		<View style={styles.screen}>
			<Text>TOP</Text>
			<View style={styles.cameraContainer}>
				<Camera
					type={CameraType.back}
					style={styles.camera}
					barCodeScannerSettings={{barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]}}
					ratio={'1:1'}
					onBarCodeScanned={scannerHandler}
				/>
			</View>
			<Text style={styles.text}>SCAN QR CODE</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#000000',
		justifyContent: 'center',
	},
	cameraContainer: {
		width: '100%',
		height: '50%',
	},
	camera: {
		width: '100%',
		height: '100%'
	},
	text: {
		color: '#FFFFFF',
		textAlign: 'center',
		paddingTop: 10,
	}
});

export default Scanner;
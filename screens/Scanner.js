import { Text, View, StyleSheet, Alert } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';


const Scanner = () => {
	const scannerHandler = ({type, data}) => {
		Alert.alert("SCANNED SUCCESSFULLY...");
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
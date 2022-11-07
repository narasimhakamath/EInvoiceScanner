import { Text, View, StyleSheet } from "react-native";

const InvoiceRow = ({label, value, isOdd}) => {
	return(
		<View style={[styles.row, isOdd ? styles.oddBG : styles.evenBG]}>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.value}>{value}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		paddingVertical: 15,
		marginHorizontal: 10,
		borderRadius: 5
	},
	oddBG: {
		backgroundColor: "#95a5a6"
	},
	evenBG: {
		backgroundColor: "#7f8c8d"
	},
	label: {
		flex: 3,
		fontSize: 18,
		color: '#FFFFFF',
		alignSelf: 'center',
		marginLeft: 10,
	},
	value: {
		flex: 4,
		fontSize: 18,
		fontWeight: 'bold',
		color: '#FFFFFF',
		marginRight: 10
	}
});

export default InvoiceRow;
import { createStackNavigator } from '@react-navigation/stack';
import Scanner from '../screens/Scanner';
import Invoice from '../screens/Invoice';

const Stack = createStackNavigator();

const InvoiceStack = () => {
	return(
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen
				name="ScannerScreen"
				component={Scanner}
			/>
			<Stack.Screen
				name="InvoiceScreen"
				component={Invoice}
			/>
		</Stack.Navigator>
	);
};

export default InvoiceStack;
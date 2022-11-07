import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import InvoiceStack from './InvoiceStack';
import { Ionicons } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
	return(
		<Drawer.Navigator
			screenOptions={{
				drawerStyle: {
					backgroundColor: '#000000',
					activeTintColor: '#FFFFFF'
				},
				drawerActiveBackgroundColor: '#FFFFFF',
				drawerActiveTintColor: '#000000',
				drawerInactiveTintColor: '#FFFFFF',
				headerStyle: {
					backgroundColor: '#000000',
				},
				headerTintColor: '#FFFFFF'
			}}
		>
			<Drawer.Screen
				name="InvoiceStack"
				component={InvoiceStack}
				options={{
					title: 'Scan',

					drawerIcon: ({focused}) => <Ionicons focused name="scan" size={24} color={focused ? "#000000" : "#FFFFFF"} />
				}}
			/>
			<Drawer.Screen
				name="AboutScreen"
				component={About}
				options={{
					title: 'About',
					drawerIcon: ({focused}) => <Ionicons focused name="information-circle-outline" size={24} color={focused ? "#000000" : "#FFFFFF"} />
				}}
			/>
		</Drawer.Navigator>
	);
};

export default AppDrawer;
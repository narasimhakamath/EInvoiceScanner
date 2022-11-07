import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AppDrawer from './navigators/AppDrawer';

export default function App() {
	return(
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<AppDrawer/>
			</NavigationContainer>
		</>
	);
}
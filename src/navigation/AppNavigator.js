import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RobotDetailScreen from '../screens/RobotDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

export default class AppNavigator extends Component {
  render() {
    return (
      <View>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
            <Stack.Screen name="RobotDetail" component={RobotDetailScreen} options={{ title: 'Detalle del Robot' }} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configuraciones' }} />
        </Stack.Navigator>
      </View>
    )
  }
}

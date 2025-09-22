import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import TripPlanner from './screens/TripPlanner';
import SOSHistory from './screens/SOSHistory';
import Settings from './screens/Settings';

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  TripPlanner: undefined;
  SOSHistory: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TripPlanner" component={TripPlanner} />
        <Stack.Screen name="SOSHistory" component={SOSHistory} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

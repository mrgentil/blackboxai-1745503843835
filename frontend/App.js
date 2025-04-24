import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import ExpensesScreen from './screens/ExpensesScreen';
import DashboardScreen from './screens/DashboardScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Dépenses') {
              iconName = 'wallet';
            } else if (route.name === 'Tableau de bord') {
              iconName = 'chart-bar';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4F46E5',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Dépenses" component={ExpensesScreen} />
        <Tab.Screen name="Tableau de bord" component={DashboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

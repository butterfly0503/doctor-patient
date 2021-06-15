/**
 * Doctor-Patient Assistant App
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, View} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { mainTheme } from './app/themes';
import { BTDrawerNavigator } from './app/globals/components/BTDrawerMenu';
import { agentRoutes } from './app/routes/routes';

import { PatientList } from './app/components/agent';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go to notifications"
      />
    </View>
  );
}

export default function App() {

  const Drawer = createDrawerNavigator();
  const drawerOptions = {openByDefault:true, initialRouteName:"Home", routes:agentRoutes}

  return (
    <ThemeProvider theme={mainTheme}>
      <NavigationContainer>
        <BTDrawerNavigator {...drawerOptions}>
          <Drawer.Screen name="Dashboard" component={PatientList} options={{drawerLabel: 'Dashboard'}}/>
          <Drawer.Screen name="Profile" component={HomeScreen} options={{drawerLabel: 'Agent Info'}}/>
        </BTDrawerNavigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
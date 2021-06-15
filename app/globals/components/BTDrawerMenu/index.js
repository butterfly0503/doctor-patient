import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {BTDrawerContent} from './DrawerContent';
import {BTDrawerItem} from './DrawerItem';

const Drawer = createDrawerNavigator();

const BTDrawerNavigator = (props) => {
  const routes = props.routes;
  return (
    <Drawer.Navigator {...props} drawerContent={(props)=><BTDrawerContent {...props} routes={routes}/>}>
      {props.children}
    </Drawer.Navigator>
  )
};
export {BTDrawerNavigator, BTDrawerContent, BTDrawerItem};
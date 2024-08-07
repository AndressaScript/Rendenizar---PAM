import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Route from './src/Routes';

export default function App() {
  const stack = createStackNavigator();
  return (
      <Route></Route>
  );
}
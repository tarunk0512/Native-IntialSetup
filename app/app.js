import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '@/components/RegisterScreen';
import HomeScreen from './(tabs)/register';

const Stack = createStackNavigator(); 
function App() { 
    return ( <NavigationContainer> <Stack.Navigator initialRouteName="Home"> 
    <Stack.Screen name="Home" component={HomeScreen} /> 
    <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator> </NavigationContainer> ); }



export default App;
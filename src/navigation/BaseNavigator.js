import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

//navigation pages
import Splash from '../Containers/Welcome/Splash';

import Screen1 from '../Containers/Home/Screen1';
import Screen2 from '../Containers/Home/Screen2';

// make navigation instnce
const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Splash'
                screenOptions={{
                    gestureEnabled: true,
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}>
                <Stack.Screen
                    name='Splash'
                    component={Splash}
                    options={{ title: 'Splash Screen' }}
                />
                <Stack.Screen
                    name='Screen1'
                    component={Screen1}
                />
                <Stack.Screen
                    name='Screen2'
                    component={Screen2}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export { MainStackNavigator as BaseNavigator };
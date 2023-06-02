import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import conf from "./pages/conf.js";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function routers() {
   return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="conf" component={conf} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}


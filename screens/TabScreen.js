import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import MovieScreen from './MovieScreen';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ((color, size) => (
                         <FontAwesome name="home" size={24} color="black" />
                    ))
                }}
            />
            <Tab.Screen 
                name='Movie' 
                component={MovieScreen}
                options={{
                    tabBarIcon: ((color, size) => (
                        <MaterialIcons name="local-movies" size={24} color="black" />
                    ))
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default TabScreen;

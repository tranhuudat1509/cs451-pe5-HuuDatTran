import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/AddCountry/AddCountry';
import Countries from './src/Countries/Countries';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ cities }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cities" component={Cities} initialParams={{ cities }} />
        </Stack.Navigator>
    );
}

export default function App() {
    const [cities, setCities] = useState([]);
    const [countries, setCountries] = useState([]);

    const addCity = (city) => {
        setCities((prevCities) => [...prevCities, city]);
    };

    const addCountry = (country) => {
        setCountries((prevCountries) => [...prevCountries, country]);
    };

    return (
        <Tab.Navigator>
            <Tab.Screen name="CitiesNav">
                {(props) => <CitiesStackScreen {...props} cities={cities} />}
            </Tab.Screen>
            <Tab.Screen name="AddCity">
                {(props) => <AddCity {...props} addCity={addCity} />}
            </Tab.Screen>
            <Tab.Screen name="Countries">
                {(props) => <Countries {...props} countries={countries} />}
            </Tab.Screen>
            <Tab.Screen name="AddCountry">
                {(props) => <AddCountry {...props} addCountry={addCountry} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

class AddCity extends React.Component {
    state = {
        city: '',
        country: '',
    };

    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    };

    submit = () => {
        const { city, country } = this.state;
        if (city === '' || country === '') {
            alert('Please complete the form');
            return;
        }

        const newCity = {
            id: uuid.v4(),
            city,
            country,
            locations: [],
        };

        this.props.addCity(newCity);
        this.setState(
            {
                city: '',
                country: '',
            },
            () => {
                this.props.navigation.navigate('Cities');
            }
        );
    };

    render() {
        return (
            <View style={styles.container}> { }
                <Text style={styles.heading}>Add City</Text>
                <TextInput
                    placeholder="City Name"
                    onChangeText={(val) => this.onChangeText('city', val)}
                    style={styles.input}
                    value={this.state.city}
                />
                <TextInput
                    placeholder="Country Name"
                    onChangeText={(val) => this.onChangeText('country', val)}
                    style={styles.input}
                    value={this.state.country}
                />
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add City</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    heading: {
        fontSize: 40,
        marginBottom: 10,
        alignSelf: 'center',
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        height: 50,
    },
});

export default AddCity;

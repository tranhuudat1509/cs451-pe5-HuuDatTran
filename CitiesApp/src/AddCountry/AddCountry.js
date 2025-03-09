import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

class AddCountry extends React.Component {
    state = {
        country: '',
        currency: '',
    };

    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    };

    submit = () => {
        const { country, currency } = this.state;
        if (country === '' || currency === '') {
            alert('Please complete the form');
            return;
        }

        const newCountry = {
            id: uuid.v4(),
            country,
            currency,
        };

        this.props.addCountry(newCountry);
        this.setState(
            {
                country: '',
                currency: '',
            },
            () => {
                this.props.navigation.navigate('Countries');
            }
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Add Country</Text>
                <TextInput
                    placeholder="Country Name"
                    onChangeText={(val) => this.onChangeText('country', val)}
                    style={styles.input}
                    value={this.state.country}
                />
                <TextInput
                    placeholder="Currency"
                    onChangeText={(val) => this.onChangeText('currency', val)}
                    style={styles.input}
                    value={this.state.currency}
                />
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add Country</Text>
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

export default AddCountry;

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Countries extends React.Component {
    render() {
        const { countries } = this.props;

        return (
            <View style={styles.container}> { }
                <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
                    <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
                        {!countries.length && <CenterMessage message="No saved countries!" />}
                        {countries.map((item, index) => (
                            <View key={index} style={styles.countryContainer}>
                                <Text style={styles.country}>{item.country}</Text>
                                <Text style={styles.currency}>Currency: {item.currency}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    countryContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
    },
    country: {
        fontSize: 20,
    },
    currency: {
        color: 'rgba(0, 0, 0, .5)',
    },
});

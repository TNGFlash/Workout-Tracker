import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button } from 'react-native';

const DataScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [goalProtein, setGoalProtein] = useState(0);
    const [goalCalorie, setGoalCalorie] = useState(0);
    const [email, setEmail] = useState('');

    const handleSave = () => {
        
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Name:"
            />
            <TextInput
                style={styles.input}
                onChangeText={setGoalProtein}
                value={goalProtein}
                placeholder="Protein Goal (g):"
                returnKeyType={'done'}
                keyboardType="number-pad"
            />
            <TextInput
                style={styles.input}
                onChangeText={setGoalCalorie}
                value={goalCalorie}
                placeholder="Calorie Goal:"
                returnKeyType={'done'}
                keyboardType="number-pad"
            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email Address:"
                keyboardType="email-address"
            />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 350,
        margin: 10,
        borderWidth: 1,
        padding: 10,
    },
});

export default DataScreen;
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, View} from 'react-native';

const DataScreen = () => {
    const [name, setName] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
  
    

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
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Weight:"
          returnKeyType={'done'}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email Address:"
          keyboardType= "email-address"
        /> 
         
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
    heading: {
      alignItems: 'center',
      backgroundColor: 'green',
      height: '500',
    },
    form: {
      flexDirection: 'row',
    },
  });

  export default DataScreen;
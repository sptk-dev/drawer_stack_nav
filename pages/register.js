// Home screen
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
//import react in our code.
//import all the components we are going to use.
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class FirstPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Register Member</Text>
        <TouchableOpacity
        style={styles.button}
         onPress={this._signIn} >
         <Text> SignIn </Text>
       </TouchableOpacity>
      </View>
    );
  }
  _signIn = async () =>{
      try {
        alert('login');
        await AsyncStorage.setItem('logged', '1');
        this.props.navigation.navigate('App');
      } catch (error) {
        // Error saving data
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
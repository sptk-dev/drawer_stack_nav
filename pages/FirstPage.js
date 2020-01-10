// Home screen
import React, { Component  } from 'react';
//import react in our code.
import { AsyncStorage } from 'react-native';
//import all the components we are going to use.
 
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class FirstPage extends React.Component {
  constructor(props){
    super(props);
    //this._logout();
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity
        style={styles.button}
         onPress={this._logout}
       >
         <Text> Logout </Text>
       </TouchableOpacity>
      </View>
    );
  }

  _logout = async() => {
    await AsyncStorage.clear();
    alert('Logout')
    this.props.navigation.navigate('Auth');
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
//This is an example of React Native Tab
import React from 'react';
//import react in our code.
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createMaterialTopTabNavigator,
//  createAppContainer,
//} from 'react-navigation';
 
//For React Navigation 4+
import { ActivityIndicator , AsyncStorage,Text ,TextInput,TouchableOpacity , StatusBar } from 'react-native';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';


import homepage from './pages/FirstPage';
import tab1 from './pages/SecondPage';
import tab2 from './pages/FirstPage';
import tab3 from './pages/SecondPage';
import navbar from './pages/navbar';
import register from './pages/register';

import LeftSideBar from "./pages/leftside";
import { View, Button } from 'native-base';
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
 


const TabScreen = createMaterialTopTabNavigator(
  {
    Home: { screen: homepage },
    Price: { screen: tab1 },
    Settings: { screen: tab2 },
    Profile: { screen: tab3 },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      fontWeight: 'bold',
    size:'20px',
      style: {
        backgroundColor: '#006FB0',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#FFF',
        borderBottomWidth: 5,
      },
    },
  }
);
 

//making a StackNavigator to export as default
const MainScreen = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#006FB0',
      },
      headerTintColor: '#FFFFFF',
      title: 'IEL MEMBER',
    },
  },
  
});


// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: FirstPage,
//   },
//   Notifications: {
//     screen: SecondPage,
//   },
// });

// const MyApp = createAppContainer(MyDrawerNavigator);


const MainDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    tab2: {
      screen: tab2,
    },
    
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <LeftSideBar {...props} />,
    navigationOptions: {
      drawerLockMode: 'locked-closed',
    },
  },
);



class AuthScreen  extends React.Component {
  constructor(props){
    super(props);
    this._loadData();
  }
  render(){
    return(
      <View>
        <Text>
          กรุณา Login
          <ActivityIndicator/>
          <StatusBar barStyle="default"/>
        </Text>
      </View>
    );
  }
  _signIn = async () =>{
    alert('login');
    
      try {
        await AsyncStorage.setItem('logged', '1');
      } catch (error) {
        // Error saving data
      }
  }

  _loadData = async () => {
    const logged = await AsyncStorage.getItem('logged');
    this.props.navigation.navigate(logged !== '1' ? 'Auth' : 'App' )
  }
}



const MainAuth =  createStackNavigator(
{
  AuthLoading : AuthScreen,
  Auth : register,
  App : MainScreen,
},{
  initialRouteName : 'AuthLoading'
}
);

export default createAppContainer(MainAuth);
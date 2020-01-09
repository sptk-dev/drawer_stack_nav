// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View } from 'react-native';
//import all the components we are going to use.
 
export default class navbar extends React.Component {
  render() {
    return (
       
      <View style={{ 
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'stretch' }}>

<Text>Home Screen</Text>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

         <Text>Tab1</Text>
        <Text>Tab2</Text>
        <Text>Tab3</Text>

            </View>
      
     
      </View>
    );
  }
}


// import React, {
//    Component
// } from 'react';

// import {
//    StyleSheet,
//    Text,
//    View
// } from 'react-native';

// import {
//    createStackNavigator,
//    DrawerNavigator,
//    DrawerItems
// } from "react-navigation";

// import {
//    Container,
//    Header,
//    Content,
//    Thumbnail,
//    Button,
//    Body
// } from 'native-base';




// export const CustomDrawer = (props) => ( 
//    <Container>
//        <Header style = {
//            styles.headerStyle
//        }>
//            <Body style = {
//                styles.bodyStyle
//            }>
//                <Thumbnail style = {
//                    {
//                        height: 100,
//                        width: 100
//                    }
//                }
//                source = {
//                    require('../image/logo.png')
//                }/> 
//            </Body> 
//        </Header>
//        <Content>
//            <DrawerItems { ...props}  /> 
//        </Content > 
//    </Container>
// )

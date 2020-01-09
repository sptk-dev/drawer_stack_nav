import React, { Component } from "react"
// import { Content,List, Header, Body, Title,ListItem, Container, Left, Right, Icon, Text, Badge} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationActions } from 'react-sidebar';
import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";



// export default class LeftSideBar extends React.Component {
// constructor(props) {
// super(props)
// }
// navigateToScreen = (route) => () => {
// const navigate = NavigationActions.navigate({
// routeName: route
// });
// this.props.navigation.dispatch(navigate);
// }
// render() {
// return (
// <ScrollView>
// <Container>
// <Header>
// <Left/>
// <Body>
// <Title>MENU</Title>
// </Body>
// <Right />
// </Header>
// <Content>
// <List>
// <ListItem onPress={() => this.props.navigation.closeDrawer()} selected>
// <Left>
// <Text>Login</Text>
// </Left>
// <Right>

// </Right>
// </ListItem>

// <ListItem onPress={() => this.props.navigation.closeDrawer()}>
// <Left>
// <Text>Register</Text>
// </Left>
// <Right>

// </Right>
// </ListItem>
// </List>
// </Content>
// </Container>
// </ScrollView>
// )
// }
// }



export default class HomeScreen extends React.Component {
   render() {
     return (
       <Container>
         <Header>
           <Left>
             <Button
               transparent
               onPress={() => this.props.navigation.navigate("DrawerOpen")}>
             
             </Button>
           </Left>
           <Body>
             <Title>MENU</Title>
           </Body>
           <Right />
         </Header>
         <Content padder>
           <Card>
             <CardItem>
               <Body>
                 <Text style={{alignContent:"center",textAlign:"center"}} >....สวัสดีชาวโลก....</Text>
               </Body>
             </CardItem>
           </Card>
           <Button full rounded success
             style={{ marginTop: 10 }}
             onPress={() => this.props.navigation.navigate("Home")}>
             <Text>LOGIN</Text>
           </Button>
           <Button full rounded primary
             style={{ marginTop: 10 }}
             onPress={() => this.props.navigation.navigate("register")}>
             <Text>SIGH UP!</Text>
           </Button>
         </Content>
       </Container>
     );
   }
 }
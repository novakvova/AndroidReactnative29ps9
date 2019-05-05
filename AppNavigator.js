import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginPage from './app/components/auth/login/LoginPage';
import RegisterPage from "./app/components/auth/register/RegisterPage";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Реєстрація"
          onPress={() => this.props.navigation.navigate('Register')}
        />
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button 
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home:  HomeScreen,
    Details: DetailsScreen,
    Login: LoginPage,
    Register: RegisterPage
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
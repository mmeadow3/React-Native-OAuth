import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp ({
      apiKey: "AIzaSyAlsdXGk33Sjw0lEDU5I2sfBraQMW11YVk",
      authDomain: "oauth-6b574.firebaseapp.com",
      databaseURL: "https://oauth-6b574.firebaseio.com",
      projectId: "oauth-6b574",
      storageBucket: "oauth-6b574.appspot.com",
      messagingSenderId: "205871391126"
    })
  }
  render(){
    return (
      <View>
      <Header headerText='Auth' />
      <LoginForm />
      </View>
    );
  }
}

export default App;

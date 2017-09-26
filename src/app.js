import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(
      {
          apiKey: "AIzaSyAlsdXGk33Sjw0lEDU5I2sfBraQMW11YVk",
          authDomain: "oauth-6b574.firebaseapp.com",
          databaseURL: "https://oauth-6b574.firebaseio.com",
          projectId: "oauth-6b574",
          storageBucket: "oauth-6b574.appspot.com",
          messagingSenderId: "205871391126"
        });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }



  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

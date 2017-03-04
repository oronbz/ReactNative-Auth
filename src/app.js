import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAwhulVz5z5-sctEHDt1uxQJHX7lQjuJKE',
      authDomain: 'oronbz.firebaseapp.com',
      databaseURL: 'https://oronbz.firebaseio.com',
      storageBucket: 'oronbz.appspot.com',
      messagingSenderId: '589729749349'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

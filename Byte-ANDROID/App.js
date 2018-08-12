//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from "./src/Scenes/Home";

import * as firebase from "firebase"; 

//Firebase configuration 
var config = {
  apiKey: "AIzaSyCXrJ06NnYXvz2l-kijWPoTeKuRKuqFtf8",
  authDomain: "bite-eb71c.firebaseapp.com",
  databaseURL: "https://bite-eb71c.firebaseio.com",
  projectId: "bite-eb71c",
  storageBucket: "bite-eb71c.appspot.com",
  messagingSenderId: "330918157389"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
var storage = firebase.storage();

const settings = {
  timestampsInSnapshots: true, 
}
firestore.settings(settings);
require("firebase/firestore");


// create a component
class MyClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyClass;

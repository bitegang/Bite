 
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import Swiper from "react-native-swiper"; 
//import faker from 'faker'; 

import { Provider } from 'react-redux'; 
import { store } from './src/Redux/Store';
import * as firebase from "firebase"; 
import Images from "./src/Utility/Components/Images"; 
import {watchPhotosData} from "./src/Redux/Actions"
import {Container, Content, Header, Form, Input, Item, Button, Label, Spinner} from 'native-base'
import { connect } from 'react-redux';
// Initialize Firebase
 
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
const settings = {
  timestampsInSnapshots: true, 
}
firestore.settings(settings);
require("firebase/firestore");

// create a component

 

class MyClass extends Component {

  constructor(props){ 


    super(props); 
    this.state = {loading: true, images: []}
  }

  componentDidMount(){ 

    watchPhotosData()
      .then(() => { 

        this.setState({loading: false})
      })
      .catch(error => { 

        console.log(error); 
      })
    
  }

  render() {

    
     
    const {loading, images} = this.state; 
    

    var startingScreen;

    if (loading) { 
      startingScreen = (
        <Spinner color = "red" style = {styles.spinner}/>
      )
    }

    else { 
      // console.log(store.getState());
      // const images = store.getState().Images; 
      const imageRows = (images.map((link, index) => (
           
        <Swiper 
          loop = {false} 
          showsPagination = {false} 
          index = {0} 
          horizontal = {false} 
          key = {index} 
           
        > 
          
          <Images 
            imageLink =  {link}
            keyValue = {index}
          /> 
        
           
  
          <View style = {styles.slideDefault}> 
            <Text style = {styles.text} > Image Details </Text>
          </View>
  
        </Swiper>
        
      )))

      startingScreen = ( 
        <View>     
          <View style = {styles.slideDefault}> 
            <Text style = {styles.text} > Search </Text>
          </View>
          <View style={[styles.container, styles.horizontal]}> 
            
            <Swiper loop = {false} showsPagination = {false} index = {0}> 
              {imageRows}
            </Swiper>  
          </View> 
        </View>
      )
    }
    

     

    return (
      <Provider store = {store}> 
        <Container> 
          <Content>
            
             {startingScreen}
            
          </Content>

        </Container>
      </Provider>
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

  slideDefault: { 

    flex: 1, 
    justifyContent: 'center', 
    alignItems: "center", 
    backgroundColor: "#9EE6EB"
  }, 

  slideDefaultTwo: { 

    flex: 1, 
    justifyContent: 'center', 
    alignItems: "center", 
    backgroundColor: "#2c3e50"
  }, 

  text: {

    color: "white", 
    fontSize: 30,  
    fontWeight: 'bold'
  },

  spinner: {
    display: "flex", 
    justifyContent: "center", 
    flexDirection: "column", 
     
  }
});


//make this component available to the app
export default MyClass;
 
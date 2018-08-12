  
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import Swiper from "react-native-swiper"; 
//import faker from 'faker'; 

import { Provider } from 'react-redux'; 
import { store } from './../../Redux/Store';
import * as firebase from "firebase"; 
import Images from "./../../Utility/Components/Images";
import {watchPhotosData} from "./../../Redux/Actions"
import {Container, Content, Header, Form, Input, Item, Button, Label, Spinner} from 'native-base'
import _ from "lodash"; 
// create a component
class Home extends Component {

  constructor(props){ 


    super(props); 
    this.state = {loading: true, images: []}
  }

  componentDidMount(){ 

    this.loadImages(); 
  }

  loadImages = () => { 
    
    var db = firebase.firestore(); 
   
        
    watchPhotosData()
      .then( () => { 
        
        console.log(store.getState()); 
      })
      .then(() => { 

        this.setState({loading: false}); 
      })
      .catch(error => { 
        console.log(error);
      })

    

  }

  render() {

    const {loading} = this.state
    
    var startingScreen;

    if (loading) { 
      startingScreen = (
        <Spinner color = "red" style = {styles.spinner}/>
      )
    }

    else { 

      const images = store.getState().images; 
      const imageRows = (_.values(images).map((image, index) => (
        
        <Swiper 
          loop = {false} 
          showsPagination = {false} 
          index = {0} 
          horizontal = {false} 
          key = {index} 
           
        > 
          
          <Images 
            image =  {image}
            keyValue = {index}
          /> 
        
           
  
          <View style = {styles.slideDefault}> 
            <Text style = {styles.text} > Image Details </Text>
          </View>
  
        </Swiper>
        
      )))

      startingScreen = ( 
        <View>     
        
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
export default Home;
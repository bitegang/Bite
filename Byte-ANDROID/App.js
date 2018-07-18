//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Container, Content} from "native-base"; 
import Swiper from "react-native-swiper"; 
import faker from 'faker'; 
import BackgroundImage from "./picture.js"

// create a component
class MyClass extends Component {
  render() {
    return (
      <Container> 
        <Content> 
        
          <Swiper loop = {false} showsPagination = {false} index = {1}> 
          
            <View style = {styles.slideDefaultTwo}> 
                <BackgroundImage 
                  imageLink =  'http://www.upscalehype.com/wp-content/uploads/2017/04/Nick-Young-Mosted-Hated-Supreme-track-pants-Adidas-sneakers-2.jpg'
                /> 
              
            </View> 

          
            <Swiper loop = {false} showsPagination = {false} index = {1} horizontal = {false}> 
              
              <View style = {styles.slideDefault}> 
                <Text style = {styles.text} > Search </Text>
              </View>
              <View style = {styles.slideDefaultTwo}> 
                <BackgroundImage 
                  imageLink =  'http://www1.pictures.zimbio.com/fp/Iggy+Azalea+Nick+Young+Lunch+Toast+Qtzl4D7A7mhx.jpg'
                /> 
              
              </View>

              <View style = {styles.slideDefault}> 
                <Text style = {styles.text} > Image Details </Text>
              </View>

            </Swiper>
            <View style = {styles.slideDefaultTwo}> 
                <BackgroundImage 
                  imageLink =  'https://i.pinimg.com/originals/1a/38/ec/1a38ecd80888b97801cb3da7b8aa9a68.jpg'
                /> 
              
            </View> 

          </Swiper>
        </Content>

      </Container>
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
    alignItems: "flex-start", 
    backgroundColor: "#2c3e50"
  }, 

  text: {

    color: "white", 
    fontSize: 30,  
    fontWeight: 'bold'
  }
  
});


//make this component available to the app
export default MyClass;

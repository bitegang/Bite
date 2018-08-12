//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import {
    AppRegistry,
    Image,
    
    
  } from 'react-native';

import {watchPhotosData} from "./../../../Redux/Actions"
import { store } from './../../../Redux/Store';
import * as firebase from "firebase"; 
import {Container, Content, Header, Spinner} from 'native-base';
require("firebase/firestore");




const mapStateToProps = (state) => {
    return { 

        images: state.images,
    };
}
  
const mapDispatchToProps = (dispatch) => {
    return { 

        watchPhotosData: () => dispatch(watchPhotosData())
    };
}


// create a component
class Images extends Component {

    constructor(props){ 

        super(props); 
        this.state = {loading: true, imageLink: ""}; 
    }

    componentDidMount(){ 

       this.retrieveStoredPhotoLink();
        
       
    }

    retrieveStoredPhotoLink = () => { 

        const {image} = this.props; 
        var storage = firebase.storage();
        
        var pathReference = storage.ref('Images');

        console.log("papi");
    
        pathReference.child(image.storageName).getDownloadURL()
            .then(url => {
                
                console.log("function to get storage Links", url); 
                this.setState({imageLink: url, loading: false}); 
    
    
            }).catch(function(error) {
                console.log(error);
                // Handle any errors
            });
    }



    render() {

        const {loading, imageLink} = this.state; 
        const resizeMode = 'cover';
        var display; 

        if (loading){ 

            display = ( 

                <Spinner color = "red" style = {styles.spinner}/>

            )

        }

        else { 
            console.log("Hello", imageLink);
            display = (
                
                <Image
                    style={{
                    flex: 1,
                    resizeMode,
                    }}
                    source={{ uri : imageLink}}
                />
            )
        }
        
        
        return (
            <View
                style={{
                flex: 1,
                backgroundColor: '#eee',
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {display}
                   
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                    }}
                >
               
                
                </View>

                



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
        backgroundColor: '#2c3e50',
    },
});



//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Images);


AppRegistry.registerComponent('Images', () => Images);


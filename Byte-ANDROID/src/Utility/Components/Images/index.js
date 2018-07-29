//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
    AppRegistry,
    Image,
    
    
  } from 'react-native';

const mapStateToProps = (state) => {
    return { };
}
  
  const mapDispatchToProps = (dispatch) => {
    return { };
}

// create a component
class Images extends Component {
    render() {
        const resizeMode = 'cover';
    
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
                    <Image
                        style={{
                        flex: 1,
                        resizeMode,
                        }}
                        source={{ uri: this.props.imageLink }}
                    />
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
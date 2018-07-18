import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
} from 'react-native';

 

export default class BackgroundImage extends Component {
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

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
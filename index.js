import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

export default class Hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class ModelView extends React.Component {
  rotation = new Animated.Value(0);

  render() {
    return (
      <View>
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 4, -1]}]}}
        />
        <AnimatedEntity
          style={{transform: [{rotateY: this.rotation}]}}
          source={{gltf2: asset('helmet/SciFiHelmet.gltf')}}
        />
      </View>
    );
  }
}

class SuzanneView extends React.Component {
  rotation = new Animated.Value(0);

  render() {
    return (
      <View>
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 4, -1]}]}}
        />
        <AnimatedEntity
          style={{transform: [{rotateY: this.rotation}]}}
          source={{gltf2: asset('suzanne/Suzanne.gltf')}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
AppRegistry.registerComponent('ModelView', () => ModelView);
AppRegistry.registerComponent('SuzanneView', () => SuzanneView);

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {COLORS} from '../../constanst';

class SplashEndingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 10000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerMain}>
          <Text style={styles.title}>Developed By</Text>
          <Text style={styles.subtitle}>Jaya Miko Yoga Pratama</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.black,
    padding: 10,
  },
  containerMain: {
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Exo-Black',
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Mali-SemiBold',
    color: COLORS.white,
  },
});

export default SplashEndingScreen;

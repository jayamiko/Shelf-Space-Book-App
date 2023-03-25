import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';
import COLORS from '../../utils/constants/colors';
import {BRAND} from '../../utils/constants/brand';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Introduction'));
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerMain}>
          <Image
            style={styles.splashScreen}
            resizeMode={'contain'}
            source={require('../../../public/splashscreen.png')}
          />
          <Text style={styles.title}>SHELF SPACE</Text>
          <Text style={styles.subtitle}>Ruang untuk impianmu</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.credit}>Created By:</Text>
          <Text style={styles.brand}>Jaya Miko Yoga Pratama</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'orange',
    padding: 10,
  },
  containerMain: {
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  splashScreen: {
    width: '100%',
    height: 280,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Exo-Black',
    color: COLORS.dark,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Mali-SemiBold',
    color: COLORS.white,
  },
  footer: {
    width: '100%',
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  credit: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Exo-Medium',
  },
  brand: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Exo-Bold',
    color: COLORS.dark,
  },
});

export default SplashScreen;

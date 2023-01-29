import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';
import COLORS from '../../utils/constants/colors';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerMain}>
          <Image
            style={{
              width: '100%',
              height: 280,
            }}
            resizeMode={'contain'}
            source={require('../../../public/splashscreen.png')}
          />
          <Text style={styles.title}>Ruang Mahasiswa</Text>
          <Text style={styles.subtitle}>
            with a template, writing will be easy
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.credit}>Sponsored By:</Text>
          <Text style={styles.brand}>Jaya Miko Store</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.background,
  },
  containerMain: {
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Exo-Black',
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Mali-SemiBold',
    color: COLORS.secondary,
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
    fontFamily: 'Exo-Medium',
  },
  brand: {
    fontSize: 16,
    fontFamily: 'Exo-Bold',
    color: COLORS.primary,
  },
});

export default SplashScreen;

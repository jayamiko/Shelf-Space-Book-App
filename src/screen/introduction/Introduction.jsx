import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import COLORS from '../../utils/constants/colors';

const Introduction = () => {
  const navigation = useNavigation();

  const [showApp, setShowApp] = useState(false);

  const onDone = () => {
    setShowApp(true);
  };

  useEffect(() => {
    if (showApp) {
      navigation.dispatch(StackActions.replace('Home'));
    }
  }, [showApp]);

  const RenderItem = ({item}) => {
    return (
      <View key={item.key} style={styles.container}>
        <View style={styles.box}>
          <ImageBackground
            style={styles.introImage}
            resizeMode={'cover'}
            source={item.image.uri}>
            <View style={styles.darkness} />
          </ImageBackground>
        </View>
        <View style={styles.boxText}>
          <View></View>
          <View
            style={{
              width: '85%',
              justifyContent: 'center',
            }}>
            <Text style={styles.introText}>{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      {!showApp && (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          bottomButton
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.orange,
  },
  box: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.7,
  },
  boxText: {
    position: 'absolute',
    width: '100%',
    height: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  introImage: {
    width: '100%',
    height: '100%',
  },
  introText: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Mali-Regular',
    fontStyle: 'italic',
    color: '#FBFBFB',
    textAlign: 'center',
    textShadowColor: 'black',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Buat Duniamu lebih Cerdas Dengan Shelf Space',
    image: {
      uri: require('../../../assets/images/cover1.jpeg'),
    },
  },
  {
    key: 's2',
    text: 'Ciptakan Perpustakaan Pribadimu Sendiri Dengan Shelf Space',
    image: {
      uri: require('../../../assets/images/cover2.jpeg'),
    },
  },
  {
    key: 's3',
    text: 'Buku Menarik Menanti Di Sini, Ayo Baca Bersama!',
    image: {
      uri: require('../../../assets/images/cover3.jpeg'),
    },
  },
];

export default Introduction;

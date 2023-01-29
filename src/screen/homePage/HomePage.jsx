import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {Avatar} from 'native-base';
import CarouselCard from '../../components/carousel/Slide';
import COLORS from '../../utils/constants/colors';

const {width} = Dimensions.get('window');

function infiniteScroll(dataList) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + width;
    else {
      scrollValue = 0;
      scrolled = 0;
    }

    this.flatList.scrollToOffset({animated: true, offset: scrollValue});
  }, 3000);
}

const data = [
  {posterUrl: require('../../../public/carousel-1.jpg')},
  {posterUrl: require('../../../public/carousel-2.jpg')},
  {posterUrl: require('../../../public/carousel-3.jpg')},
];

const HomePage = ({navigation}) => {
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  });

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View name="header" style={styles.header}>
            <View style={styles.userinfo}>
              <Text style={styles.welcome}>Welcome!</Text>
              <Text style={styles.name}>Sobat Mahasiswa</Text>
              <Text style={styles.username}>@sobatmahasiswa</Text>
            </View>
            <View style={styles.avatarinfo}>
              <Avatar
                bg="amber.500"
                source={require('../../../public/dummy/profile.jpeg')}
                size="xl">
                NB
                <Avatar.Badge bg="green.500" />
              </Avatar>
            </View>
          </View>
          <CarouselCard data={data} />
          <View name="main" style={styles.mainContent}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.background,
    padding: 10,
  },
  header: {
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  userinfo: {
    flex: 1,
    justifyContent: 'center',
    width: '50%',
    height: '100%',
  },
  welcome: {
    color: COLORS.dark,
    fontSize: 28,
    fontFamily: 'Exo-Black',
  },
  name: {
    color: COLORS.primary,
    fontSize: 18,
    fontFamily: 'Mali-Bold',
  },
  username: {
    fontSize: 12,
    fontFamily: 'Mali-Bold',
  },
  avatarinfo: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
    shadowColor: '#5667FD',
    shadowOpacity: 0.4,
    shadowRadius: 50,
    elevation: 80,
    borderRadius: 50,
  },
  avatar: {
    width: 90,
    height: 90,
    borderWidth: 8,
    borderColor: '#5667FD',
    borderRadius: 50,
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '25%',
    height: 100,
    backgroundColor: COLORS.primary,
    margin: 5,
    borderWidth: 2,
    borderColor: '#070707',
    borderRadius: 10,
  },
});

export default HomePage;

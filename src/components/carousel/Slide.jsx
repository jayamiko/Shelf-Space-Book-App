import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import COLORS from '../../utils/constants/colors';

const {width, height} = Dimensions.get('window');

const Slide = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item.posterUrl} />
      <View style={styles.textView}></View>
    </View>
  );
};

const CarouselCard = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  return (
    <View>
      <FlatList
        data={data}
        ref={flatList => {
          this.flatList = flatList;
        }}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <Slide item={item} />;
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />

      <View style={styles.dotView}>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: '#5667FD',
                margin: 8,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 40,
    height: height / 3.6,
    backgroundColor: COLORS.white,
    margin: 10,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 40,
    height: height / 3.6,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: COLORS.white,
    fontSize: 12,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  dotView: {flexDirection: 'row', justifyContent: 'flex-end'},
});

export default CarouselCard;

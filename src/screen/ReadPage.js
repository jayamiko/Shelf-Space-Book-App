import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FONTS, COLORS, SIZES} from '../constanst';

const ReadPage = ({route, navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        paddingHorizontal: SIZES.padding,
        paddingVertical: 10,
      }}>
      <View
        style={{
          width: '100%',
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 28,
        }}>
        <TouchableOpacity
          style={{
            maxWidth: 100,
            flex: 1,
            backgroundColor: COLORS.lightRed,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('BookDetail')}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Kembali</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            maxWidth: 100,
            flex: 1,
            backgroundColor: COLORS.lightGreen,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('BookDetail')}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Selanjutnya</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: COLORS.white,
          fontSize: 18,
          textAlign: 'justify',
        }}>
        Ta'lim Muta'alim" adalah sebuah kitab yang ditulis oleh seorang ulama
        terkenal dari abad ke-17, yaitu Imam al-Sya'rani. Kitab ini membahas
        tentang metode-metode pendidikan dan pengajaran dalam Islam. Secara
        harfiah, "ta'lim" berarti "mendidik" atau "mengajarkan", sedangkan
        "muta'alim" berarti "pelajar" atau "murid"
        {'\n'}
        {'\n'}
        Metode Belajar Bagian ini membahas tentang bagaimana seorang pelajar
        harus belajar dan menyerap ilmu dengan baik. Imam al-Sya'rani memberikan
        banyak nasihat tentang bagaimana seorang pelajar harus mempersiapkan
        dirinya secara mental dan fisik sebelum memulai proses belajar.
        {'\n'}
        {'\n'}
        Secara keseluruhan, kitab Ta'lim Muta'alim sangat bermanfaat bagi para
        pelajar dan guru dalam memperbaiki kualitas pendidikan dan pengajaran
        dalam Islam.
      </Text>
      <View
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          marginVertical: 10,
          paddingVertical: SIZES.base,
        }}>
        <TouchableOpacity
          style={{
            width: 180,
            height: 40,
            backgroundColor: '#1AA7EC',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('SplashEnding')}>
          <Text style={{...FONTS.h2, color: COLORS.white, fontWeight: 'bold'}}>
            Credit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReadPage;

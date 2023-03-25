import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Avatar} from 'native-base';
import {COLORS, FONTS, SIZES, icons, images} from '../constanst';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 18}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const Home = ({navigation}) => {
  const profileData = {
    name: 'Jaya Miko',
    point: 999,
  };

  const bookOtherWordsForHome = {
    id: 8,
    bookName: 'Other Words For Home',
    bookCover: images.otherWordsForHome,
    rating: 4.5,
    language: 'Eng',
    pageNo: 341,
    author: 'Jasmine Warga',
    genre: ['Best Seller', 'Novel'],
    readed: '12k views',
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
  };

  const bookTheMetropolis = {
    id: 6,
    bookName: 'The Metropolis',
    bookCover: images.theMetropolist,
    rating: 4.1,
    language: 'Eng',
    pageNo: 272,
    author: 'Seith Fried',
    genre: ['Novel'],
    readed: '13k views',
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
  };

  const bookTheTinyDragon = {
    id: 3,
    bookName: 'The Tiny Dragon',
    bookCover: images.theTinyDragon,
    rating: 3.5,
    language: 'Eng',
    pageNo: 110,
    author: 'Ana C Bouvier',
    genre: ['Novel'],
    readed: '13k views',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const cahayaLangitEropa = {
    id: 4,
    bookName: '99 Cahaya Langit Eropa',
    bookCover: images.cahayaLangitEropa,
    rating: 4.0,
    language: 'Ind',
    pageNo: 300,
    author: 'Hanum Salsabiela Rais',
    genre: ['Islami', 'Romance'],
    readed: '4k views',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const aLittleStar = {
    id: 5,
    bookName: 'A Little Star Still Shines Brightly',
    bookCover: images.aLittleStar,
    rating: 2.8,
    language: 'Eng',
    pageNo: 300,
    author: 'So Yoon',
    genre: ['Novel', 'Best Seller'],
    readed: '6k views',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const atomicHabits = {
    id: 2,
    bookName: 'Atomic Habits',
    bookCover: images.atomicHabits,
    rating: 4.9,
    language: 'Eng',
    pageNo: 548,
    author: 'James Clear',
    genre: ['Novel', 'Best Seller'],
    readed: '6k views',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const cintaDalamDiam = {
    id: 7,
    bookName: 'Cinta Dalam Diam',
    bookCover: images.cintaDalamDiam,
    rating: 4.9,
    language: 'Indo',
    pageNo: 548,
    author: 'Jhineemika',
    genre: ['Islami', 'Romance'],
    readed: '3m views',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const melukisAwan = {
    id: 1,
    bookName: 'Melukis Awan',
    bookCover: images.melukisAwan,
    rating: 3.1,
    language: 'Indo',
    pageNo: 288,
    author: 'Shawn Garcia',
    genre: ['Novel', 'Self Improvement'],
    readed: '140k views',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const merekaAda = {
    id: 9,
    bookName: 'Mereka Ada',
    bookCover: images.merekaAda,
    rating: 4.5,
    language: 'Indo',
    pageNo: 555,
    author: 'M.W.V Mystic',
    genre: ['Horror'],
    readed: '1m views',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const phytonPemula = {
    id: 10,
    bookName: 'Phyton Untuk Programmer Pemula',
    bookCover: images.phytonPemula,
    rating: 2.6,
    language: 'Indo',
    pageNo: 800,
    author: 'Jubiler Enterprise',
    genre: ['Teknologi', 'Programming'],
    readed: '200k views',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const talimMutaalim = {
    id: 11,
    bookName: `Implementasi Praktis Dari Ta'lim Muta'alim`,
    bookCover: images.talimMutaalim,
    rating: 3.8,
    language: 'Indo',
    pageNo: 180,
    author: 'Jaya Miko Yoga Pratama, dkk',
    genre: ['Islami', 'Fiqih'],
    readed: '2k views',
    description: `Ta'lim Muta'alim" adalah sebuah kitab yang ditulis oleh seorang ulama
        terkenal dari abad ke-17, yaitu Imam al-Sya'rani. Kitab ini membahas
        tentang metode-metode pendidikan dan pengajaran dalam Islam. Secara
        harfiah, "ta'lim" berarti "mendidik" atau "mengajarkan", sedangkan
        "muta'alim" berarti "pelajar" atau "murid". Metode Belajar Bagian ini membahas tentang bagaimana seorang pelajar
        harus belajar dan menyerap ilmu dengan baik. Imam al-Sya'rani memberikan
        banyak nasihat tentang bagaimana seorang pelajar harus mempersiapkan
        dirinya secara mental dan fisik sebelum memulai proses belajar.
      `,
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
  };

  const myBooksData = [
    {
      ...melukisAwan,
      completion: '65%',
      lastRead: '1h 4j',
    },
    {
      ...cahayaLangitEropa,
      completion: '80%',
      lastRead: '4h 2j',
    },
    {
      ...bookOtherWordsForHome,
      completion: '75%',
      lastRead: '3h 5j',
    },
    {
      ...cintaDalamDiam,
      completion: '40%',
      lastRead: '2h 0j',
    },
    {
      ...merekaAda,
      completion: '88%',
      lastRead: '1h 2j',
    },
    {
      ...bookTheMetropolis,
      completion: '23%',
      lastRead: '10h 5j',
    },
    {
      ...aLittleStar,
      completion: '24%',
      lastRead: '6h 1j',
    },
    {
      ...atomicHabits,
      completion: '96%',
      lastRead: '0h 4j',
    },
    {
      ...bookTheTinyDragon,
      completion: '10%',
      lastRead: '1h 2j',
    },
    {
      ...phytonPemula,
      completion: '35%',
      lastRead: '8h 0j',
    },
    {
      ...talimMutaalim,
      completion: '20%',
      lastRead: '14h 0j',
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: 'Best Seller',
      books: [atomicHabits, bookOtherWordsForHome, aLittleStar],
    },
    {
      id: 2,
      categoryName: 'Novel',
      books: [
        melukisAwan,
        aLittleStar,
        bookTheMetropolis,
        bookTheTinyDragon,
        atomicHabits,
      ],
    },
    {
      id: 3,
      categoryName: 'Islami',
      books: [talimMutaalim, cahayaLangitEropa, cintaDalamDiam],
    },
    {
      id: 4,
      categoryName: 'Horror',
      books: [merekaAda],
    },
    {
      id: 5,
      categoryName: 'Teknologi',
      books: [phytonPemula],
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        {/* Greetings */}
        <View name="header" style={styles.header}>
          <View style={styles.avatarinfo}>
            <Avatar
              bg="amber.500"
              source={require('../../assets/images/jayamiko.jpg')}
              size="lg">
              NB
              <Avatar.Badge bg="green.500" />
            </Avatar>
          </View>
          <View style={styles.userinfo}>
            <Text style={styles.welcome}>Welcome!</Text>
            <Text style={styles.name}>Jaya Miko</Text>
          </View>
        </View>

        {/* Points */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => {
            console.log('Point');
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>

            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}>
              {profile.point} point
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: SIZES.padding}}>
        <View
          style={{
            flexDirection: 'row',
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}>
          {/* Claim */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('Reward')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Reward
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* Get Point */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('History')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                History
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* My Card */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('Wishlist')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Wishlist
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const renderItemMyBook = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
        }}
        onPress={() =>
          navigation.navigate('BookDetail', {
            book: item,
          })
        }>
        {/* Book Cover */}
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={{
            width: 180,
            height: 250,
            borderRadius: 6,
          }}
        />

        {/* Book Info */}
        <View
          style={{
            marginTop: SIZES.radius,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={icons.clock_icon}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.lightGray,
            }}
          />
          <Text
            style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
            {item.lastRead}
          </Text>

          <Image
            source={icons.page_icon}
            style={{
              marginLeft: SIZES.radius,
              width: 20,
              height: 20,
              tintColor: COLORS.lightGray,
            }}
          />
          <Text
            style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
            {item.completion}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemCategory = ({item}) => {
    return (
      <TouchableOpacity
        style={{flex: 1, marginRight: SIZES.padding}}
        onPress={() => setSelectedCategory(item.id)}>
        {selectedCategory == item.id && (
          <Text style={{...FONTS.span, color: COLORS.white}}>
            {item.categoryName}
          </Text>
        )}
        {selectedCategory != item.id && (
          <Text style={{...FONTS.span, color: COLORS.lightGray}}>
            {item.categoryName}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  let books = [];
  let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory);
  if (selectedCategoryBooks.length > 0) {
    books = selectedCategoryBooks[0].books;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* Header Section */}
      <View style={{height: 200}}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>

      {/* Body Section */}
      <ScrollView style={{marginTop: SIZES.radius}}>
        {/* Books Section */}
        <View>
          <View style={{flex: 1}}>
            {/* Header */}
            <View
              style={{
                paddingHorizontal: SIZES.padding,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{...FONTS.h2, color: COLORS.white}}>
                Rekomendasi
              </Text>
            </View>

            {/* Books */}
            <View style={{flex: 1, marginTop: SIZES.padding}}>
              <FlatList
                data={myBooks}
                renderItem={renderItemMyBook}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>

        {/* Categories Section */}
        <View style={{marginTop: SIZES.padding}}>
          {/* <View>{renderCategoryHeader()}</View> */}
          <View style={{flex: 1, paddingLeft: SIZES.padding}}>
            <FlatList
              data={categories}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItemCategory}
              keyExtractor={item => `${item.id}`}
              horizontal
            />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: SIZES.radius,
              paddingLeft: SIZES.padding,
            }}>
            {books.map((item, index) => {
              return (
                <View key={index} style={{marginVertical: SIZES.base}}>
                  <TouchableOpacity
                    style={{flex: 1, flexDirection: 'row'}}
                    onPress={() =>
                      navigation.navigate('BookDetail', {
                        book: item,
                      })
                    }>
                    {/* Book Cover */}
                    <Image
                      source={item.bookCover}
                      resizeMode="cover"
                      style={{width: 100, height: 150, borderRadius: 6}}
                    />

                    <View style={{flex: 1, marginLeft: SIZES.radius}}>
                      {/* Book name and author */}
                      <View>
                        <Text
                          style={{
                            paddingRight: SIZES.padding,
                            fontSize: 18,
                            color: COLORS.white,
                            maxWidth: 210,
                          }}>
                          {item.bookName}
                        </Text>
                        <Text style={{...FONTS.h4, color: COLORS.lightGray}}>
                          {item.author}
                        </Text>
                      </View>

                      {/* Book Info */}
                      <View
                        style={{flexDirection: 'row', marginTop: SIZES.radius}}>
                        <Image
                          source={icons.page_filled_icon}
                          resizeMode="contain"
                          style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray,
                          }}
                        />
                        <Text
                          style={{
                            ...FONTS.body4,
                            color: COLORS.lightGray,
                            paddingHorizontal: SIZES.radius,
                          }}>
                          {item.pageNo}
                        </Text>

                        <Image
                          source={icons.read_icon}
                          resizeMode="contain"
                          style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray,
                          }}
                        />
                        <Text
                          style={{
                            ...FONTS.body4,
                            color: COLORS.lightGray,
                            paddingHorizontal: SIZES.radius,
                          }}>
                          {item.readed}
                        </Text>
                      </View>

                      {/* Genre */}
                      <View
                        style={{flexDirection: 'row', marginTop: SIZES.base}}>
                        {item.genre.includes('Best Seller') && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: SIZES.base,
                              marginRight: SIZES.base,
                              backgroundColor: COLORS.darkGreen,
                              height: 40,
                              borderRadius: SIZES.radius,
                            }}>
                            <Text
                              style={{
                                ...FONTS.body3,
                                color: COLORS.lightGreen,
                              }}>
                              Best Seller
                            </Text>
                          </View>
                        )}
                        {item.genre.includes('Novel') && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: SIZES.base,
                              marginRight: SIZES.base,
                              backgroundColor: COLORS.primary,
                              height: 40,
                              borderRadius: SIZES.radius,
                            }}>
                            <Text
                              style={{
                                ...FONTS.body3,
                                color: COLORS.white,
                              }}>
                              Novel
                            </Text>
                          </View>
                        )}
                        {item.genre.includes('Islami') && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: SIZES.base,
                              marginRight: SIZES.base,
                              backgroundColor: COLORS.darkGreen,
                              height: 40,
                              borderRadius: SIZES.radius,
                            }}>
                            <Text
                              style={{
                                ...FONTS.body3,
                                color: COLORS.lightGreen,
                              }}>
                              Islami
                            </Text>
                          </View>
                        )}
                        {item.genre.includes('Fiqih') && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: SIZES.base,
                              marginRight: SIZES.base,
                              backgroundColor: COLORS.gray,
                              height: 40,
                              borderRadius: SIZES.radius,
                            }}>
                            <Text
                              style={{
                                ...FONTS.body3,
                                color: COLORS.white,
                              }}>
                              Fiqih
                            </Text>
                          </View>
                        )}
                        {item.genre.includes('Romance') && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: SIZES.base,
                              marginRight: SIZES.base,
                              backgroundColor: COLORS.darkPink,
                              height: 40,
                              borderRadius: SIZES.radius,
                            }}>
                            <Text
                              style={{
                                ...FONTS.body3,
                                color: COLORS.lightPink,
                              }}>
                              Romance
                            </Text>
                          </View>
                        )}
                        {item.genre.includes('Horror') && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: SIZES.base,
                              marginRight: SIZES.base,
                              backgroundColor: COLORS.darkRed,
                              height: 40,
                              borderRadius: SIZES.radius,
                            }}>
                            <Text
                              style={{
                                ...FONTS.body3,
                                color: COLORS.lightRed,
                              }}>
                              Horror
                            </Text>
                          </View>
                        )}
                        {item.genre.includes('Teknologi') && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: SIZES.base,
                              marginRight: SIZES.base,
                              backgroundColor: COLORS.darkBlue,
                              height: 40,
                              borderRadius: SIZES.radius,
                            }}>
                            <Text
                              style={{
                                ...FONTS.body3,
                                color: COLORS.white,
                              }}>
                              Teknologi
                            </Text>
                          </View>
                        )}
                        {item.genre.includes('Programming') && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: SIZES.base,
                              marginRight: SIZES.base,
                              backgroundColor: COLORS.darkGreen,
                              height: 40,
                              borderRadius: SIZES.radius,
                            }}>
                            <Text
                              style={{
                                ...FONTS.body3,
                                color: COLORS.white,
                              }}>
                              Programming
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>

                  {/* Bookmark Button */}
                  <TouchableOpacity
                    style={{position: 'absolute', top: 5, right: 15}}>
                    <Image
                      source={icons.bookmark_icon}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.lightGray,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userinfo: {
    flex: 1,
    justifyContent: 'center',
    width: 200,
    height: '100%',
    marginLeft: 12,
  },
  welcome: {
    color: COLORS.primary,
    fontSize: 22,
    fontFamily: 'Exo-Black',
  },
  name: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'Mali-Bold',
  },
  avatarinfo: {
    height: '100%',
    justifyContent: 'center',
    shadowColor: '#5667FD',
    shadowOpacity: 0.4,
    shadowRadius: 50,
    elevation: 60,
    borderRadius: 50,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});

export default Home;

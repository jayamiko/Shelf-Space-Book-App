import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screen/splashScreen/SplashScreen';
import SplashEndingScreen from './src/screen/splashScreen/SplashEndingScreen';
import Introduction from './src/screen/introduction/Introduction';
import {BookDetail} from './src/screen/';
import {ReadPage} from './src/screen/';
import {Home} from './src/screen/';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <NativeBaseProvider>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="BookDetail"
            component={BookDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Introduction" component={Introduction} />
          <Stack.Screen name="ReadPage" component={ReadPage} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SplashEnding" component={SplashEndingScreen} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;

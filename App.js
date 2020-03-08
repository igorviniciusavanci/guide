// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import CityScreen from './screens/CityScreen';

const Stack = createStackNavigator();

function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          'spartan-light': require('./assets/fonts/Spartan-Light.ttf'),
          'spartan-medium': require('./assets/fonts/Spartan-Medium.ttf'),
          'spartan-regular': require('./assets/fonts/Spartan-Regular.ttf'),
          'spartan-semiBold': require('./assets/fonts/Spartan-SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="City" component={CityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import * as React from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { SplashScreen } from 'expo';
// import * as Font from 'expo-font';
// import { NavigationContainer } from '@react-navigation/native';

// import StackNavigator from './navigation/StackNavigator';

// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = React.useState(false);

//   // Load any resources or data that we need prior to rendering the app
//   React.useEffect(() => {
//     async function loadResourcesAndDataAsync() {
//       try {
//         SplashScreen.preventAutoHide();
//         // Load fonts
//         await Font.loadAsync({
//           ...Ionicons.font,
//           // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//         });
//       } catch (e) {
//         // We might want to provide this error information to an error reporting service
//         console.warn(e);
//       } finally {
//         setLoadingComplete(true);
//         SplashScreen.hide();
//       }
//     }

//     loadResourcesAndDataAsync();
//   }, []);

//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return null;
//   }
//   return (
//     <View style={styles.container}>
//       {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//       <NavigationContainer>
//         <StackNavigator />
//       </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

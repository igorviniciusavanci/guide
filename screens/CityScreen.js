import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import * as Speech from 'expo-speech';

import { saoPaulo } from '../infoCity/saoPaulo';

const WIDTH = Dimensions.get('window').width;

function speak() {
  const thingToSay = saoPaulo;
  Speech.speak(thingToSay);
}

export default function CityScreen({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({
      title: 'São Paulo',
      headerStyle: {
        backgroundColor: '#0E0D28',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, backgroundColor: '#F7D0D0' }}>
      <Image
        style={{
          width: WIDTH,
          height: 200,
          resizeMode: 'cover',
          borderRadius: 2,
        }}
        source={require('../assets/img/b2.jpg')}
      />
      <View
        style={{
          height: 200,
          backgroundColor: '#FFFF',
          marginRight: 70,
          marginTop: -30,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          elevation: 10,
        }}
      >
        <View style={{ marginLeft: 30, marginTop: 30, marginRight: 30 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#0E0D28',
                fontSize: 18,
                fontFamily: 'spartan-semiBold',
              }}
            >
              São Paulo
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                speak();
              }}
              style={{
                backgroundColor: '#0E0D28',
                width: 40,
                height: 40,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="ios-play" color="#FFFF" size={20} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: '#0E0D28',
              fontSize: 14,
              fontFamily: 'spartan-light',
              marginTop: 10,
            }}
          >
            São Paulo é um município brasileiro, capital do estado homônimo e
            principal centro financeiro, corporativo e mercantil da América do
            Sul.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

// <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
//         <Image
//           style={{
//             width: WIDTH - 10 - 60,
//             height: 200,
//             resizeMode: 'cover',
//             marginLeft: 30 + 5,
//             marginTop: 10,
//             borderRadius: 5,
//           }}
//           source={require('../assets/img/b1.jpg')}
//         />
//         <Image
//           style={{
//             width: WIDTH - 10 - 60,
//             height: 200,
//             resizeMode: 'cover',
//             marginLeft: 5,
//             marginTop: 10,
//             borderRadius: 5,
//           }}
//           source={require('../assets/img/b2.jpg')}
//         />
//         <Image
//           style={{
//             width: WIDTH - 10 - 60,
//             height: 200,
//             resizeMode: 'cover',
//             marginLeft: 5,
//             marginRight: 30 + 5,
//             marginTop: 10,
//             borderRadius: 5,
//           }}
//           source={require('../assets/img/b3.jpeg')}
//         />
//       </ScrollView>
//       <View style={{ flex: 2 }}>
//         <View
//           style={{
//             borderRadius: 50,
//             height: 50,
//             width: 50,
//             backgroundColor: 'blue',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Ionicons name="ios-play" size={30} color="#fff" />
//         </View>
//       </View>

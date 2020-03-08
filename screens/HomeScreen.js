import * as React from 'react';
import {
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import * as Speech from 'expo-speech';

const WIDTH = Dimensions.get('window').width;

function speak() {
  const thingToSay = 'Olá, Igor. Tudo Bem com você ?';
  Speech.speak(thingToSay);
}

function CardCity({ image, city, subtitle, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('City')}
      activeOpacity={0.9}
      style={{
        width: 250,
        height: 250,
        backgroundColor: '#FFFF',
        borderRadius: 10,
        paddingHorizontal: 20,
        padding: 15,
        marginLeft: 20,
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{
            width: 220,
            height: 150,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
          source={image}
        />
      </View>
      <View style={{ flex: 1, marginTop: 15 }}>
        <Text
          style={{
            color: '#0E0D28',
            fontSize: 15,
            fontFamily: 'spartan-semiBold',
          }}
        >
          {city}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: '#BDBFC1',
            fontSize: 12,
            fontFamily: 'spartan-semiBold',
          }}
        >
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/img/back.png')}
      style={{ width: '100%', height: '100%' }}
    >
      <View
        style={{
          marginTop: Constants.statusBarHeight + 35,
          marginLeft: 30,
          flex: 1,
        }}
      >
        <Text
          style={{
            color: '#FFFF',
            fontSize: 24,
            fontFamily: 'spartan-light',
          }}
        >
          Um
        </Text>
        <Text
          style={{
            color: '#FFFF',
            fontSize: 24,
            fontFamily: 'spartan-light',
          }}
        >
          novo modo
        </Text>
        <Text
          style={{
            color: '#FFFF',
            fontSize: 24,
            fontFamily: 'spartan-light',
          }}
        >
          de{' '}
          <Text
            style={{
              color: '#FFFF',
              fontSize: 30,
              fontFamily: 'spartan-medium',
            }}
          >
            Viajar
          </Text>
        </Text>
      </View>
      <View style={{ marginLeft: 30, justifyContent: 'center', flex: 2 }}>
        <ScrollView horizontal>
          <CardCity
            image={require('../assets/img/b4.jpg')}
            city="Brasília"
            subtitle="62 Lugares - 31 Roteiros"
            navigation={navigation}
          />
          <CardCity
            image={require('../assets/img/b4.jpg')}
            city="Brasília"
            subtitle="62 Lugares - 31 Roteiros"
            navigation={navigation}
          />
          <CardCity
            image={require('../assets/img/b4.jpg')}
            city="Brasília"
            subtitle="62 Lugares - 31 Roteiros"
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

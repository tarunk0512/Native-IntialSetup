import { Image, StyleSheet } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import LoginHandler, { LoginHandlerRef } from '@/components/LoginHandler';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useRef } from 'react';

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

export default function HomeScreen({ navigation }: Props) {
  const loginHandlerRef = useRef<LoginHandlerRef>(null);

  const handleLoginPress = () => {
    if (loginHandlerRef.current) {
      loginHandlerRef.current.handleLogin();
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/login-icon.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello Tarun</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <View style={styles.stepContainer}>
          <TextInput style={styles.loginContainer} placeholder="Username" />
          <TextInput style={styles.loginContainer} placeholder="Password" />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <LoginHandler ref={loginHandlerRef} />
        </View>
        <View style={styles.container}>
          <ThemedText style={styles.newLogintextcontainer}>New to this page?</ThemedText>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  loginContainer: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  reactLogo: {
    height: 178,
    width: '80%',
    bottom: 0,
    left: '10%',
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#EE82EE',
    alignItems: 'center',
    marginBottom: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  registerButton: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
    marginTop: 20,
  },
  newLogintextcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { Image, StyleSheet, Platform } from 'react-native';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/login-icon.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Hello</ThemedText>
      
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      {/* <ThemedText type="subtitle">Step 1: Try it</ThemedText> */}
      <View style={styles.stepContainer}> 
        <TextInput style={styles.loginContainer} placeholder="Username"  /> 
        <TextInput style={styles.loginContainer} placeholder="Password"  /> 

        </View>

        <View style={styles.container}>
           <View style={styles.buttonContainer}> 
            <Button title="Login"  color="#EE82EE" />
             </View> 
             </View>
      {/* onPress={() => navigation.navigate('Login')} /> */}
      </ThemedView>
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView> */}
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView> */}
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
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
  loginContainer:{
    height: 40, 
    borderColor: 'white', 
    borderWidth: 1, 
    marginBottom: 12, 
    paddingHorizontal: 8,
    borderRadius: 50,
    backgroundColor: 'white', // Adjust this value to make the border more or less curved
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
    buttonContainer: { 
      width: '80%', 
      margin: 10, 
      height: 40, 
      paddingHorizontal: 10, 
      borderRadius: 10, 
      backgroundColor: "#EE82EE", // Button background color 
      },
});

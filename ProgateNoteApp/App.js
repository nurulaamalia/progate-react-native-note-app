import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './src/components/customButton';
import CustomTextInput from './src/components/customTextInput';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <View style={styles.container}>
     <CustomButton
      backgroundColor="#DDDDDD"
      color="#39494F"
      text="Custom Button"
      width="100%"
      onPress={() => {}}
    />
    <CustomTextInput
      label="Custom Text"
      multiline
      numberOfLines={2}
      onChange={() => {}}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 40,
  },
});

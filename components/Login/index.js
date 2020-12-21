import React from 'react';
import { StyleSheet, Text,  View, TouchableOpacity } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} title="Entrar" onPress={() => navigation.navigate('Home')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: '#c1c1c1',
  }
});

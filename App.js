import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function App() {
  const [fullname, setFullname] = useState("Nojus Ilekis");

  return (
    <View>
      <Text style={styles.paragraph}>Hello, World {fullname}</Text>
    </View>
  );
}



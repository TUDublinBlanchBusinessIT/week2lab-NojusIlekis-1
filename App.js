import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function App(){

  return(
    <View>
      <Text style={styles.paragraph}>Hello, World</Text>
    </View>
  )
}


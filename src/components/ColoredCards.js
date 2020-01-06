import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  cardOneContent: {
    width: 250,
    height: 200,
    flexDirection: 'column',
    backgroundColor: '#2675fc',
    margin: 25,
    borderRadius: 10,
    padding: 16
  },
  cardTwoContent: {
    width: 250,
    height: 200,
    flexDirection: 'column',
    backgroundColor: '#f72323',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  cardThreeContent: {
    width: 250,
    height: 200,
    flexDirection: 'column',
    backgroundColor: '#121112',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
});

function ColoredCards({navigation}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardOneContent}>
        <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
          card1
        </Text>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Text>
      </View>
      <View style={styles.cardTwoContent}>
        <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
          card2
        </Text>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Text>
      </View>
      <View style={styles.cardThreeContent}>
        <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
          card3
        </Text>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Text>
      </View>
    </View>
  );
}

export default ColoredCards;

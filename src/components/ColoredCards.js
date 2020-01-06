import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  Button,
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
    borderRadius: 20,
    padding: 16,
  },
  cardTwoContent: {
    width: 250,
    height: 200,
    flexDirection: 'column',
    backgroundColor: '#854e4e',
    margin: 10,
    borderRadius: 20,
    padding: 16,
  },
  cardThreeContent: {
    width: 250,
    height: 200,
    flexDirection: 'column',
    backgroundColor: '#000000',
    margin: 10,
    borderRadius: 20,
    padding: 16,
  },
  button: {
    width: '40%',
    marginTop: 10,
    color: 'gray',
    borderRadius: 1,
    backgroundColor: '#121111',
    borderRadius: 10,
    padding: 8,
  },
});

function ColoredCards({navigation}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardOneContent}>
        <Text
          style={{
            color: 'white',
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: 15,
          }}>
          card1
        </Text>
        <Text style={{color: 'white', fontSize: 14}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
        <View style={styles.button}>
          <Text style={{color: 'white', textAlign: 'center'}}>Get started</Text>
        </View>
      </View>
      <View style={styles.cardTwoContent}>
        <Text
          style={{
            color: 'white',
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: 15,
          }}>
          card2
        </Text>
        <Text style={{color: 'white', fontSize: 14}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
        <View style={styles.button}>
          <Text style={{color: 'white', textAlign: 'center'}}>Get started</Text>
        </View>
      </View>
      <View style={styles.cardThreeContent}>
        <Text
          style={{
            color: 'white',
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: 15,
          }}>
          card3
        </Text>
        <Text style={{color: 'white', fontSize: 14}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
        <View style={styles.button}>
          <Text style={{color: 'white', textAlign: 'center'}}>Get started</Text>
        </View>
      </View>
    </View>
  );
}

export default ColoredCards;

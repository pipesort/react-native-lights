import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  cardOneContent: {
    // width: 450,
    height: 300,
    flexDirection: 'column',
    backgroundColor: '#000000',
    margin: 10,
    borderRadius: 20,
    padding: 16,
  },
  cardTwoContent: {
    // width: 250,
    height: 300,
    flexDirection: 'column',
    backgroundColor: '#2675fc',
    margin: 10,
    borderRadius: 20,
    padding: 16,
  },
  cardThreeContent: {
    // width: 250,
    height: 300,
    flexDirection: 'column',
    backgroundColor: '#854e4e',
    margin: 10,
    borderRadius: 20,
    padding: 16,
  },
  button: {
    width: 150,
    height: 50,
    marginTop: 40,
    color: 'gray',
    borderRadius: 1,
    backgroundColor: '#05ada5',
    borderRadius: 12,
    padding: 8,
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: 'white', 
    textAlign: 'center', 
    marginBottom: 8
  },
});

function ColoredCards({navigation}) {
  return (
    <ScrollView>
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
          <Text style={{color: 'white', fontSize: 16}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get started</Text>
          </View>
          </TouchableOpacity>
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
          <Text style={{color: 'white', fontSize: 16}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Get started
            </Text>
          </View>
          </TouchableOpacity>
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
          <Text style={{color: 'white', fontSize: 16}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Get started
            </Text>
          </View>
          </TouchableOpacity>
        </View>
        
      </View>
    </ScrollView>
  );
}

export default ColoredCards;

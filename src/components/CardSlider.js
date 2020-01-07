import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '70%',
    height: 40,
    marginTop: 14,
    color: 'gray',
    backgroundColor: '#05ada5',
    borderRadius: 10,
    padding: 4,
  },
  cardOneContent: {
    width: 150,
    height: 180,
    flexDirection: 'column',
    backgroundColor: '#2675fc',
    margin: 10,
    borderRadius: 15,
    padding: 10,
  },
});

const data = [
  {
    title: 'Card1',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Card2',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'Card3',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Card4',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'Card5',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    title: 'Card6',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
  },
];

function CardSlider({navigation}) {
  return (
    <ScrollView horizontal>
      {data.map(item => (
        <View style={styles.cardOneContent}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              // marginTop: 15,
            }}>
            {item.title}
          </Text>
          <Text style={{color: 'white', fontSize: 14}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 12,
                  marginTop: 7,
                }}>
                Get started
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

export default CardSlider;

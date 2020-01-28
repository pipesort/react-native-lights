import React from 'react';
import {View, StyleSheet, Text,FlatList,TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
MainContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 30,
      paddingBottom: 10
    },
    cardOneContent: {
        width: 100,
        height: 60,
        flexDirection: 'column',
        backgroundColor: '#2675fc',
        margin: 10,
        borderRadius: 15,
        padding: 10,
      },
     
});

const data = [
    {
        title: 'Card 1',
        description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Card 2',
        description: 'Lorem ipsum dolor sit amet',
        image: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'Card 3',
        description: 'Lorem ipsum dolor sit amet et nuncat ',
        image: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Card 4',
        description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i.imgur.com/KZsmUi2l.jpg'
    }
];


function BottomSheetCards() {
  return (
    <View style={styles.MainContainer}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
          <TouchableOpacity>
        <View style={styles.cardOneContent}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign:'center',
              marginTop: 5,
            }}>
            {item.title}
          </Text>
         
        </View>
        </TouchableOpacity>
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
  );
}

export default BottomSheetCards;

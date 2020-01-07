import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    Text
  } from 'react-native';

  const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 30,
      paddingBottom: 10
    },
    cardStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 200,
      backgroundColor:'#121111',
      color:'white',
      borderRadius:10,
      marginBottom:10,
      marginLeft:5,
      marginRight:5,
      fontSize: 16,
      
    },
    textStyle:{
      fontSize:14,
      textAlign:'center',
      marginTop:-10
    }
  });

const data = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        image: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

function PinterestCards({navigation}) {
  return (
      <>
      <View style={styles.MainContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
              <Image style={styles.cardStyle} source={{ uri: item.image }} />
          <Text style={styles.textStyle}>{item.title}</Text>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
}

export default PinterestCards;

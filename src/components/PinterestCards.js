import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
  } from 'react-native';

  const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 30,
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
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
              <Image style={styles.imageThumbnail} source={{ uri: item.image }} />
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
}

export default PinterestCards;

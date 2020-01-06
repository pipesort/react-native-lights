import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const entries = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

function CardSlider({navigation}) {
  const renderItem = ({item, index}) => {
    return (
      <View >
        <Text >{item.title}</Text>
      </View>
    );
  };
  return (
    <View>
      <Carousel
        // ref={c => (this.panel = c)}
        data={entries}
        renderItem={renderItem}
        sliderWidth={200}
        itemWidth={180}
      />
    </View>
  );
}

export default CardSlider;

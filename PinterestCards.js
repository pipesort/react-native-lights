import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import PinterestCard from "./PinterestCard";

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
    paddingBottom: 10,
  }
});

function PinterestCardList({data}){
  return(
    <FlatList
    data={data}
    renderItem={({item, index}) => (
     <PinterestCard data={item} key={index}/>
    )}
    numColumns={2}
    keyExtractor={(item, index) => index.toString()}
  />
  )
}


function PinterestCards({data}) {
  return (
    <>
      <View style={styles.MainContainer}>
       <PinterestCardList data={data}/>
      </View>
    </>
  );
}

export default PinterestCards;
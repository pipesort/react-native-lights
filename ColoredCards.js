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
  TouchableOpacity,
} from 'react-native';

import ColoredCard from './ColoredCard';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
});

function ColorfulCards({data}) {
  return (
    <View style={styles.card}>
      {/* {
          data && data.map((item, index)=>( */}
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ColoredCard
            key={index}
            title={item.title}
            description={item.description}
            buttonTitle={item.buttonTitle}
            buttonFunction={item.buttonFunction}
            cardBackground={item.backgroundColor ? item.backgroundColor : '#399ce3'}
            cardHeight={item.cardHeight ? item.cardHeight : 300}
            cardWidth={item.cardWidth ? item.cardWidth : null}
            cardFlexDirection="column"
            cardMargin={item.cardMargin ? item.cardMargin :10}
            cardBorderRadius={item.cardBorderRadius ? item.cardBorderRadius : 20}
            cardPadding={item.cardPadding ? item.cardPadding :16}
            primaryTextColor={item.primaryTextColor ? item.primaryTextColor :"white"}
            primaryTextSize={item.primaryTextSize ? item.primaryTextSize :28}
            primaryTextWeight={item.primaryTextWeight ? item.primaryTextWeight :"bold"}
            primaryTextTop={item.primaryTextTop ? item.primaryTextTop :15}
            secondaryTextColor={item.secondaryTextColor ? item.secondaryTextColor :"white"}
            secondaryTextSize={item.secondaryTextSize ? item.secondaryTextSize :16}
            buttonWidth={item.buttonWidth ? item.buttonWidth :150}
            buttonHeight={item.buttonHeight ? item.buttonHeight :50}
            buttonTop={item.buttonTop ? item.buttonTop :20}
            buttonBackground={item.buttonBackground ? item.buttonBackground :"#05ada5"}
            buttonBorderRadius={item.buttonBorderRadius ? item.buttonBorderRadius :12}
            buttonPadding={item.buttonPadding ? item.buttonPadding :8}
            buttonTextColor={item.buttonTextColor ? item.buttonTextColor :"white"}
            buttonTextAlign={item.buttonTextAlign ? item.buttonTextAlign : "center"}
            buttonTextBottom={item.buttonTextBottom ? item.buttonTextBottom :8}
            buttonTextSize={item.buttonTextSize ? item.buttonTextSize :14}
            buttonTextTop={item.buttonTextTop ? item.buttonTextTop :8}
          />
        )}
      />
      {/* ))
        } */}
    </View>
  );
}

export default ColorfulCards;

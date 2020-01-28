import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';



const listData = [
  {
    title: 'card1',
    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image: 'https://i.imgur.com/UYiroysl.jpg',
    buttonTitle: 'Get Started',
  },
  {
    title: 'card2',
    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image: 'https://i.imgur.com/UPrs1EWl.jpg',
    buttonTitle: 'Get Started',
  },
  {
    title: 'card3',
    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image: 'https://i.imgur.com/MABUbpDl.jpg',
    buttonTitle: 'Get Started',
  },
  {
    title: 'card4',
    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image: 'https://i.imgur.com/KZsmUi2l.jpg',
    buttonTitle: 'Get Started',
  },
  {
    title: 'card5',
    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image: 'https://i.imgur.com/2nCt3Sbl.jpg',
    buttonTitle: 'Get Started',
  },
  {
    title: 'card6',
    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image: 'https://i.imgur.com/lceHsT6l.jpg',
    buttonTitle: 'Get Started',
  },
];

function SlidingCards({
  data,
  cardBackground,
  cardHeight,
  cardFlexDirection,
  cardMargin,
  cardBorderRadius,
  cardPadding,
  cardWidth,
  TextColor,
  TextSize,
  TextWeight,
  buttonTextColor,
  buttonTextAlign,
  buttonTextSize,
  buttonTextTop,
  buttonWidth,
  buttonHeight,
  buttonTop,
  buttonBackground,
  buttonBorderRadius,
  buttonPadding
}) {
  const card = StyleSheet.create({
    cardStyle: {
      backgroundColor: cardBackground,
      height: cardHeight,
      flexDirection: cardFlexDirection,
      margin: cardMargin,
      borderRadius: cardBorderRadius,
      padding: cardPadding,
      width: cardWidth,
    },
    cardTextStyle: {
      color: TextColor,
      fontSize: TextSize,
      fontWeight: TextWeight,
    },
    button: {
      width: buttonWidth,
      height: buttonHeight,
      marginTop: buttonTop,
      backgroundColor: buttonBackground,
      borderRadius: buttonBorderRadius,
      padding: buttonPadding,
    },
    buttonTitleStyle:{
      color: buttonTextColor,
      textAlign: buttonTextAlign,
      fontSize: buttonTextSize,
      marginTop: buttonTextTop,
    }
  });

  return (
    <ScrollView horizontal>
      {data.map(cardData => (
        <View style={card.cardStyle}>
          <Text style={card.cardTextStyle}>{cardData.title}</Text>
          <Text style={{color: 'white', fontSize: 14}}>
            {cardData.description}
          </Text>
          {cardData.buttonTitle ? (
            <TouchableOpacity>
              <View style={card.button}>
                <Text
                  style={card.buttonTitleStyle}>
                  {cardData.buttonTitle}
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
}

function CardSlider() {
  return (
    <>
      <SlidingCards
        data={listData}
        cardWidth={150}
        cardHeight={180}
        cardFlexDirection="column"
        cardBackground="#2675fc"
        cardMargin={10}
        cardBorderRadius={15}
        cardPadding={10}
        TextColor="white"
        TextSize={20}
        TextWeight="bold"
        buttonTextColor= 'white'
        buttonTextAlign= 'center'
        buttonTextSize= {12}
        buttonTextTop= {7}
        buttonWidth= '70%'
        buttonHeight= {40}
        buttonTop= {14}
        buttonBackground= '#05ada5'
        buttonBorderRadius= {10}
        buttonPadding= {4}
      />
    </>
  );
}

export default CardSlider;

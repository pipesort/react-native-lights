import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

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
  buttonPadding,
  buttonFunction
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
      {data.map((cardData, index) => (
        <View style={card.cardStyle} key={index}>
          <Text style={card.cardTextStyle}>{cardData.title}</Text>
          <ScrollView>
          <Text style={{color: 'white', fontSize: 14}}>
            {cardData.description}
          </Text>
          </ScrollView>
          {cardData.buttonTitle ? (
            <TouchableOpacity>
    <View style={card.button}>

    {
                cardData.buttonFunction ?
                (<Text
                    style={card.buttonTitleStyle}>
                    {cardData.buttonTitle}
                  </Text>) : (
                      <TouchableOpacity onPress={buttonFunction}>
                          <Text
                style={card.buttonTitleStyle}>
                {cardData.buttonTitle}
              </Text>
                      </TouchableOpacity>
                  )
                }
    </View>
  </TouchableOpacity>
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
}

function CardSlider({data}) {
  return (
    <>
      <SlidingCards
        data={data}
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
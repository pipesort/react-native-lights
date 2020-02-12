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
}) {
  const card = StyleSheet.create({
    cardStyle: {
      backgroundColor: cardBackground,
      height: 180,
      flexDirection: cardFlexDirection,
      margin: cardMargin,
      borderRadius: cardBorderRadius,
      padding: cardPadding,
      width: 150,
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
    buttonTitleStyle: {
      color: buttonTextColor,
      textAlign: buttonTextAlign,
      fontSize: buttonTextSize,
      marginTop: buttonTextTop,
    },
  });

  return (
    <ScrollView horizontal>
      {data.map(cardData => (
        <View
          style={{
            backgroundColor: cardData.cardBackground
              ? cardData.cardBackground
              : '#2675fc',
            height: cardData.cardHeight ? cardData.cardHeight : 180,
            flexDirection: 'column',
            margin: cardData.cardMargin ? cardData.cardMargin : 10,
            borderRadius: cardData.cardBorderRadius
              ? cardData.cardBorderRadius
              : 15,
            padding: cardData.cardPadding ? cardData.cardPadding : 10,
            width: cardData.cardWidth ? cardData.cardWidth : 150,
          }}>
          <Text
            style={{
              color: cardData.primaryTextColor
                ? cardData.primaryTextColor
                : 'white',
              fontSize: cardData.primaryTextSize
                ? cardData.primaryTextSize
                : 20,
              fontWeight: 'bold',
            }}>
            {cardData.title}
          </Text>
          <Text
            style={{
              color: cardData.secondaryTextColor
                ? cardData.secondaryTextColor
                : 'white',
              fontSize: cardData.secondaryTextColor
                ? cardData.secondaryTextColor
                : 14,
            }}>
            {cardData.description}
          </Text>
          {cardData.buttonTitle ? (
            <TouchableOpacity>
              <View
                style={{
                  width: cardData.buttonWidth ? cardData.buttonWidth : '70%',
                  height: cardData.buttonHeight ? cardData.buttonHeight : 40,
                  marginTop: cardData.buttonTop ? cardData.buttonTop : 14,
                  backgroundColor: cardData.buttonBackground
                    ? cardData.buttonBackground
                    : '#05ada5',
                  borderRadius: cardData.buttonBorderRadius
                    ? cardData.buttonBorderRadius
                    : 10,
                  padding: cardData.buttonPadding ? cardData.buttonPadding : 4,
                }}>
                <Text
                  style={{
                    color: cardData.buttonTextColor
                      ? cardData.buttonTextColor
                      : 'white',
                    textAlign: cardData.buttonTextAlign
                      ? cardData.buttonTextAlign
                      : 'center',
                    fontSize: cardData.buttonTextSize
                      ? cardData.buttonTextSize
                      : 12,
                    marginTop: cardData.buttonTextTop
                      ? cardData.buttonTextTop
                      : 7,
                  }}>
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

function CardSlider({data}) {
  return (
    <>
      <SlidingCards
        data={data}
        // cardWidth={150}
        // cardHeight={180}
        // cardFlexDirection="column"
        // cardBackground="#2675fc"
        // cardMargin={10}
        // cardBorderRadius={15}
        // cardPadding={10}
        // TextColor="white"
        // TextSize={20}
        // TextWeight="bold"
        // buttonTextColor="white"
        // buttonTextAlign="center"
        // buttonTextSize={12}
        // buttonTextTop={7}
        // buttonWidth="70%"
        // buttonHeight={40}
        // buttonTop={14}
        // buttonBackground="#05ada5"
        // buttonBorderRadius={10}
        // buttonPadding={4}
      />
    </>
  );
}

export default CardSlider;

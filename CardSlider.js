import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

function SlidingCards({data}) {
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
            <TouchableOpacity onPress={cardData.buttonFunction ? cardData.buttonFunction : null}>
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
      <SlidingCards data={data} />
    </>
  );
}

export default CardSlider;

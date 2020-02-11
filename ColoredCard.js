import React from 'react';
import {
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

function ColoredCard({
  title,
  description,
  buttonTitle,
  cardBackground,
  cardHeight,
  cardFlexDirection,
  cardMargin,
  cardBorderRadius,
  cardPadding,
  primaryTextColor,
  primaryTextSize,
  primaryTextWeight,
  primaryTextTop,
  secondaryTextColor,
  secondaryTextSize,
  buttonWidth,
  buttonHeight,
  buttonTop,
  buttonBackground,
  buttonBorderRadius,
  buttonPadding,
  buttonTextColor,
  buttonTextAlign,
  buttonTextBottom,
  buttonTextSize,
  buttonTextTop,
  buttonFunction,
}) {
  const card = StyleSheet.create({
    cardColor: {
      backgroundColor: cardBackground,
      height: cardHeight,
      flexDirection: cardFlexDirection,
      margin: cardMargin,
      borderRadius: cardBorderRadius,
      padding: cardPadding,
    },
    cardPrimaryText: {
      color: primaryTextColor,
      fontSize: primaryTextSize,
      fontWeight: primaryTextWeight,
      marginTop: primaryTextTop,
    },
    cardSecondaryText: {
      color: secondaryTextColor,
      fontSize: secondaryTextSize,
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
      marginBottom: buttonTextBottom,
      fontSize: buttonTextSize,
    },
  });

  

  let buttonComponent = (<Text style={card.buttonTitleStyle}>{buttonTitle}</Text>)

  if(buttonFunction){

    buttonComponent = ( <Text style={card.buttonTitleStyle} onPress={buttonFunction}>{buttonTitle}</Text> )
  }



  return (
    <View style={card.cardColor}>
      <Text style={card.cardPrimaryText}>{title}</Text>
      <ScrollView>
        <Text style={card.cardSecondaryText}>{description}</Text>
      </ScrollView>
      {buttonTitle ? (
        <TouchableOpacity>
          <View style={card.button}>
           {buttonComponent} 
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

export default ColoredCard;

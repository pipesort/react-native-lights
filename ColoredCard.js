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
  cardWidth,
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
  cardBodyHeight,
  cardHeaderJustifyContent,
  cardBodyJustifyContent,
  cardButtomJustifyContent,
  cardBodyAlignItem,
  cardHeaderAlignItem,
  cardButtonAlignItem
}) {
  const card = StyleSheet.create({
    cardColor: {
      backgroundColor: cardBackground,
      height: cardHeight,
      width: cardWidth,
      flexDirection: cardFlexDirection,
      margin: cardMargin,
      borderRadius: cardBorderRadius,
      padding: cardPadding,
    },
    cardHeaderText:{
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

  let buttonComponent = (
    <Text style={card.buttonTitleStyle}>{buttonTitle}</Text>
  );

  if (buttonFunction) {
    buttonComponent = (
      <Text style={card.buttonTitleStyle} onPress={buttonFunction}>
        {buttonTitle}
      </Text>
    );
    buttonComponent = (
      <TouchableOpacity onPress={buttonFunction}>
        <Text style={card.buttonTitleStyle}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={card.cardColor}>
    {/* card-header */}
      <View style={{flex:1, justifyContent:cardHeaderJustifyContent,alignItems:cardHeaderAlignItem,paddingLeft:10}}>
        <Text style={card.cardHeaderText}>{title}</Text>
      </View>
    {/* card-body */}
      <View style={{flex:2, justifyContent:"center"}}>
        <ScrollView style={{flex:1}} contentContainerStyle={{justifyContent:"center", alignItems:"center"}}>
            <View style={{padding:10, height:cardBodyHeight, backgroundColor:"red", alignItems:cardBodyAlignItem, justifyContent:cardBodyJustifyContent}}>
                  <Text style={card.cardSecondaryText}>{description}</Text>
            </View>
        </ScrollView>
      </View>
    {/* card-footer */}
      <View style={{flex:1, justifyContent:cardButtomJustifyContent,alignItems:cardButtonAlignItem,paddingLeft:10}}>
        {buttonTitle ? (
          <TouchableOpacity>
            <View style={card.button}>{buttonComponent}</View>
          </TouchableOpacity>
        ) : null}
      </View>

    </View>
  );
}

export default ColoredCard;

import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

function SlidingCards({
  data
}) {
//   const card = StyleSheet.create({
//     cardStyle: {
//       backgroundColor: cardBackground,
//       height: cardHeight,
//       flexDirection: cardFlexDirection,
//       margin: cardMargin,
//       borderRadius: cardBorderRadius,
//       padding: cardPadding,
//       width: cardWidth,
//     },
//     cardTextStyle: {
//       color: TextColor,
//       fontSize: TextSize,
//       fontWeight: TextWeight,
//     },
//     button: {
//       width: buttonWidth,
//       height: buttonHeight,
//       marginTop: buttonTop,
//       backgroundColor: buttonBackground,
//       borderRadius: buttonBorderRadius,
//       padding: buttonPadding,
//     },
//     buttonTitleStyle: {
//       color: buttonTextColor,
//       textAlign: buttonTextAlign,
//       fontSize: buttonTextSize,
//       marginTop: buttonTextTop,
//     },
//   });

  return (
    <ScrollView horizontal>
      {data.map((cardData, index) => (
        <View style={{
            backgroundColor: cardData.data.styles.cardBackground ? cardData.data.styles.cardBackground : "#2675FC" ,
            height: cardData.data.styles.cardHeight ? cardData.data.styles.cardHeight : 180,
            flexDirection: cardData.data.styles.cardFlexDirection ? cardData.data.styles.cardFlexDirection : "column",
            margin: cardData.cardMargin ? cardData.cardMargin : 10,
            borderRadius: cardData.data.styles.cardBorderRadius ? cardData.data.styles.cardBorderRadius : 15,
            padding: cardData.data.styles.cardPadding ? cardData.data.styles.cardPadding : 10,
            width: cardData.data.styles.cardWidth ? cardData.data.styles.cardWidth : 10,
          }} key={index}>
          <Text style={{
      color: cardData.data.styles.TextColor ? cardData.data.styles.TextColor : "white",
      fontSize: cardData.data.styles.TextSize ? cardData.data.styles.TextSize : 20,
      fontWeight: cardData.data.styles.TextWeight ? cardData.data.styles.TextWeight : "bold",
    }}>{cardData.data.title}</Text>
          <ScrollView>
            <Text style={{color: cardData.data.styles.descriptionTextColor ? cardData.data.styles.descriptionTextColor : "white", fontSize: cardData.data.styles.descriptionFontSize ? cardData.data.styles.descriptionFontSize : 14 }}>
              {cardData.data.description}
            </Text>
          </ScrollView>
          {cardData.data.buttonTitle ? (
            <TouchableOpacity>
              <View style={{ width: cardData.data.styles.buttonWidth ? cardData.data.styles.buttonWidth : "70%",
      height: cardData.data.styles.buttonHeight ? cardData.data.styles.buttonHeight : 40,
      marginTop: cardData.data.styles.buttonTextTop ? cardData.data.styles.buttonTextTop : 7,
      backgroundColor: cardData.data.styles.buttonBackground ? cardData.data.styles.buttonBackground : #05ADA5,
      borderRadius: cardData.data.styles.buttonBorderRadius ?  cardData.data.styles.buttonBorderRadius : 10,
      padding: cardData.data.styles.buttonPadding ? cardData.data.styles.buttonPadding : 4,}}>
                {cardData.data.buttonFunction ? (
                  <TouchableOpacity onPress={cardData.data.buttonFunction}>
                    <Text style={card.buttonTitleStyle}>
                      {cardData.data.buttonTitle}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={{color: cardData.data.style.buttonTextColor ? cardData.data.styles.buttonTextColor : "white",
                    textAlign: cardData.data.styles.buttonTextAlign ? cardData.data.styles.buttonTextAlign : "center",
                    fontSize: cardData.data.styles.buttonTextSize ? cardData.data.styles.buttonTextSize : 12 ,
                    marginTop: cardData.data.styles.buttonTextTop ? cardData.data.styles.buttonTextTop : 14   }}>
                    {cardData.data.buttonTitle}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
}

function CardSlider({
  data
}) {
  return (
    <>
        <SlidingCards
            data={data}
        />
        </>
  );
}

export default CardSlider;

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
  buttonTextTop
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
      marginBottom:buttonTextBottom,
      fontSize:buttonTextSize
    },
  });

  return (
    <View style={card.cardColor}>
      <Text
        style={card.cardPrimaryText}>
        {title}
      </Text>
      <Text style={card.cardSecondaryText}>{description}</Text>
      {buttonTitle ? (
        <TouchableOpacity>
          <View style={card.button}>
            <Text style={card.buttonTitleStyle}>{buttonTitle}</Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

function ColorfulCards() {
  return (
    <ScrollView>
      <View style={styles.card}>
        <ColoredCard
          title="card1"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          buttonTitle="Get Started"
          cardBackground="#000000"
          cardHeight={300}
          cardFlexDirection="column"
          cardMargin={10}
          cardBorderRadius={20}
          cardPadding={16}
          primaryTextColor="white"
          primaryTextSize={28}
          primaryTextWeight="bold"
          primaryTextTop={15}
          secondaryTextColor="white"
          secondaryTextSize={16}
          buttonWidth={150}
          buttonHeight={50}
          buttonTop={40}
          buttonBackground="#05ada5"
          buttonBorderRadius={12}
          buttonPadding={8}
          buttonTextColor="white"
          buttonTextAlign="center"
          buttonTextBottom={8}
          buttonTextSize={14}
          buttonTextTop={8}
        />
        <ColoredCard
          title="card2"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          buttonTitle="Get Started"
          cardBackground="#2675fc"
          cardHeight={300}
          cardFlexDirection="column"
          cardMargin={10}
          cardBorderRadius={20}
          cardPadding={16}
          primaryTextColor="white"
          primaryTextSize={28}
          primaryTextWeight="bold"
          primaryTextTop={15}
          secondaryTextColor="white"
          secondaryTextSize={16}
          buttonWidth={150}
          buttonHeight={50}
          buttonTop={40}
          buttonBackground="#05ada5"
          buttonBorderRadius={12}
          buttonPadding={8}
          buttonTextColor="white"
          buttonTextAlign="center"
          buttonTextBottom={8}
          buttonTextTop={8}
        />
        <ColoredCard
          title="card3"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          buttonTitle="Get Started"
          cardBackground="#854e4e"
          cardHeight={300}
          cardFlexDirection="column"
          cardMargin={10}
          cardBorderRadius={20}
          cardPadding={16}
          primaryTextColor="white"
          primaryTextSize={28}
          primaryTextWeight="bold"
          primaryTextTop={15}
          secondaryTextColor="white"
          secondaryTextSize={16}
          buttonWidth={150}
          buttonHeight={50}
          buttonTop={40}
          buttonBackground="#05ada5"
          buttonBorderRadius={12}
          buttonPadding={8}
          buttonTextColor="white"
          buttonTextAlign="center"
          buttonTextBottom={8}
          buttonTextTop={8}
        />
      </View>
    </ScrollView>
  );
}

export default ColorfulCards;

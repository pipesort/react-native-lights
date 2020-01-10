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
  buttonText,
  cardBackground,
  cardHeight,
  cardFlexDirection,
  cardMargin,
  cardBorderRadius,
  cardPadding,
}) {



  const cardStyle = StyleSheet.create({
    cardColor: {
      backgroundColor: cardBackground,
      height: cardHeight,
      flexDirection: cardFlexDirection,
      margin: cardMargin,
      borderRadius: cardBorderRadius,
      padding: cardPadding,
    },
  });

  return (
    <View style={cardStyle.cardColor}>
      <Text
        style={{
          color: 'white',
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        {title}
      </Text>
      <Text style={{color: 'white', fontSize: 16}}>{description}</Text>
      {buttonText ? (
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonTextStyle}>{buttonText}</Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

function ColorfulCards({navigation}) {
  return (
    <ScrollView>
      <View style={styles.card}>
        <ColoredCard
          title="card1"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          buttonText="Get Started"
          cardBackground="#000000"
          cardHeight={300}
          cardFlexDirection="column"
          cardMargin={10}
          cardBorderRadius={20}
          cardPadding={16}
        />
        <ColoredCard
          title="card2"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          buttonText="Get Started"
          cardBackground="#2675fc"
          cardHeight={300}
          cardFlexDirection="column"
          cardMargin={10}
          cardBorderRadius={20}
          cardPadding={16}
        />
        <ColoredCard
          title="card3"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          buttonText="Get Started"
          cardBackground="#854e4e"
          cardHeight={300}
          cardFlexDirection="column"
          cardMargin={10}
          cardBorderRadius={20}
          cardPadding={16}
        />
      </View>
    </ScrollView>
  );
}

export default ColorfulCards;

import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
});

function Homepage({navigation}) {
  return (
    <View style={{marginTop: 150}}>
      <View style={styles.item}>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('BottomSheet')}>
          Bottom Sheet
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('ColoredCards')}>
          Colored Cards
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('PinterestCards')}>
          Pinterest cards
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('CardSlider')}>
          Card slider
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('Showpage')}>
          Show page
        </Text>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate('FormOne')}>
          Forms
        </Text>
      </View>
    </View>
  );
}

export default Homepage;

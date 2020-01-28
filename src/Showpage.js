import React, {useRef} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetCards from './BottomSheetCards/BottomSheetCards';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 40,
  },
  descriptionCard: {
    // width: 250,
    height: 400,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    margin: 10,
    // marginTop: -10,
    borderRadius: 20,
    // borderBottomLeftRadius: 40,
    // borderTopRightRadius: 40,
    padding: 16,
  },
});

ratingCompleted = rating => {
  console.log('Rating is: ' + rating);
};

function Showpage({navigation}) {
  navigation.setOptions({
    headerStyle: {
      elevation: 0,
      backgroundColor: 'transparent',
    },
    headerRight: () => (
      <Icon
        name="dots-vertical"
        size={25}
        // color="white"
        style={{marginRight: 15}}
        onPress={() => {
          ref.current.open();
        }}
      />
    ),
  });

  const ref = useRef(null);
  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: -58}}>
      <ScrollView>
        <View style={{flex: 2}}>
          <View style={styles.container}>
            <Image
              style={styles.imageStyle}
              source={{
                uri:
                  'https://wallpapershome.com/images/wallpapers/mauritius-5120x2880-sunset-indian-ocean-beach-sand-travel-tourism-6458.jpg',
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 3,
          }}>
          <View style={styles.descriptionCard}>
            <Text
              style={{
                color: 'black',
                fontSize: 28,
                fontWeight: 'bold',
                //   marginTop: 5,
              }}>
              Lorem Ipsum
            </Text>
            <Text style={{color: 'black', fontSize: 16}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text style={{color: 'black', fontSize: 16}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>

            <AirbnbRating
              showRating={true}
              count={5}
              reviews={['Bad', 'Average', 'Good', 'Wow', 'Excellent']}
              defaultRating={4}
              size={20}
              reviewColor="#ff8c00"
              selectedColor="#ff8c00"
            />
            {/* <Rating
            showRating
            onFinishRating={ratingCompleted}
            type='custom'
            ratingBackgroundColor='red'
            // style={{paddingVertical: 10,backgroundColor:'red'}}
          /> */}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View
          style={{
            justifyContent: 'flex-end',
            backgroundColor: '#ff297f',
            alignItems: 'center',
            height: 50,
            width: '50%',
            borderRadius: 20,
            margin: 10,
            marginLeft: 100,
            marginRight: 100,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text
              style={{
                color: 'white',
                marginTop: 12,
                marginLeft: 5,
                fontSize: 18,
              }}>
              Book now
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={ref}
        height={300}
        duration={300}
        closeOnDragDown={true}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            // backgroundColor:'#3271a8'
          },
        }}>
        <BottomSheetCards />
      </RBSheet>
    </View>
  );
}

export default Showpage;

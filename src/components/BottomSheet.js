import React from 'react';
import {
  SafeAreaView,
  Button,
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import RBSheet from 'react-native-raw-bottom-sheet';
import CardContent from '../screens/cardContent';

function BottomSheet() {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => {
          this.panel.open();
        }}
      />
      <RBSheet
        ref={c => (this.panel = c)}
        height={300}
        duration={300}
        closeOnDragDown={true}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            // backgroundColor:'#3271a8'
          },
        }}>
        <CardContent />
      </RBSheet>
    </View>
  );
}

export default BottomSheet;

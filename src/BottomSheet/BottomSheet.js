import React, {useRef} from 'react';
import {
  SafeAreaView,
  // Button,
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import RBSheet from 'react-native-raw-bottom-sheet';
import CardContent from '../screens/cardContent';

import Button from '../Button/Button';

function BottomSheet() {
  const ref = useRef(null);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        color="secondary"
        size="medium"
        appearance="bordered"
        onPress={() => {
          ref.current.open();
        }}>
        OPEN BOTTOM SHEET
      </Button>
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
        <CardContent />
      </RBSheet>
    </View>
  );
}

export default BottomSheet;

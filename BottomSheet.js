import React,{useRef} from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';


function BottomSheet() {
const ref = useRef(null)
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => {
          ref.current.open();
        }}
      />
      <RBSheet
        ref={ref}
        height={300}
        duration={300}
        closeOnDragDown={true}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
          },
        }}>
        <View>
            <Text style={{fontSize:24}}>
                Have a good day!
            </Text>
        </View>
      </RBSheet>
    </View>
  );
}

export default BottomSheet;
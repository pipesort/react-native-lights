import React,{useRef} from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';


function BottomSheet({data}) {
const ref = useRef(null)
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title={data.buttonText}
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
            {data.bodyText}
            </Text>
        </View>
      </RBSheet>
    </View>
  );
}

export default BottomSheet;
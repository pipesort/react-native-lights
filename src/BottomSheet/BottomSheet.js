import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

function BottomSheet({data}) {
  const ref = useRef(null);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          width: data.buttonStyles
            ? data.buttonStyles.width
              ? data.buttonStyles.width
              : 100
            : 200,
          height: data.buttonStyles
            ? data.buttonStyles.height
              ? data.buttonStyles.height
              : 40
            : 50,
          backgroundColor: data.buttonStyles
            ? data.buttonStyles.backgroundColor
              ? data.buttonStyles.backgroundColor
              : 'gray'
            : 'gray',
          borderRadius: data.buttonStyles
            ? data.buttonStyles.borderRadius
              ? data.buttonStyles.borderRadius
              : 0
            : 0,
          alignItems: data.buttonStyles
            ? data.buttonStyles.alignItems
              ? data.buttonStyles.alignItems
              : 'center'
            : 'center',
          justifyContent: data.buttonStyles
            ? data.buttonStyles.justifyContent
              ? data.buttonStyles.justifyContent
              : 'center'
            : 'center',
          fontSize: data.buttonStyles
            ? data.buttonStyles.fontSize
              ? data.buttonStyles.fontSize
              : 15
            : 15,
        }}
        onPress={() => {
          ref.current.open();
        }}>
        <Text
          style={{
            color: data.buttonStyles
              ? data.buttonStyles.buttonTextColor
                ? data.buttonStyles.buttonTextColor
                : 'Black'
              : 'Black',
          }}>
          {data.buttonText}{' '}
        </Text>
      </TouchableOpacity>

      <RBSheet
        ref={ref}
        animationType={
          data.bottomSheetStyles
            ? data.bottomSheetStyles.animationStyle
              ? data.bottomSheetStyles.animationStyle
              : 'none'
            : null
        }
        height={
          data.bottomSheetStyles
            ? data.bottomSheetStyles.height
              ? data.bottomSheetStyles.height
              : 300
            : 300
        }
        duration={
          data.bottomSheetStyles
            ? data.bottomSheetStyles.AnimationDuration
              ? data.bottomSheetStyles.AnimationDuration
              : 300
            : 300
        }
        closeOnDragDown={true}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: data.bottomSheetStyles
              ? data.bottomSheetStyles.borderTopLeftRadius
                ? data.bottomSheetStyles.borderTopLeftRadius
                : 30
              : 30,
            borderTopRightRadius: data.bottomSheetStyles
              ? data.bottomSheetStyles.borderTopRightRadius
                ? data.bottomSheetStyles.borderTopRightRadius
                : 30
              : 30,
            backgroundColor: data.bottomSheetStyles
              ? data.bottomSheetStyles.backgroundColor
                ? data.bottomSheetStyles.backgroundColor
                : 'white'
              : 'white',
          },
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: data.bottomSheetStyles
                ? data.bottomSheetStyles.textFontSize
                  ? data.bottomSheetStyles.textFontSize
                  : 24
                : 24,
              fontFamily: data.bottomSheetStyles
                ? data.bottomSheetStyles.textFontFamily
                  ? data.bottomSheetStyles.textFontFamily
                  : 'Arial'
                : 'Arial',
              color: data.bottomSheetStyles
                ? data.bottomSheetStyles.textColor
                  ? data.bottomSheetStyles.textColor
                  : 'black'
                : 'black',
            }}>
            {data.bodyText}
          </Text>
        </View>
      </RBSheet>
    </View>
  );
}

export default BottomSheet;

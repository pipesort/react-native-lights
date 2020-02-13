import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

function InputText({TextInputWidth,maxLengthValue, keyboardType, onChangeText,  placeholderText, placeholderTextColor, fontSizeValue, fontWeightValue, borderColorValue, borderWidthValue, borderBottomColorValue, borderBottomWidthValue, autoFocusValue, Value,extraStyle}) {


  return (
    <View>
  <TextInput
            placeholder = { placeholderText ? placeholderText : "9999999999" }
            placeholderTextColor={placeholderTextColor ? placeholderTextColor : "#7D7D7D"}
            autoFocus={autoFocusValue ? autoFocusValue : true}
            maxLength={ maxLengthValue ? maxLengthValue : 10}
            keyboardType={keyboardType ? keyboardType : "numeric"}
            onChangeText={onChangeText}
            value={Value}
            borderBottomColor={borderBottomColorValue}
            borderBottomWidth={borderBottomWidthValue}
            fontSize={fontSizeValue ? fontSizeValue : 30}
            fontWeight={fontWeightValue ? fontWeightValue : "bold"}
            borderColor={borderColorValue}
            borderWidth={borderWidthValue}
            width={TextInputWidth}
            style={extraStyle}
          />  
          
            </View>
  )



}



export default InputText;
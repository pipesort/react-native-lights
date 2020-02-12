import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

function InputText({keyboardType, onChangeText,  placeholderText, placeholderTextColor, fontSizeValue, fontWeightValue, borderColorValue, borderWidthValue, borderBottomColorValue, borderBottomWidthValue, autoFocusValue, Value,}) {

  return (
    <View>
  <TextInput
            placeholder={placeholderText}
            placeholderTextColor={placeholderTextColor}
            autoFocus={autoFocusValue}
            maxLength={10}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            value={Value}
            style={styles}
          />  
          
            </View>
  )
const styles = StyleSheet.create({
    fontSize:fontSizeValue,
    fontWeight:fontWeightValue,
    borderColor:borderColorValue,
    borderWidth:borderWidthValue,
    borderBottomColor:borderBottomColorValue,
    borderBottomWidth:borderBottomWidthValue

})

}



export default InputText;
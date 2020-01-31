import React from 'react';
import {View, TextInput} from 'react-native';

function InputText() {
  return (
    <View>
      <TextInput
        placeholder="9999999999"
        placeholderTextColor="#7d7d7d"
        style={{fontSize: 30, fontWeight: 'bold'}}
        autoFocus={true}
        maxLength={10}
        keyboardType={'numeric'}
      />
    </View>
  );
}

export default InputText;
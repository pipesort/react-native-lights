import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Input from './TextInput.js'




function SelectBox({placeholder, placeholderColor, fontSize , fontWeight,  label, TextBoxStyle , renderItem, data}) {
  const [value, setValue] = useState('');
  const ref = useRef(null);
  return (
    <>
      <View>
     
      
        <View style={{marginLeft: -3}}>
         
          <Input
            placeholder={placeholder ? placeholder : "Placeholder"}
            placeholderTextColor={placeholderColor ? placeholderColor : "#c4c4c4"}
            style={{fontSize:fontSize ? fontSize : 18, fontWeight: fontWeight ? fontWeight : "bold"}}
            onFocus={() => ref.current.open()}
            onTouchStart={() => ref.current.open()}
            value={value}
            label={label}
            disabled={true}
          />
        
        </View>
        
      </View>
      <RBSheet
        ref={ref}
        height={300}
        duration={300}
        closeOnDragDown={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <ScrollView>
          <FlatList
            data={data}
            renderItem={item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setValue(item.item);
                    ref.current.close();
                  }}>
                  {renderItem(item)}
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </RBSheet>
    </>
  );
}


function Country({country}) {
  return (
    <View style={{padding: 5, margin: 10}}>
      <Text style={{color: 'black', fontSize: 16}}>{country}</Text>
    </View>
  );
}

function Select({data,options}) {
  
  return (
    <View>
      <SelectBox
        placeholder={data.placeholder}
        data={options}
        onSelect={item => item}
        renderItem={({item}) => <Country id={item} country={item} />}
        label={data.label}
        value={data.value}
        fontSize={data.fontSize}
        fontWeight={data.fontWeight}
        placeholderColor={data.placeholderColor}
      />
    </View>
  );
}

export default Select;
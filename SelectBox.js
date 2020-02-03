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




function SelectBox({placeholder, label, renderItem, data}) {
  const [value, setValue] = useState('');
  const ref = useRef(null);
  return (
    <>
      <View>
        <Text style={{color: '#787878', fontSize: 14}}>{label}</Text>

        <View style={{marginLeft: -3}}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="#c4c4c4"
            style={{fontSize: 18, fontWeight: 'bold'}}
            onFocus={() => ref.current.open()}
            value={value}
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
      />
    </View>
  );
}

export default Select;
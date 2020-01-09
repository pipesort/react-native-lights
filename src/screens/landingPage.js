import React,{useRef} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import SignIn from '../components/forms/SigninForm';

function LandingPage(props) {
    const ref = useRef(null)
  return (
    <View>
      <TouchableOpacity onPress={() => ref.current.open()}>
        <Text>Signin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ref.current.open()}>
        <Text>Signup</Text>
      </TouchableOpacity>

      <RBSheet
        ref={ref}
        height={680}
        duration={300}
        closeOnDragDown={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <SignIn close={()=>{ref.current.close()}} {...props}/>
      </RBSheet>  
    </View>
  );
}

export default LandingPage;

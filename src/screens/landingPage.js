import React,{useRef,useState} from 'react';
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
import SignUp from '../components/forms/SignupForm';

function LandingPage(props) {
    const ref = useRef(null)
    const [isSignin,setSignin] = useState(false)
  return (
    <View>
      <TouchableOpacity onPress={() => {
        ref.current.open()
        setSignin(true)
        }}>
        <Text>Signin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        ref.current.open()
        setSignin(false)
        }}>
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
          {isSignin ? 
        <SignIn close={()=>{ref.current.close()}} {...props}/>
      :
      <SignUp close={()=>{ref.current.close()}} {...props}/>
      }
      </RBSheet>  
    </View>
  );
}

export default LandingPage;

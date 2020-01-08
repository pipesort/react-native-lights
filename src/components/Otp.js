import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    otpButton: {
        justifyContent: 'flex-end',
        backgroundColor: '#ff297f',
        alignItems: 'center',
        height: 50,
        width: '50%',
        borderRadius: 20,
        margin: 10,
        marginLeft: 5,
        marginRight: 30,
      },
})


function Otp({navigation}) {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const stopLoading = () => {
    setTimeout(() => {
      setLoading(isLoading);
      setIsSuccess(!isSuccess);
      navigation.navigate('SignupForm');
    }, 2000);
  };
  return (
    <View
      style={{
        backgroundColor: '#f2f2f2',
        margin: 10,
        padding: 16,
        borderRadius: 20,
      }}>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            width: 150,
            //   marginTop: 5,
          }}>
          enter one time password
        </Text>
        <Text style={{color: 'gray', fontSize: 18, width: 200}}>
          please enter otp sent to your mobile number
        </Text>
        <View>
          <TextInput
            placeholder="1234"
            placeholderTextColor="#7d7d7d"
            style={{fontSize: 30, fontWeight: 'bold'}}
            autoFocus={true}
            maxLength={4}
            keyboardType={'numeric'}
          />
        </View>
        {isSuccess == false && isLoading == false ? (
          <TouchableOpacity
            onPress={() => {
              setLoading(!isLoading);
              stopLoading();
              this.panel.close()
            }}>
            <View style={styles.otpButton}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    marginTop: 12,
                    marginLeft: 5,
                    fontSize: 18,
                  }}>
                  Submit
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <View
            style={{flex: 1, flexDirection: 'row', margin: 5, marginLeft: 10}}>
            {isLoading == true ? (
              <ActivityIndicator size="small" color="#ff297f" />
            ) : (
              <View style={{marginTop: -10}}>
                <Icon name="check" color="#ff297f" size={30} />
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

export default Otp;

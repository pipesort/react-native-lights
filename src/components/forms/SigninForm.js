import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  signinCard: {
    // width: 250,
    height: 400,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    margin: 10,
    // marginTop: -10,
    borderRadius: 20,
    // borderBottomLeftRadius: 40,
    // borderTopRightRadius: 40,
    padding: 16,
  },
  buttonCard: {
    backgroundColor: '#f2f2f2',
    borderTopLeftRadius: 50,
    height: 200,
  },
  signInButton: {
    justifyContent: 'flex-end',
    backgroundColor: '#ff297f',
    alignItems: 'center',
    height: 50,
    width: '50%',
    borderRadius: 20,
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  otpButton: {
    justifyContent: 'flex-end',
    backgroundColor: '#ff297f',
    alignItems: 'center',
    height: 50,
    width: '50%',
    borderRadius: 20,
    margin: 10,
    marginRight: 30,
  },
});


function SigninForm({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 3,
        }}>
        <View style={styles.signinCard}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              width: 150,
              //   marginTop: 5,
            }}>
            enter your mobile number
          </Text>
          <Text style={{color: 'gray', fontSize: 18, width: 200}}>
            please enter registered mobile number
          </Text>
          <View>
            <TextInput
              placeholder="9999999999"
              placeholderTextColor="#7d7d7d"
              style={{fontSize: 30, fontWeight: 'bold'}}
              autoFocus={true}
              maxLength={10}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonCard}>
        <Text style={{color: 'gray', fontSize: 18, margin: 30}}>
          By clicking Sign in you are agree with our terms & conditions
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.panel.open();
          }}>
          <View style={styles.signInButton}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'white',
                  marginTop: 12,
                  marginLeft: 5,
                  fontSize: 18,
                }}>
                Sign in
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={c => (this.panel = c)}
        height={300}
        duration={300}
        closeOnDragDown={true}
        customStyles={{
          container: {
            // justifyContent: 'center',
            // alignItems: 'center',
           
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <View
          style={{
            backgroundColor: '#f2f2f2',
            margin: 10,
            padding: 16,
            borderRadius: 20,
          }}>
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
            />
          </View>
          <TouchableOpacity onPress={() => {
            this.panel.close();
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
        </View>
      </RBSheet>
    </View>
  );
}

export default SigninForm;

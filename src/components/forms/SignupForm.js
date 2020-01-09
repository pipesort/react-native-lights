import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
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
  buttonCard: {
    backgroundColor: 'purple',
    borderTopLeftRadius: 50,
    height: 200,
  },
  signinCard: {
    height: 400,
    flexDirection: 'column',
    margin: 10,
    borderRadius: 20,
    padding: 16,
  },
  buttonCard: {
    backgroundColor: '#fafafa',
    borderTopLeftRadius: 50,
    height: 700,
    marginTop: 40,
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
    marginLeft: -3,
    // marginRight: 20,
  },
});

const cities = [
  'Arcot',
  'Chengalpattu',
  'Chennai',
  'Chidambaram',
  'Coimbatore',
  'Cuddalore',
  'Dharmapuri',
  'Dindigul',
  'Erode',
  'Kanchipuram',
  'Kanniyakumari',
  'Kodaikanal',
  'Kumbakonam',
  'Madurai',
  'Mamallapuram',
  'Nagappattinam',
  'Nagercoil',
  'Palayankottai',
  'Pudukkottai',
  'Rajapalaiyam',
  'Ramanathapuram',
  'Salem',
  'Thanjavur',
  'Tiruchchirappalli',
  'Tirunelveli',
  'Tiruppur',
  'Tuticorin',
  'Udhagamandalam',
  'Vellore',
];

const states = [
  'Andaman & Nicobar',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra & Nagar Haveli',
  'Daman & Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu & Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Orissa',
  'Pondicherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Tripura',
  'Uttar Pradesh',
  'Uttaranchal',
  'West Bengal',
];
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Angola',
  'Anguilla',
  'Antartica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Ashmore and Cartier Island',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burma',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Clipperton Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo, Democratic Republic',
  'Congo, Republic of the',
  'Cook Islands',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czeck Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Europa Island',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'Antarctic Lands',
  'Gabon',
  'Gambia, The',
  'Gaza Strip',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Glorioso Islands',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island',
  'Holy See (Vatican City)',
  'Honduras',
  'Hong Kong',
  'Howland Island',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Ireland, Northern',
  'Israel',
  'Italy',
  'Jamaica',
  'Jan Mayen',
  'Japan',
  'Jarvis Island',
  'Jersey',
  'Johnston Atoll',
  'Jordan',
  'Juan de Nova Island',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Man, Isle of',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia',
  'Midway Islands',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcaim Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romainia',
  'Russia',
  'Rwanda',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Pierre and Miquelon',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Scotland',
  'Senegal',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia',
  'Spain',
  'Spratly Islands',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Tobago',
  'Toga',
  'Tokelau',
  'Tonga',
  'Trinidad',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'Uruguay',
  'USA',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Virgin Islands',
  'Wales',
  'Wallis and Futuna',
  'West Bank',
  'Western Sahara',
  'Yemen',
  'Yugoslavia',
  'Zambia',
  'Zimbabwe',
];
function TextBox({placeholder, label}) {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={{color: '#787878', fontSize: 14}}>{label}</Text>
      <View style={{marginLeft: -3}}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#c4c4c4"
          style={{fontSize: 18, fontWeight: 'bold'}}
        />
      </View>
    </View>
  );
}

function SelectBox({
  placeholder,
  label,
  renderItem,
  onSelect,
  data,
  onFocus,
  onTextChange,
}) {
  const [value, setValue] = useState('');
  const ref = useRef(null);
  return (
    <>
      <View style={{marginBottom: 10}}>
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
                    ref.current.close()
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

function City({city, setCity}) {
  return (
    <View style={{padding: 5, margin: 10}}>
      <Text style={{color: 'black', fontSize: 16}}>{city}</Text>
    </View>
  );
}

function State({state}) {
  return (
    <View style={{padding: 5, margin: 10}}>
      <Text style={{color: 'black', fontSize: 16}}>{state}</Text>
    </View>
  );
}

function Country({country}) {
  return (
    <View style={{padding: 5, margin: 10}}>
      <Text style={{color: 'black', fontSize: 16}}>{country}</Text>
    </View>
  );
}

function SignupForm({navigation}) {
  navigation.setOptions({
    headerStyle: {
      elevation: 0,
      backgroundColor: 'transparent',
    },
  });



  return (
    <View style={{flex: 1, backgroundColor: '#c2c2c2'}}>
      <ScrollView>
        <View style={styles.buttonCard}>
          <View style={styles.signinCard}>
            <Text
              style={{
                color: '#333333',
                fontSize: 20,
                fontWeight: 'bold',
                width: 150,
                //   marginTop: 5,
              }}>
              register here
            </Text>

            <View style={{marginTop: 15}}>
              <TextBox placeholder="john doe" label="full name" />
              <TextBox placeholder="9999999999" label="mobile number" />
              <TextBox placeholder="address line 1" label="address line 1" />
              <TextBox placeholder="address line 2" label="address line 2" />
              <SelectBox
                placeholder="select city"
                data={cities}
                onSelect={item => item}
                renderItem={({item}) => (
                  <City
                    id={item}
                    city={item}
                  />
                )}
                label="city"
              />
              <SelectBox
                placeholder="select state"
                data={states}
                onSelect={item => item}
                renderItem={({item}) => <State id={item} state={item} />}
                label="state"
              />
              <SelectBox
                placeholder="select country"
                data={countries}
                onSelect={item => item}
                renderItem={({item}) => <Country id={item} country={item} />}
                label="country"
              />
              <TouchableOpacity>
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignupForm;

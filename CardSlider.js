import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

function SlidingCards({
  data
}) {


  return (
    <ScrollView horizontal>
      {data.map((cardData, index) => (
        <View style={{
            backgroundColor: "#2675FC" ,
            height: 180,
            flexDirection: "column",
            margin:10,
            borderRadius: 15,
            padding: 10,
            width: 10,
          }} key={index}>
          <Text style={{
      color: "white",
      fontSize:  20,
      fontWeight: "bold",
    }}>{cardData.title}</Text>
          <ScrollView>
            <Text style={{color: "white", fontSize: 14 }}>
              {cardData.description}
            </Text>
          </ScrollView>
          {cardData.buttonTitle ? (
            <TouchableOpacity>
              <View style={{ width: "70%",
      height: 40,
      marginTop: 7,
      backgroundColor: "#05ADA5",
      borderRadius: 10,
      padding: 4,}}>
                {cardData.buttonFunction ? (
                  <TouchableOpacity onPress={cardData.buttonFunction}>
                    <Text style={card.buttonTitleStyle}>
                      {cardData.buttonTitle}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={{color : "white",
                    textAlign: "center",
                    fontSize: 12 ,
                    marginTop: 14   }}>
                    {cardData.buttonTitle}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
}

function CardSlider({
  data
}) {
  return (
    <>
        <SlidingCards
            data={data}
        />
        </>
  );
}

export default CardSlider;

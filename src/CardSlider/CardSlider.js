import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

function SlidingCards({data}) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map(cardData => (
        <>
          {cardData.backgroundImage ? (
            <View
              style={{
                flex: 1,
                margin: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#eee',
                  borderRadius: cardData.cardBorderRadius
                    ? cardData.cardBorderRadius
                    : 15,
                  overflow: 'hidden',
                  height: cardData.cardHeight ? cardData.cardHeight : 200,
                }}>
                <View>
                  <TouchableOpacity
                    onPress={
                      cardData.buttonFunction ? cardData.buttonFunction : null
                    }>
                    <Image
                      source={cardData.backgroundImage}
                      style={{
                        height: 115,
                        width: 155,
                      }}
                    />
                  </TouchableOpacity>
                </View>

                <ScrollView style={{paddingBottom: 10}} showsVerticalScrollIndicator={false}>
                  <View
                    style={{
                      padding: cardData.cardPadding ? cardData.cardPadding : 10,
                      width: cardData.cardWidth ? cardData.cardWidth : 155,
                    }}>
                    {/* Card Header*/}
                    <View
                      style={{
                        flex: 1,
                        justifyContent: cardData.cardHeaderJustifyContent ? cardData.cardHeaderJustifyContent : "flex-start",
                        alignItems: cardData.cardHeaderAlignItem ? cardData.cardHeaderAlignItem : "flex-start",
                      }}>
                      <Text
                        style={{
                          color: cardData.primaryTextColor
                            ? cardData.primaryTextColor
                            : 'black',
                          fontSize: cardData.primaryTextSize
                            ? cardData.primaryTextSize
                            : 20,
                          fontWeight: 'bold',
                        }}>
                        {' '}
                        {cardData.title}
                      </Text>
                    </View>
                    {/*card Body*/}
                    <View
                      style={{
                        flex: 1,
                        height: cardData.cardBodyHeight ?  cardData.cardBodyHeight : 100,                        alignItems: cardData.cardBodyAlignItem ? cardData.cardBodyAlignItem : "flex-start" ,
                        justifyContent: cardData.cardBodyJustifyContent ?  cardData.cardBodyJustifyContent : "flex-start",
                      }}>
                      <Text
                        style={{
                          color: cardData.secondaryTextColor
                            ? cardData.secondaryTextColor
                            : '#777',
                          margin: cardData.secondaryTextMargin
                            ? cardData.secondaryTextMargin
                            : 5,
                        }}>
                        {cardData.description}
                      </Text>
                    </View>
                  </View>
                </ScrollView>
                
              </View>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: cardData.cardBackground
                  ? cardData.cardBackground
                  : '#2675fc',
                height: cardData.cardHeight ? cardData.cardHeight : 200,
                flexDirection: 'column',
                margin: cardData.cardMargin ? cardData.cardMargin : 10,
                borderRadius: cardData.cardBorderRadius
                  ? cardData.cardBorderRadius
                  : 15,
                padding: cardData.cardPadding ? cardData.cardPadding : 10,
                width: cardData.cardWidth ? cardData.cardWidth : 155,
              }}>
              {/*Card - header*/}

              <View>
                <Text
                  style={{
                    color: cardData.primaryTextColor
                      ? cardData.primaryTextColor
                      : 'white',
                    fontSize: cardData.primaryTextSize
                      ? cardData.primaryTextSize
                      : 20,
                    fontWeight: 'bold',
                  }}>
                  {cardData.title}
                </Text>
              </View>

              {/*Card Body*/}
              <View style={{flex: 2, justifyContent: 'center'}}>
                <ScrollView
                  style={{flex: 1}}
                  contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                    paddingTop: 5, 
                      height: cardData.cardBodyHeight ? cardData.cardBodyHeight : 100,
                      alignItems: cardData.cardBodyAlignItem ? cardData.cardBodyAlignItem : "flex-start",
                      justifyContent: cardData.cardBodyJustifyContent ? cardData.cardBodyJustifyContent : "flex-start",
                    }}>
                    <Text
                      style={{
                        color: cardData.secondaryTextColor
                          ? cardData.secondaryTextColor
                          : 'white',
                        fontSize: cardData.secondaryTextSize
                          ? cardData.secondaryTextSize
                          : 14,
                      }}>
                      {cardData.description}
                    </Text>
                  </View>
                </ScrollView>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: cardData.cardButtomJustifyContent ? cardData.cardButtomJustifyContent : "flex-start",
                  alignItems: cardData.cardButtonAlignItem ? cardData.cardButtonAlignItem : "flex-start",
                }}>
                {cardData.buttonTitle ? (
                  <TouchableOpacity
                    onPress={
                      cardData.buttonFunction ? cardData.buttonFunction : null
                    }>
                    <View
                      style={{
                        width: cardData.buttonWidth
                          ? cardData.buttonWidth
                          : '70%',
                        height: cardData.buttonHeight
                          ? cardData.buttonHeight
                          : 40,
                        marginTop: cardData.buttonTop ? cardData.buttonTop : 14,
                        backgroundColor: cardData.buttonBackground
                          ? cardData.buttonBackground
                          : '#05ada5',
                        borderRadius: cardData.buttonBorderRadius
                          ? cardData.buttonBorderRadius
                          : 10,
                        padding: cardData.buttonPadding
                          ? cardData.buttonPadding
                          : 4,
                      }}>
                      <Text
                        style={{
                          color: cardData.buttonTextColor
                            ? cardData.buttonTextColor
                            : 'white',
                          textAlign: cardData.buttonTextAlign
                            ? cardData.buttonTextAlign
                            : 'center',
                          fontSize: cardData.buttonTextSize
                            ? cardData.buttonTextSize
                            : 12,
                          marginTop: cardData.buttonTextTop
                            ? cardData.buttonTextTop
                            : 7,
                        }}>
                        {cardData.buttonTitle}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          )}
        </>
      ))}
    </ScrollView>
  );
}

function CardSlider({data}) {
  return (
    <>
      <SlidingCards data={data} />
    </>
  );
}

export default CardSlider;

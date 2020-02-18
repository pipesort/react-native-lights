
# **1000 Lights**

Light-Weight React Native UI library to build modern Mobile apps.

![alt text](https://github.com/pipesort/react-native-lights/blob/npm/assets/fonts/Images/banner1.png)

## Contains

+ **6+** completely customizable components built and tested to ease your efforts
+ Based on the **Modern UI and UX trends**.
+ **Light-weight**
+ **Simple and clear** documentation with examples

## Quick start

**1000 Lights** is a library that's tested and built for your to develop modern mobile apps using React Native.

We give you modern and highly customizable general use components that you use in & out in your project.

## Installation

```javascript

yarn add 1000Lights

```

**OR**

```javascript

npm install --save 1000Lights

```
## Usage:

BottomSheet is the new modal window. BottomSheet component is a fully customiable component that shows notifiation and alert message on 

```javascript

import BottomSheet from "react-native-1000Lights";
const BottomSheet = () => {
    const data =
     {
       buttonText: 'click me',
       buttonStyles:{borderRadius:5,backgroundColor:"black", buttonTextColor:"white"},
       bottomSheetStyles:{backgroundColor:"#25e8e2" , textFontSize:15, textColor:"white"},
       bodyText: 'Show notification the modern way',  
     }
  return (
    <View style={{flex:1}}
<BottomSheet data={data} />
    </View>
  );
};

```

### Example

![react-native-1000Lights/BottomSheet](https://github.com/pipesort/native-components/blob/npm/assets/fonts/Images/CroppedBottomSheetGif.gif)


Just pass in the array and have your card slider ready to use in your app


```javascript


import CardSlider from "react-native-1000Lights";

const ColoredCards = () => {

     const cardItems = [
        {
          title: 'Card 1 ',
          description: 'Include images to your card',
          buttonTitle: 'Get Started',
          backgroundImage: {uri:'https://i.imgur.com/2nCt3Sbl.jpg'},
          buttonFunction: function(){
            Alert.alert("Thank You", "for choosing Thousand Lights!", [{text:"Welcome"}])
        }
        },
        {
            title: 'Card 2',
            description: 'You can choose to just have background color',
            buttonTitle: 'Get Started',
            backgroundColor: 'black',
        },
        {
          title: 'Card 3 ',
          description: 'onPress function is tagged to the image.',
          buttonTitle: 'Get Started',
          backgroundImage: {uri:'https://i.imgur.com/2nCt3Sbl.jpg'},
          buttonFunction: function(){
              Alert.alert("Thank You", "for choosing Thousand Lights!", [{text:"Welcome"}])
          }
        },
        {
            title: 'Card 2',
            description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            buttonTitle: 'Get Started',
            backgroundImage:{uri:'https://i.imgur.com/KZsmUi2l.jpg'},
        },
      ];


  return (
    <View style={{flex:1}}>
    <CardSlider data={cardItems} />
    </View>
  );
};

```

### Example

![react-native-1000Lights/BottomSheet](https://github.com/pipesort/native-components/blob/npm/assets/fonts/Images/cropedCardSliderGif.gif)

<br />
Input

Different types of input with/without Icons can now be used with ease.

```javascript


import Input from "react-native-1000Lights";

  return (
    <Input
      placeholder="9999999999"
      placeholderTextColor="#7d7d7d"
      autoFocus={true}
      maxLength={10}
      keyboardType={"numeric"}
      leftInputIcon={
        <Icon
          name="face"
          size={25}
          // color="white"
          style={{ marginRight: 15 }}
        />
  );
};

```

<br />

![](https://github.com/pipesort/native-components/blob/npm/assets/fonts/Images/cropedInputImage.jpg)

To view complete documenation you can check out **[1000lights documentation page](https://pipesort.github.io/1000lights-website/gettingStarted)**.

## How can I support 1000Lights

+ Give us some :star2: stars 
+ Follow us on [Twitter](https://twitter.com/pipesort)
+ Suggest new components, submit bugs and help us improve the library better


## Licence

MIT licence

## From Developers

Made with :heart: by Pipesort developers.

 




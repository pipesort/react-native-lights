
# **1000 Lights**

Light-Weight React Native UI library to build modern Mobile apps.

![alt text](https://github.com/pipesort/native-components/blob/npm/assets/fonts/Images/banner1.png)

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

import ColoredCards from "react-native-1000Lights";
const ColoredCards = () => {
    const data =
     {
       buttonText: 'click me',
       buttonStyles:{borderRadius:5,backgroundColor:"black", buttonTextColor:"white"},
       bottomSheetStyles:{backgroundColor:"#25e8e2" , textFontSize:15, textColor:"white"},
       bodyText: 'Show notification the modern way',  
     }
  return (
    <View style={{flex:1}}
<BottomSheet data={data}/>
    </View>
  );
};

```

![](https://github.com/pipesort/native-components/blob/npm/assets/fonts/Images/cropedColoredCardsGif.gif)



### [Documentation](https://www.google.com)

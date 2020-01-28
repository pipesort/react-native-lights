import React, {ReactElement} from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ImageProps,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

export interface CardTitleProps extends ImageProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  description?: string;
  descriptionStyle?: StyleProp<TextStyle>;
  image?: ImageProps;
  imageStyle?: StyleProp<ImageStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  headerContainerStyle?: StyleProp<ViewStyle>;
  titleWrapperStyle?: StyleProp<ViewStyle>;
  underlayImage?: boolean;
}

const CardHeader = ({
  title,
  titleStyle,
  description,
  descriptionStyle,
  leftIcon,
  rightIcon,
  image,
  imageStyle,
  imageContainerStyle,
  headerContainerStyle,
  titleWrapperStyle,
  underlayImage,
  ...rest
}: CardTitleProps): ReactElement<CardTitleProps> => {
  const Component = (
    <View style={[styles.headerContainer, headerContainerStyle]}>
      <View style={[styles.titleWrapper, titleWrapperStyle]}>
        {leftIcon && <View style={[styles.leftIcon]}>{leftIcon}</View>}
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            height: 50,
          }}>
          {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          {description && (
            <Text style={[styles.description, descriptionStyle]}>
              {description}
            </Text>
          )}
        </View>

        {rightIcon && <View>{rightIcon}</View>}
      </View>

      {!underlayImage && image && (
        <View style={[imageContainerStyle]}>
          <Image source={image} style={[styles.imageStyle, imageStyle]} />
        </View>
      )}
    </View>
  );

  if (!underlayImage || !image) {
    return Component;
  }

  return (
    <ImageBackground source={image} style={[styles.imageStyle, imageStyle]}>
      {Component}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {},
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
  },
  title: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
    color: '#000000',
    fontWeight: '400',
    marginBottom: 2,
  },
  imageStyle: {
    height: 150,
  },
  leftIcon: {
    justifyContent: 'center',
    marginRight: 16,
  },
});

export default CardHeader;

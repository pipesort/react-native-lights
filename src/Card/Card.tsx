import React, {ReactElement, Children} from 'react';
import {
  TouchableOpacityProps,
  View,
  ViewStyle,
  FlatList,
  StyleSheet,
  StyleProp,
  Image,
  ImageProps,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export interface CardProps {
  children?: ReactElement;
  style?: StyleProp<ViewStyle>;
}

const Card = ({children, style}: CardProps): ReactElement<CardProps> => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    margin: 15,
    borderRadius: 2,
    elevation: 1,
  },
});

export default Card;

import React, {ReactElement, Children} from 'react';
import {
  TouchableOpacityProps,
  View,
  StyleProp,
  ViewStyle,
  FlatList,
  StyleSheet,
  Image,
  ImageProps,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Divider from '../Divider/Divider';

export interface CardFooterProps {
  children: ReactElement;
  footerStyle?: StyleProp<ViewStyle>;
}

const CardFooter = ({
  children,
  footerStyle,
}: CardFooterProps): ReactElement<CardFooterProps> => {
  return (
    <View style={[styles.footer, footerStyle]}>
      <Divider />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
  },
});

export default CardFooter;

import React, {ReactElement} from 'react';
import {View, ViewStyle, StyleProp, StyleSheet} from 'react-native';

interface DividerProps {
  style?: StyleProp<ViewStyle>;
}

const Divider = ({style}: DividerProps): ReactElement<DividerProps> => {
  return <View style={[styles.divider, style]} />;
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#bdbdbd',
    height: StyleSheet.hairlineWidth,
  },
});

export default Divider;

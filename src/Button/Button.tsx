import React, {ReactElement} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

export interface ButtonProps extends TouchableOpacityProps {
  disabled?: boolean;
  children?: string;
  size?: string;
  color?: string;
  appearance?: string;
}

const Button = ({
  children,
  size = 'medium',
  color = 'primary',
  appearance = 'normal',
  style,
  disabled,
  ...rest
}: ButtonProps): ReactElement<ButtonProps> => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.2} {...rest}>
        <View style={[styles({color, appearance}).button, style]}>
          <Text style={[styles({size}).text]}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = ({size, color, appearance}: ButtonProps) => {
  return StyleSheet.create({
    button: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: colors[color] || colors['primary'],
      borderRadius: 5,
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderWidth: appearance === 'bordered' ? StyleSheet.hairlineWidth : 0,
      borderColor: colors[color] || colors['primary'],
    },
    text: {
      color: '#ffffff',
      fontSize: size === 'medium' ? 20 : size === 'small' ? 10 : 30,
    },
  });
};

export default Button;

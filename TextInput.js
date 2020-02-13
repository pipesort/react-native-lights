import React, {ReactElement} from 'react';

import {
  View,
  TextInputProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
  TextInput,
} from 'react-native';

export interface InputProps extends TextInputProps {
  label?: string;
  message?: string;
  disabled?: boolean;
  leftInputIcon?: ReactElement;
  rightInputIcon?: ReactElement;
  messageIcon?: ReactElement;
  style?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  messageContainerStyle?: StyleProp<ViewStyle>;
  appearance?: string;
}

const Input = ({
  style,
  appearance = 'underlined',
  inputContainerStyle,
  messageContainerStyle,
  label,
  disabled,
  message,
  leftInputIcon,
  rightInputIcon,
  messageIcon,
  ...rest
}: InputProps): ReactElement<InputProps> => {
  return (
    <View style={[styles({}).input, style]}>
      <Text style={[styles({}).label]}>{label}</Text>
      <View style={[styles({appearance}).inputContainer, inputContainerStyle]}>
        {leftInputIcon && <View>{leftInputIcon}</View>}
        <TextInput
          {...rest}
          editable={!disabled}
          style={[styles({}).inputStyle]}
        />
        {rightInputIcon && (
          <View style={[styles({}).iconContainer]}>{rightInputIcon}</View>
        )}
      </View>
      <View style={[styles({}).messageContainer, messageContainerStyle]}>
        {messageIcon && (
          <View style={[styles({}).iconContainer]}>{messageIcon}</View>
        )}
        <Text style={[styles({}).message]}>{message}</Text>
      </View>
    </View>
  );
};

const styles = ({appearance}: InputProps) =>
  StyleSheet.create({
    input: {
      width: '100%',
      paddingHorizontal: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      borderWidth:
        appearance === 'bordered' || appearance === 'rounded'
          ? StyleSheet.hairlineWidth
          : 0,
      borderBottomWidth: StyleSheet.hairlineWidth,
      alignItems: 'center',
      borderColor: '#bdbdbd',
      borderRadius: appearance === 'rounded' ? 10 : 0,
    },
    iconContainer: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputStyle: {
      color: '#000000',
      fontSize: 20,
      flex: 1,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000',
      marginBottom: 5,
    },
    message: {
      margin: 5,
      fontSize: 14,
      color: '#ff0000',
    },
    messageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default Input;
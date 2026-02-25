import { FC } from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ 
  title, 
  onPress, 
  style, 
  textStyle,
  disabled 
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
      {
        backgroundColor: disabled ? '#999' : '#000',
        padding: 14,
        borderRadius: 8,
      },
      style,
    ]}
  >
    <Text 
      style={[
        { 
          color: '#fff', 
          textAlign: 'center', 
          fontWeight: '500' 
        },
        textStyle,
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default Button;

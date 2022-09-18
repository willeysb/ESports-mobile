import { ColorValue, Text, View } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface Props {
  label: string,
  value: string,
  ColorValue?: ColorValue;
}

export function DuoInfo({label, value, ColorValue = THEME.COLORS.TEXT}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label} >
        {label}
      </Text>
      <Text 
        numberOfLines={1}
        style={[styles.value, {color: ColorValue}]} >
        {value}
      </Text>

    </View>
  );
}
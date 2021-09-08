import React from 'react';
import { View, Text } from '../Themed';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  onPress: any;
  children: null;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C4D15F',
    width: '87.4%',
    padding: 9,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
const Button: React.FC<Props> = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {children}
    </TouchableOpacity>
  );
};
Button.defaultProps = {
  children: null,
  onPress: () => {},
};

export default Button;

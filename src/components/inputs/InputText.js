import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputText = ({
  handleChangeText,
  value,
  placeholder,
  password,
  margin,
}) => {
  const MARGIN = {
    marginTop: margin.top,
    marginLeft: margin.left,
    marginRight: margin.right,
    marginBottom: margin.bottom,
  };
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={handleChangeText}
      value={value}
      style={[styles.input, styles.text, MARGIN]}
      secureTextEntry={password}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#888686',
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    color: '#6A6363',
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
});

export default InputText;

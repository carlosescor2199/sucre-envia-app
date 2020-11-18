import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({
  onPress,
  title,
  bgColor,
  borColor,
  textColor,
  width,
  margin,
}) => {
  const BGCOLOR = { backgroundColor: bgColor };
  const BORDERCOLOR = { borderColor: borColor };
  const TEXTCOLOR = { color: textColor };
  const WIDTH = { width: width };
  const MARGIN = {
    marginTop: margin.top,
    marginLeft: margin.left,
    marginRight: margin.right,
    marginBottom: margin.bottom,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, BGCOLOR, WIDTH, MARGIN, BORDERCOLOR]}>
      <Text style={[styles.buttonText, TEXTCOLOR]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // ...
  buttonContainer: {
    elevation: 8,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
  },
});

export default Button;

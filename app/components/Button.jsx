import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#005DB2",
    fontSize: 35,
    fontFamily:'AcuminPro-Bold',
  },
  textSecondary: {
    color: "#fff",
    fontSize: 34,
    fontFamily:'AcuminPro-Regular',
  },
  button: {
    backgroundColor: "#303136",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    margin: 8,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#5F6061",
  },
  buttonAccent: {
    backgroundColor: "#005DB2",
  },
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
    textStyles.push(styles.textSecondary);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

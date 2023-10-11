import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type ButtonProps = {
  buttonText: string;
  onPress: () => void;
};

const CustomButton = ({ buttonText, onPress }: ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    backgroundColor: "#FF5A3F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

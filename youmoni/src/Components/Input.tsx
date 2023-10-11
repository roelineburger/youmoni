// InputField.js
import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

type CustomInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  scanInput?: boolean;
};

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  scanInput,
}: CustomInputProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={
          scanInput
            ? { ...styles.input, ...styles.scanInputText }
            : styles.input
        }
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="gray"
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  label: {
    marginLeft: 4,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    margin: 0,
    marginBottom: 20,
  },
  scanInputText: {
    color: "#FF5A3F",
  },
});

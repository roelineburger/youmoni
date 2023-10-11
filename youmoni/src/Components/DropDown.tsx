import React from "react";
import { Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type CustomDropDownProps = {
  data: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  label: string;
};

const CustomDropDown = ({ label, data, placeholder, value, onChange }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Dropdown
        style={styles.input}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        placeholderStyle={styles.placeholderStyle}
        onChange={onChange}
      />
    </>
  );
};

export default CustomDropDown;

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
  placeholderStyle: {
    color: "gray",
  },
});

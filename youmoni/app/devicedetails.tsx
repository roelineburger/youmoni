import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";

import DeviceStatusDropDown from "../src/components/DeviceStatusDropDown";
import DeviceManufacturerDropDown from "../src/components/DeviceManufacturerDropDown";
import DeviceIdField from "../src/components/DeviceIdField";
import { useLocalSearchParams } from "expo-router";

// // @ts-ignore
import deviceManufacturerData from "../src/constants/deviceManufacturerData.json";
import deviceStatusData from "../src/constants/deviceStatusData.json";

import { Dropdown } from "react-native-element-dropdown";

const DeviceDetails = () => {
  //const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [deviceManufacturer, setDeviceManufacturer] = useState("");

  const [deviceStatus, setDeviceStatus] = useState("");
  const [modelName, setModelName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const params = useLocalSearchParams();
  const { data } = params;
  const [value, setValue] = useState(null);

  const handleSubmit = () => {
    alert(
      `${modelName} by ${deviceManufacturer} with device ID ${data} for customer ${customerName} has been submitted. Device status: ${deviceStatus}`
    );
  };

  const dropDownLabels = ["Device Manufacturer", "Device Status"];

  const renderLabel = () => {
    if (deviceManufacturer || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Device Manufacturer
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={deviceManufacturerData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select Device Manufacturer" : "..."}
        value={deviceManufacturer}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setDeviceManufacturer(item.value);
          setIsFocus(false);
        }}
      />
      <TextInput
        placeholder="Model Name"
        style={{ padding: 50 }}
        onChangeText={(text) => setModelName(text)}
      />
      <TextInput
        placeholder="Customer Name"
        style={{ padding: 50 }}
        onChangeText={(text) => setCustomerName(text)}
      />
      {/* Break this out to own Button component */}
      <Button
        onPress={handleSubmit}
        title="Submit"
        color="red"
        accessibilityLabel="Scan QR Code"
      />
    </View>
  );
};

export default DeviceDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

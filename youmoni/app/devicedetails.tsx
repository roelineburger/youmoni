import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

import DeviceStatusDropDown from "../src/components/DeviceStatusDropDown";

import DeviceManufacturerDropDown from "../src/components/DeviceManufacturerDropDown";
import DeviceIdField from "../src/components/DeviceIdField";
import { useLocalSearchParams } from "expo-router";

import deviceManufacturerData from "../src/constants/deviceManufacturerData.json";
import deviceStatusData from "../src/constants/deviceStatusData.json";

import { Dropdown } from "react-native-element-dropdown";
import CustomButton from "../src/components/Button";

const DeviceDetails = () => {
  const [deviceManufacturer, setDeviceManufacturer] = useState<string>("");
  const [deviceStatus, setDeviceStatus] = useState<string>("");
  const [modelName, setModelName] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const params = useLocalSearchParams();
  const { data } = params;

  const handleSubmit = () => {
    alert(
      `${modelName} by ${deviceManufacturer} with device ID ${data} for customer ${customerName} has been submitted. Device status: ${deviceStatus}`
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>Scanned Device ID</Text>
      <TextInput
        style={{ ...styles.input, ...styles.scanInputText }}
        value={data.toString()}
      />

      <Text style={styles.label}>Device Manufacturer</Text>
      <Dropdown
        style={styles.input}
        data={deviceManufacturerData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Device Manufacturer"}
        value={deviceManufacturer}
        placeholderStyle={styles.placeholderStyle}
        onChange={(item) => {
          setDeviceManufacturer(item.value);
        }}
      />

      <Text style={styles.label}>Device Status</Text>
      <Dropdown
        style={styles.input}
        data={deviceStatusData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Device Status"
        value={deviceStatus}
        placeholderStyle={styles.placeholderStyle}
        onChange={(item) => {
          setDeviceStatus(item.value);
        }}
      />

      <Text style={styles.label}>Model Name</Text>
      <TextInput
        placeholder="Model Name"
        style={styles.input}
        onChangeText={(text) => setModelName(text)}
      />

      <Text style={styles.label}>Customer Name</Text>
      <TextInput
        placeholder="Customer Name"
        style={styles.input}
        onChangeText={(text) => setCustomerName(text)}
      />

      <CustomButton buttonText="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default DeviceDetails;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  logo: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  scanInputText: {
    color: "gray",
  },

  label: {
    marginLeft: 4,
  },

  button: {
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
  placeholderStyle: {
    color: "gray",
  },
});

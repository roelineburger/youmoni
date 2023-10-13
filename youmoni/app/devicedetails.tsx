import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import CustomInput from "../src/Components/Input";
import { useLocalSearchParams } from "expo-router";
import deviceManufacturerData from "../src/constants/deviceManufacturerData.json";
import deviceStatusData from "../src/constants/deviceStatusData.json";
import CustomButton from "../src/Components/Button";
import CustomDropDown from "../src/Components/DropDown";

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
    >
      <ScrollView style={{ paddingBottom: 100 }}>
        <View style={styles.container}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <CustomInput
            label="Scanned Device ID"
            value={data.toString()}
            scanInput
          />
          <CustomDropDown
            label="Device Manufacturer"
            data={deviceManufacturerData}
            placeholder="Device Manufacturer"
            value={deviceManufacturer}
            onChange={(item) => {
              setDeviceManufacturer(item.value);
            }}
          />
          <CustomDropDown
            label="Device Status"
            data={deviceStatusData}
            placeholder="Device Status"
            value={deviceStatus}
            onChange={(item) => {
              setDeviceStatus(item.value);
            }}
          />
          <CustomInput
            label="Model Name"
            placeholder="Model Name"
            value={modelName}
            onChangeText={setModelName}
          />
          <CustomInput
            label="Customer Name"
            placeholder="Customer Name"
            value={customerName}
            onChangeText={setCustomerName}
          />
          <View style={styles.buttonContainer}>
            <CustomButton buttonText="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DeviceDetails;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
  },
  logo: {
    width: "100%",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

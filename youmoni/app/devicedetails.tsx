import React from "react";
import { TextInput, View } from "react-native";

import DeviceStatusDropDown from "../src/Components/DeviceStatusDropDown";
import DeviceManufacturerDropDown from "../src/Components/DeviceManufacturerDropDown";
import DeviceIdField from "../src/Components/DeviceIdField";

const DeviceDetails = () => {
  return (
    <View>
      <DeviceIdField />
      <DeviceManufacturerDropDown />
      <DeviceStatusDropDown />

      <TextInput placeholder="Model Name" style={{ padding: 50 }} />
      <TextInput placeholder="Customer Name" style={{ padding: 50 }} />
    </View>
  );
};

export default DeviceDetails;

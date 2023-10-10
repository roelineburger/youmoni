import React from "react";
import { Button, TextInput, View } from "react-native";

import DeviceStatusDropDown from "../src/components/DeviceStatusDropDown";
import DeviceManufacturerDropDown from "../src/components/DeviceManufacturerDropDown";
import DeviceIdField from "../src/components/DeviceIdField";
import { useLocalSearchParams } from "expo-router";

const DeviceDetails = () => {
  const params = useLocalSearchParams();
  const { data } = params;
  console.log("data", typeof data);
  alert(data);
  return (
    <View>
      <DeviceIdField data={data} />
      <DeviceManufacturerDropDown />
      <DeviceStatusDropDown />
      <TextInput placeholder="Model Name" style={{ padding: 50 }} />
      <TextInput placeholder="Customer Name" style={{ padding: 50 }} />
      {/* Break this out to own Button component */}
      <Button
        //onPress={}
        title="Submit"
        color="red"
        accessibilityLabel="Scan QR Code"
      />
    </View>
  );
};

export default DeviceDetails;

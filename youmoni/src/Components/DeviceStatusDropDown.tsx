import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Text, TextInput, View } from "react-native";
// @ts-ignore
import deviceStatusData from "../constants/deviceStatusData.json";

const DeviceStatusDropDown = () => {
  const [deviceStatus, setDeviceStatus] = useState("");

  return (
    <View>
      <View>
        <Text>Device Status</Text>
        <Picker
          selectedValue={deviceStatus}
          onValueChange={(currentStatus) => setDeviceStatus(currentStatus)}
        >
          {deviceStatusData.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default DeviceStatusDropDown;

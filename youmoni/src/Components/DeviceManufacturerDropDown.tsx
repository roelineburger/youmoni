import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Text, TextInput, View } from "react-native";
// @ts-ignore
import deviceManufacturerData from "../constants/deviceManufacturerData.json";

const DeviceManufacturerDropDown = () => {
  const [deviceManufacturer, setdeviceManufacturer] = useState("");

  return (
    <View>
      <View>
        <Text>Device Manufacturer</Text>
        <Picker
          selectedValue={deviceManufacturer}
          onValueChange={(currentStatus) =>
            setdeviceManufacturer(currentStatus)
          }
        >
          {deviceManufacturerData.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default DeviceManufacturerDropDown;

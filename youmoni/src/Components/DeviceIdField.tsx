import React from "react";
import { Text, TextInput, View } from "react-native";

const DeviceIdField = (data) => {
  const deviceIdArray = Object.values(data);

  return (
    <View>
      {deviceIdArray.map((value, index) => (
        //@ts-ignore
        <Text key={index}>{value}</Text>
      ))}
    </View>
  );
};

export default DeviceIdField;

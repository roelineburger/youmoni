import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import YouMoniLogo from "./assets/youmoni.png";

export default function App() {
  const [scanned, setScanned] = useState(false);
  const [barcodeScannerVisible, setBarcodeScannerVisible] = useState(false);

  const toggleBarcodeScanner = () => {
    setBarcodeScannerVisible(!barcodeScannerVisible);
    setScanned(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <Image source={YouMoniLogo} />
        <Text style={styles.header}>Welcome to Youmoni</Text>
        <Text style={styles.subheader}>
          We connect your things and bring them online.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={toggleBarcodeScanner}
          title="Scan QR Code"
          color="#fff"
          accessibilityLabel="Scan QR Code"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  subheader: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#FF5A3F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
  },
});

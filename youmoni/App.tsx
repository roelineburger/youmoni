import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import YouMoniLogo from "./assets/youmoni.png";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeScannerVisible, setBarcodeScannerVisible] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // redirect to form screen and pass data to that screen and prefill the form

    console.log(data);
  };

  const toggleBarcodeScanner = () => {
    setBarcodeScannerVisible(!barcodeScannerVisible);
    setScanned(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

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

      {barcodeScannerVisible && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
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

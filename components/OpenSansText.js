import React from "react";
import { StyleSheet, Text } from "react-native";

const OpenSansText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans"
  }
});

export default OpenSansText;

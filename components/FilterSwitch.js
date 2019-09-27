import React from "react";
import { View, Switch, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import OpenSansText from "./OpenSansText";

const FilterSwitch = ({ onValueChange, value, label }) => {
  return (
    <View style={styles.filterContainer}>
      <OpenSansText>{label}</OpenSansText>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Colors.backgroundColor}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: 20
  }
});

export default FilterSwitch;

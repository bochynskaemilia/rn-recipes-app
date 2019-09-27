import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";

import OpenSansText from "./OpenSansText";
import Colors from "../constants/Colors";

const MealItem = ({ complexity, affordability, duration, title, onSelectMeal, image }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <TouchableCmp onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <OpenSansText>{duration} mins.</OpenSansText>
            <OpenSansText>{complexity}</OpenSansText>
            <OpenSansText>{affordability}</OpenSansText>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
    height: 200,
    backgroundColor: Colors.backgroundColor,
    borderRadius: 10,
    overflow: "hidden"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: Colors.accentColor,
    textAlign: "center"
  },
  caption: {
    fontFamily: "open"
  }
});

export default MealItem;

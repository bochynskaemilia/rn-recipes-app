import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/mock-data";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate("CategoryMeals");
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Categories",
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: Colors.accentColor
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 20
  }
});

export default CategoriesScreen;

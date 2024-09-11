import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  Alert,
  View,
  FlatList,
  LogBox,
  StyleSheet,
  Dimensions,
} from "react-native";

const HistoryScreen = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  const { width, height } = Dimensions.get("window");

  const [count, setCount] = useState(0);

  const data = [
    { key: "Devin" },
    { key: "Dan" },
    { key: "Dominic" },
    { key: "Jackson" },
    { key: "James" },
    { key: "Joel" },
    { key: "John" },
    { key: "Jillian" },
    { key: "Jimmy" },
    { key: "Julie" },
  ];
  const renderItem = ({ item }) => <Text style={styles.item}>{item.key}</Text>;
    console.log(height);
  return (
    <View>
      <View style={[{height: height * .75}]}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          data={data}
          renderItem={renderItem}
        />
      </View>
      <View style={[{height: height * .25}]}>
        <Button title="Add" onPress={() => Alert.alert('10')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
  },
});

export default HistoryScreen;

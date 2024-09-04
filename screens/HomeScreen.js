import { AnimatedCircularProgress } from "react-native-circular-progress";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
      <View
        style={[
          {
            flex: 1,
            alignContent: 'space-around',
            alignItems: "center"
          },
        ]}
      >
        <View style={[{ alignItems: "center" }]}>
          <Text>Protein</Text>
          <AnimatedCircularProgress
            size={200}
            width={3}
            fill={50}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
          >
            {(fill) => <Text>{50}</Text>}
          </AnimatedCircularProgress>
        </View>
        <View style={[{ alignItems: "center" }]}>
          <Text>Calories</Text>
          <AnimatedCircularProgress
            size={200}
            width={3}
            fill={50}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
          >
            {(fill) => <Text>{50}</Text>}
          </AnimatedCircularProgress>
        </View>
      </View>
  );
}
//hello

const styles = StyleSheet.create({});

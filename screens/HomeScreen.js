import React, { useState, useEffect } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button, StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {height } = Dimensions.get('window');

  const [currentProtein, setCurrentProtein] = useState(100);
  const [goalProtein, setGoalProtein] = useState('');

  const [currentCalorie, setCurrentCalorie] = useState(4000);
  const [goalCalorie, setGoalCalorie] = useState('');


  useEffect(() => {
    if (route.params?.newGoalProtein) {
      setGoalProtein(route.params.newGoalProtein);
    }
    if (route.params?.newGoalCalorie) {
      setGoalCalorie(route.params.newGoalCalorie);
    }
  }, [route.params?.newGoalProtein, route.params?.newGoalCalorie]);

  return (
    <SafeAreaView
      style={[
        {
          justifyContent: 'space-evenly',
          height: height/1.25,
        },
      ]}
    >

      <View style={[{ alignItems: "center" }]}>
        <Text style={styles.titleText}>Protein</Text>
        <AnimatedCircularProgress
          size={200}
          width={6}
          fill={(currentProtein/goalProtein) * 100}
          rotation={0}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
        >
          {(fill) => <Text style={styles.titleText}>{currentProtein + " g"}</Text>}
        </AnimatedCircularProgress>
      </View>
      
      <View style={[{ alignItems: "center" }]}>
          <Text style={styles.titleText}>Calories</Text>
          <AnimatedCircularProgress
            size={200}
            width={6}
            fill={(currentCalorie/goalCalorie) * 100}
            rotation={0}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
          >
            {(fill) => <Text style = {styles.titleText}>{currentCalorie + " cal"}</Text>}
          </AnimatedCircularProgress>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
  },
});
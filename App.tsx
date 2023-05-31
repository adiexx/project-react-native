import { StatusBar } from "react-native";
import React from "react";
import {Text, View} from "react-native";
import CSS from "csstype";
import { stack } from "sequelize/types/utils";

export default function App() {
  return (
    <View>
      <StatusBar style="light" backgroundColor= "black" translucent={false}/>
      <Text> a
      </Text>
    </View>
  );
}


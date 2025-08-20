import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "tomato",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "မူလစာမက်နှာ",
          tabBarLabelPosition: "beside-icon",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={16} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarLabelPosition: "beside-icon",
          tabBarIcon: ({ color }) => (
            <Ionicons name="time" size={16} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

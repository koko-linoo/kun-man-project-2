import { IconButton } from "@/components/Button";
import { theme } from "@/config/theme";
import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: { backgroundColor: "white", height: 70 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "မူလစာမျက်နှာ",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={16} color={color} />
          ),
          headerRight: () => (
            <IconButton onPress={() => router.push("/settings")}>
              <Ionicons name="settings" size={24} />
            </IconButton>
          ),
        }}
      />
      <Tabs.Screen
        name="other"
        options={{
          title: "အခြားစာရင်းများ",
          tabBarIcon: ({ color }) => (
            <Ionicons name="time" size={16} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

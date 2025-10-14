import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

export default function RootLayout() {
  useFonts({
    "Font-Regular": require("../assets/fonts/Padauk-Regular.ttf"),
    "Font-Bold": require("../assets/fonts/Padauk-Bold.ttf"),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="purchase-list" options={{ headerShown: false }} />
          <Stack.Screen name="milling-list" options={{ headerShown: false }} />
          <Stack.Screen
            name="remaining-list"
            options={{ headerShown: true, title: "လက်ကျန်စာရင်း" }}
          />
          <Stack.Screen name="employee-list" options={{ headerShown: false }} />
          <Stack.Screen name="settings" options={{ headerShown: true }} />
          <Stack.Screen name="sapa-list" options={{ headerShown: false }} />
          <Stack.Screen name="san-list" options={{ headerShown: false }} />
          <Stack.Screen name="sale-list" options={{ headerShown: false }} />
          <Stack.Screen
            name="other-milling-list"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="sale-total"
            options={{ headerShown: true, title: "ရောင်းအားစုစုပေါင်း" }}
          />
          <Stack.Screen
            name="purchase-total"
            options={{ headerShown: true, title: "ဝယ်ယူမှုစုစုပေါင်း" }}
          />
        </Stack>
        <StatusBar style="auto" />
        <Toast />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Font-Regular": require("../assets/fonts/Padauk-Regular.ttf"),
    "Font-Bold": require("../assets/fonts/Padauk-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

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
          <Stack.Screen name="remaining-list" options={{ headerShown: true }} />
          <Stack.Screen name="employee-list" options={{ headerShown: false }} />
          <Stack.Screen name="settings" options={{ headerShown: true }} />
          <Stack.Screen name="sapa-list" options={{ headerShown: false }} />
          <Stack.Screen name="san-list" options={{ headerShown: false }} />
          <Stack.Screen name="sale-list" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
        <Toast />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
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
          <Stack.Screen
            name="purchase-list"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="milling-list"
            options={{ title: "ဆန်ကြိတ် စာရင်း", headerShown: true }}
          />
          <Stack.Screen
            name="sale-list"
            options={{ title: "ဆန်ရောင်း စာရင်း", headerShown: true }}
          />
          <Stack.Screen
            name="remaining-list"
            options={{ title: "လက်ကျန် စာရင်း", headerShown: true }}
          />
          <Stack.Screen name="employee-list" options={{ headerShown: false }} />
          <Stack.Screen
            name="settings"
            options={{ headerShown: true, title: "Settings" }}
          />
          <Stack.Screen name="sapa-list" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
        <Toast />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

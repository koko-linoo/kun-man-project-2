import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "ဆန်ကြိတ် စာရင်း", headerShown: true }}
      />
      <Stack.Screen
        name="add-new"
        options={{ title: "ဆန်ကြိတ် စာရင်း အသစ်ထည့်ရန်", headerShown: true }}
      />
    </Stack>
  );
}

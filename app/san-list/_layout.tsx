import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "ဆန်အမျိုးအစား များ", headerShown: true }}
      />
      <Stack.Screen
        name="add-new"
        options={{ title: "ဆန်အမျိုးအစား အသစ်ထည့်ရန်", headerShown: true }}
      />
    </Stack>
  );
}

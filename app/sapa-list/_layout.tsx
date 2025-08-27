import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "စပါးအမျိုးအစား များ", headerShown: true }}
      />
      <Stack.Screen
        name="add-new"
        options={{ title: "စပါးအမျိုးအစား အသစ်ထည့်ရန်", headerShown: true }}
      />
    </Stack>
  );
}

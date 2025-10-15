import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "ပေါင်းခံ စာရင်း", headerShown: true }}
      />
      <Stack.Screen
        name="add-new"
        options={{ title: "ပေါင်းခံ စာရင်း အသစ်ထည့်ရန်", headerShown: true }}
      />
    </Stack>
  );
}

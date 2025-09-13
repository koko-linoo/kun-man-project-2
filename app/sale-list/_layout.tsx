import { IconButton } from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "အရောင်း စာရင်း",
          headerShown: true,
          headerRight: () => (
            <IconButton onPress={() => router.push("/sale-total")}>
              <Ionicons name="list" size={24} />
            </IconButton>
          ),
        }}
      />
      <Stack.Screen
        name="add-new"
        options={{ title: "အရောင်း စာရင်း အသစ်ထည့်ရန်", headerShown: true }}
      />
    </Stack>
  );
}

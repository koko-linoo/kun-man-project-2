import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "အရောင်း စာရင်း",
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("/sale-total")}
              activeOpacity={0.6}
            >
              <Ionicons name="list" size={24} />
            </TouchableOpacity>
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

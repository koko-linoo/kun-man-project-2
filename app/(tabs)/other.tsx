import { Container } from "@/components/Container";
import { theme } from "@/config/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const buttons = [
  // {
  //   label: "ပေါင်းခံ စာရင်း",
  //   route: "/distillation-list",
  //   icon: "bonfire",
  // },
  {
    label: "ဆန်ကြိတ် စာရင်း",
    route: "/other-milling-list",
    icon: "settings",
  },
];

export default function Other() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Container style={styles.grid}>
        {buttons.map((button) => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.gridItem}
            key={button.label}
            onPress={() => router.push(button.route as any)}
          >
            <View style={styles.button}>
              <Ionicons name={button.icon as any} size={24} color="white" />
              <Text style={styles.buttonLabel}>{button.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
  },
  buttonLabel: {
    fontFamily: "Font-Regular",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  grid: {
    padding: theme.spacing.sm,
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row",
  },
  gridItem: {
    aspectRatio: 1.5,
    padding: theme.spacing.sm,
    width: "50%",
  },
});

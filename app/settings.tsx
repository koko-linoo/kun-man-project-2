import { Container } from "@/components/Container";
import { theme } from "@/config/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Settings() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Container style={styles.grid}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.gridItem}
          onPress={() => router.push("/sapa-list")}
        >
          <View style={styles.button}>
            <Ionicons name="receipt" size={24} color="white" />
            <Text style={styles.buttonLabel}>စပါးအမျိုးအစား</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.gridItem}
          onPress={() => router.push("/san-list")}
        >
          <View style={styles.button}>
            <Ionicons name="receipt" size={24} color="white" />
            <Text style={styles.buttonLabel}>ဆန်အမျိုးအစား</Text>
          </View>
        </TouchableOpacity>
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

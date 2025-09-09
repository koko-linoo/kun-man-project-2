import { theme } from "@/config/theme";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "./Text";

export function ListItem({
  disabled,
  data,
  onLongPress,
}: {
  disabled?: boolean;
  data: Record<string, string | number>;
  onLongPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.item}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      {Object.entries(data).map(([key, value]) => (
        <View style={styles.rowBetween} key={key}>
          <Text style={styles.label}>{key} -</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: theme.spacing.sm,
  },
  container: {
    padding: theme.spacing.sm - 2,
    gap: theme.spacing.md - 2,
    flex: 1,
  },
  item: {
    gap: theme.spacing.md,
    padding: theme.spacing.md,
    backgroundColor: "white",
    borderRadius: theme.spacing.sm,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 6,
    margin: 2,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: theme.fontSizes.md,
  },
  value: {
    fontSize: theme.fontSizes.lg,
    fontFamily: "Font-Bold",
  },
});

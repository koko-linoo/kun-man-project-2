import { theme } from "@/config/theme";
import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";

type ButtonProps = {
  label: string;
  route: any;
};

export function Button({
  label,
  route,
  style,
  ...props
}: ButtonProps & ViewProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => router.push(route)}>
      <View style={[styles.button, style]} {...props}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function Button2({
  label,
  ...props
}: TouchableOpacityProps & { label: string }) {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      <View style={styles.button}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function IconButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      {...props}
      style={styles.iconButton}
    />
  );
}

const styles = StyleSheet.create({
  iconButton: {
    paddingHorizontal: 16,
  },
  buttonLabel: {
    fontFamily: "Font-Bold",
    fontSize: theme.fontSizes.md,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    backgroundColor: theme.colors.primary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    borderRadius: theme.spacing.sm,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

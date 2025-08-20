import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ButtonProps = {
  label: string;
  route: any;
};

export function Button({ label, route }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => router.push(route)}>
      <View style={styles.button}>
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

const styles = StyleSheet.create({
  buttonLabel: {
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "tomato",
    borderRadius: 10,
    padding: 10,
  },
});

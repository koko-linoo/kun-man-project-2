import { theme } from "@/config/theme";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";

type InputProps = {
  style?: StyleProp<ViewStyle>;
  readonly?: boolean;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
};

export function Input(props: InputProps) {
  return (
    <View style={[styles.root, props.style]}>
      <Text>{props.label}</Text>
      <TextInput
        readOnly={props.readonly}
        placeholderTextColor="#aaa"
        value={props.value}
        onChange={(e) => props.onChange?.(e.nativeEvent.text)}
        style={styles.input}
        placeholder={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: theme.spacing.xs,
  },
  input: {
    borderRadius: 10,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    width: "100%",
  },
});

import { theme } from "@/config/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export type SelectItem = { id: string | number; name: string };

type SelectInputProps = {
  loading?: boolean;
  value?: SelectItem;
  label: string;
  disabled?: boolean;
  placeholder?: string;
  onChange: (value: SelectItem) => void;
  items: SelectItem[];
};

export function SelectInput({
  disabled = false,
  placeholder = "Select One",
  items = [],
  ...props
}: SelectInputProps) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={styles.root}>
        <Text>{props.label}</Text>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          disabled={disabled}
          activeOpacity={0.6}
        >
          <View style={styles.inputWrapper}>
            <TextInput
              id="fee"
              readOnly
              defaultValue={props.value?.name}
              placeholderTextColor="#aaa"
              keyboardType="number-pad"
              style={styles.input}
              placeholder={placeholder}
            />
            {props.loading && <ActivityIndicator style={styles.spinner} />}
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        transparent
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.sheet}>
            <Text style={styles.title}>Select One</Text>
            {items.map((item) => {
              const selected = item.id === props.value?.id;
              return (
                <View
                  style={[styles.selectItem, selected && styles.selectedItem]}
                  key={item.id}
                >
                  <TouchableOpacity
                    style={[styles.item]}
                    activeOpacity={0.6}
                    onPress={() => {
                      props.onChange(item);
                      setVisible(false);
                    }}
                  >
                    <Ionicons
                      name={selected ? "radio-button-on" : "radio-button-off"}
                      size={20}
                    />
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: theme.spacing.xs,
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  spinner: {
    position: "absolute",
    right: 10,
  },
  input: {
    borderRadius: 10,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    width: "100%",
    paddingRight: 35,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  sheet: {
    paddingBottom: theme.spacing.md,
    borderTopEndRadius: theme.spacing.md,
    borderTopStartRadius: theme.spacing.md,
    backgroundColor: "#fff",
  },
  title: { fontSize: 18, fontWeight: "bold", padding: theme.spacing.md },
  selectItem: {
    borderBottomColor: "#A3B3B3",
  },
  selectedItem: { backgroundColor: "#D3D3A3" },
  item: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing.md,
    padding: theme.spacing.md,
  },
});

import { theme } from "@/config/theme";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "./Text";

export function DatePicker({ onChange }: { onChange?: (date?: Date) => void }) {
  const [date, setDate] = useState<Date | undefined>();
  const [show, setShow] = useState(false);

  const handleChange = (_: any, selectedDate?: Date) => {
    setDate(selectedDate);
    onChange && onChange(selectedDate);
    setShow(false);
  };

  return (
    <View
      style={{
        alignItems: "flex-end",
        marginTop: theme.spacing.md,
      }}
    >
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={styles.labelContainer}
        >
          <Text style={styles.label}>
            {date?.toLocaleDateString() ?? "Filter By Date"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!date}
          onPress={() => {
            setDate(undefined);
            onChange && onChange(undefined);
          }}
          style={styles.button}
        >
          <Ionicons
            name={date ? "close" : "calendar"}
            size={theme.spacing.lg}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          accentColor={theme.colors.primary}
          value={date ?? new Date()}
          mode="date" // can be "time" or "datetime"
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginRight: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xs,
  },
  button: {
    padding: theme.spacing.xs,
    backgroundColor: "white",
    borderRadius: theme.spacing.sm,
  },
  labelContainer: {
    backgroundColor: "white",
    borderRadius: theme.spacing.sm,
  },
  label: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.xs,
    fontFamily: "Font-Bold",
    fontSize: theme.fontSizes.lg,
    color: "gray",
  },
});

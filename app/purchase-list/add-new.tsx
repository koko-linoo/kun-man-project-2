import { BottomButton } from "@/components/Container";
import { SapaSelect } from "@/components/selects/SapaSelect";
import { theme } from "@/config/theme";
import { useCreateEmployee } from "@/quries/employee.query";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AddNew() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const { isPending, mutateAsync } = useCreateEmployee();

  return (
    <BottomButton
      disabled={isPending}
      label="သိမ်းဆည်းမည်"
      onPress={() => {
        mutateAsync({ name }).then(() => router.back());
      }}
    >
      <View style={styles.container}>
        <View>
          <Text>အမည်</Text>
          <TextInput
            placeholderTextColor="#aaa"
            value={name}
            onChange={(e) => setName(e.nativeEvent.text)}
            style={styles.input}
            placeholder="အမည် ထည့်သွင်းရန်"
          />
        </View>
        <SapaSelect />
        <View style={styles.row}>
          <View>
            <Text>တင်း</Text>
            <TextInput
              placeholderTextColor="#aaa"
              value={amount}
              onChange={(e) => setAmount(e.nativeEvent.text)}
              style={styles.input}
              placeholder="000, 000"
            />
          </View>
          <View>
            <Text>ပေါင်</Text>
            <TextInput
              placeholderTextColor="#aaa"
              value={amount}
              onChange={(e) => setAmount(e.nativeEvent.text)}
              style={styles.input}
              placeholder="000, 000"
            />
          </View>
        </View>
        <View>
          <Text>တန်ဖိုး</Text>
          <TextInput
            placeholderTextColor="#aaa"
            value={amount}
            onChange={(e) => setAmount(e.nativeEvent.text)}
            style={styles.input}
            placeholder="000, 000"
          />
        </View>
      </View>
    </BottomButton>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 18,
    padding: theme.spacing.md,
  },
  input: {
    borderRadius: 10,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
});

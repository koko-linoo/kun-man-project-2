import { BottomButton } from "@/components/Container";
import { useCreateEmployee } from "@/quries/employee.query";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AddNew() {
  const [name, setName] = useState("");
  const [fee, setFee] = useState("");

  const { isPending, mutateAsync } = useCreateEmployee();

  return (
    <BottomButton
      disabled={isPending}
      label="သိမ်းဆည်းမည်"
      onPress={() => {
        mutateAsync({ name, fee: Number(fee) }).then(() => router.back());
      }}
    >
      <View style={styles.container}>
        <View>
          <Text>အလုပ်သမား အမည်</Text>
          <TextInput
            value={name}
            onChange={(e) => setName(e.nativeEvent.text)}
            id="name"
            style={styles.input}
            placeholder="အမည် ထည့်သွင်းရန်"
          />
        </View>
        <View>
          <Text>လုပ်အားခ</Text>
          <TextInput
            id="fee"
            value={fee}
            onChange={(e) => setFee(e.nativeEvent.text)}
            keyboardType="number-pad"
            style={styles.input}
            placeholder="လုပ်အားခ ထည့်သွင်းရန်"
          />
        </View>
      </View>
    </BottomButton>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 18,
  },
  input: {
    borderRadius: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    width: "100%",
  },
});

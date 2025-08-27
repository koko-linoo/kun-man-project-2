import { BottomButton } from "@/components/Container";
import { useCreateSapa } from "@/quries/sapa.query";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AddNew() {
  const [name, setName] = useState("");

  const { isPending, mutateAsync } = useCreateSapa();

  return (
    <BottomButton
      disabled={isPending}
      label="သိမ်းဆည်းမည်"
      onPress={() => {
        mutateAsync({ name }).then(() => router.back());
      }}
    >
      <View style={styles.container}>
        <View style={{ gap: 4 }}>
          <Text>စပါးအမျိုးအစား အမည်</Text>
          <TextInput
            placeholderTextColor="#ccc"
            value={name}
            onChange={(e) => setName(e.nativeEvent.text)}
            id="name"
            style={styles.input}
            placeholder="အမည် ထည့်သွင်းရန်"
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

import { BottomButton } from "@/components/Container";
import { Input } from "@/components/Input";
import { theme } from "@/config/theme";
import { useCreateSapa } from "@/quries/sapa.query";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function AddNew() {
  const [name, setName] = useState<string>();

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
        <Input
          label="စပါးအမျိုးအစား အမည်"
          placeholder="စပါးအမျိုးအစား"
          value={name}
          onChange={(e) => setName(e)}
        />
      </View>
    </BottomButton>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
  },
});

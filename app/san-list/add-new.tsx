import { BottomButton } from "@/components/Container";
import { Input } from "@/components/Input";
import { theme } from "@/config/theme";
import { useCreateSan } from "@/quries/san.query";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function AddNew() {
  const [name, setName] = useState<string>();

  const { isPending, mutateAsync } = useCreateSan();

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
          label="ဆန်အမျိုးအစား အမည်"
          placeholder="ဆန်အမျိုးအစား"
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

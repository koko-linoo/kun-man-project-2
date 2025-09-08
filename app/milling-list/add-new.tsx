import { BottomButton } from "@/components/Container";
import { Input } from "@/components/Input";
import { SanSelect } from "@/components/selects/Select";
import { theme } from "@/config/theme";
import { useCreateMilling } from "@/quries/milling.query";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function AddNew() {
  const [san, setSan] = useState<San>();
  const [count, setCount] = useState<string | undefined>("");

  const { isPending, mutateAsync } = useCreateMilling();

  return (
    <BottomButton
      disabled={isPending}
      label="သိမ်းဆည်းမည်"
      onPress={() => {
        mutateAsync({ count, san_type: san?.id }).then(() => router.back());
      }}
    >
      <View style={styles.container}>
        <SanSelect
          value={san}
          onChange={(e) => setSan({ id: Number(e.id), name: e.name })}
        />
        <Input
          style={styles.input}
          placeholder="000, 000"
          label="အိတ်"
          value={count}
          onChange={(e) => setCount(e)}
        />
      </View>
    </BottomButton>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.md,
    padding: theme.spacing.md,
  },
  input: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
});

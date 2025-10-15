import { BottomButton } from "@/components/Container";
import { Input } from "@/components/Input";
import { SapaSelect } from "@/components/selects/Select";
import { theme } from "@/config/theme";
import { useCreateDistillation } from "@/quries/distillation.query";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function AddNew() {
  const [sapa, setSapa] = useState<Sapa>();
  const [count, setCount] = useState<string | undefined>("");
  const [amount, setAmount] = useState<string | undefined>("");
  const { isPending, mutateAsync } = useCreateDistillation();

  return (
    <BottomButton
      disabled={isPending}
      label="သိမ်းဆည်းမည်"
      onPress={() => {
        mutateAsync({
          count,
          amount,
          sapa_type: sapa?.id,
        }).then(() => router.back());
      }}
    >
      <View style={styles.container}>
        <SapaSelect
          value={sapa}
          onChange={(e) => setSapa({ id: Number(e.id), name: e.name })}
        />
        <Input
          placeholder="000, 000"
          keyboardType="numeric"
          label="တင်းရေ"
          value={count}
          onChange={(e) => setCount(e)}
        />
        <Input
          placeholder="000, 000"
          keyboardType="numeric"
          label="ကြိတ်ခ"
          value={amount}
          onChange={(e) => setAmount(e)}
        />
      </View>
    </BottomButton>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
  },
});

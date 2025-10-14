import { BottomButton } from "@/components/Container";
import { Input } from "@/components/Input";
import { SanSelect } from "@/components/selects/Select";
import { theme } from "@/config/theme";
import { useCreateSale } from "@/quries/sale.query";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function AddNew() {
  const [name, setName] = useState<string | undefined>("");
  const [san, setSan] = useState<San>();
  const [count, setCount] = useState<string | undefined>("");
  const [amount, setAmount] = useState<string | undefined>("");

  const { isPending, mutateAsync } = useCreateSale();

  return (
    <BottomButton
      disabled={isPending}
      label="သိမ်းဆည်းမည်"
      onPress={() => {
        mutateAsync({ name, count, san_type: san?.id, amount }).then(() =>
          router.back()
        );
      }}
    >
      <View style={styles.container}>
        <Input
          placeholder="အမည်"
          label="အမည်"
          value={name}
          onChange={(e) => setName(e)}
        />
        <SanSelect
          showAll
          value={san}
          onChange={(e) => setSan({ id: Number(e.id), name: e.name })}
        />
        <Input
          placeholder="000, 000"
          label="အိတ် အရေအတွက်"
          keyboardType="numeric"
          value={count}
          onChange={(e) => setCount(e)}
        />
        <Input
          label="တန်ဖိုး"
          keyboardType="numeric"
          placeholder="000, 000"
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

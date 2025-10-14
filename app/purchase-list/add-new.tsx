import { BottomButton } from "@/components/Container";
import { Input } from "@/components/Input";
import { SapaSelect } from "@/components/selects/Select";
import { theme } from "@/config/theme";
import { useCreatePurchase } from "@/quries/purchase.query";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function AddNew() {
  const [name, setName] = useState<string | undefined>("");
  const [sapa, setSapa] = useState<Sapa>();
  const [tin, setTin] = useState<string | undefined>("");
  const [paung, setPaung] = useState<string | undefined>("");
  const [amount, setAmount] = useState<string | undefined>("");

  const { isPending, mutateAsync } = useCreatePurchase();

  return (
    <BottomButton
      disabled={isPending}
      label="သိမ်းဆည်းမည်"
      onPress={() => {
        mutateAsync({ name, tin, paung, sapa: sapa?.id, amount }).then(() =>
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
        <SapaSelect
          value={sapa}
          onChange={(e) => setSapa({ id: Number(e.id), name: e.name })}
        />
        <View style={styles.row}>
          <Input
            style={styles.input}
            placeholder="000, 000"
            label="တင်း"
            keyboardType="numeric"
            value={tin}
            onChange={(e) => setTin(e)}
          />
          <Input
            style={styles.input}
            placeholder="000, 000"
            keyboardType="numeric"
            label="ပေါင်"
            value={paung}
            onChange={(e) => setPaung(e)}
          />
        </View>
        <Input
          label="တန်ဖိုး"
          placeholder="000, 000"
          keyboardType="numeric"
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

import { BottomButton } from "@/components/Container";
import { Input } from "@/components/Input";
import { SanSelect } from "@/components/selects/Select";
import { theme } from "@/config/theme";
import { useCreateOtherMilling } from "@/quries/other-milling.query";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function AddNew() {
  const [san, setSan] = useState<San>();
  const [sanCount, setCount] = useState<string | undefined>("");
  const [sanKwalCount, setSanKwalCount] = useState<string | undefined>("");
  const [amount, setAmount] = useState<string | undefined>("");

  const { isPending, mutateAsync } = useCreateOtherMilling();

  return (
    <BottomButton
      disabled={isPending}
      label="သိမ်းဆည်းမည်"
      onPress={() => {
        mutateAsync({
          san_count: sanCount,
          san_kwal_count: sanKwalCount,
          amount,
          san_type: san?.id,
        }).then(() => router.back());
      }}
    >
      <View style={styles.container}>
        <SanSelect
          value={san}
          onChange={(e) => setSan({ id: Number(e.id), name: e.name })}
        />
        <Input
          keyboardType="numeric"
          placeholder="000, 000"
          label="ဆန်အိတ် အရေအတွက်"
          value={sanCount}
          onChange={(e) => setCount(e)}
        />
        <Input
          keyboardType="numeric"
          placeholder="000, 000"
          label="ဆန်ကွဲအိတ် အရေအတွက်"
          value={sanKwalCount}
          onChange={(e) => setSanKwalCount(e)}
        />
        <Input
          keyboardType="numeric"
          placeholder="000, 000"
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

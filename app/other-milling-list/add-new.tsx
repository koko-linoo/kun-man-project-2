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
  const [sanCount, setCount] = useState<string | undefined>("");
  const [sanKwalextra, setSanKwalextra] = useState<string | undefined>("");
  const [amount, setAmount] = useState<string | undefined>("");

  const { isPending, mutateAsync } = useCreateMilling();

  return (
    <BottomButton
      disabled={isPending}
      label="သိမ်းဆည်းမည်"
      onPress={() => {
        mutateAsync({
          sanCount,
          sanKwalextra,
          amount,
          san_type: san?.id,
        }).then(() => router.back());
      }}
    >
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <SanSelect
            value={san}
            onChange={(e) => setSan({ id: Number(e.id), name: e.name })}
          />
        </View>
        <Input
          style={styles.input}
          placeholder="000, 000"
          label="အိတ်"
          value={sanCount}
          onChange={(e) => setCount(e)}
        />
      </View>
      <View style={styles.container}>
        <Input
          readonly
          style={{ flex: 2 }}
          placeholder="ဆန်ကွဲ"
          label="ဆန်ကွဲ"
        />
        <Input
          style={styles.input}
          placeholder="000, 000"
          label="အိတ်"
          value={sanKwalextra}
          onChange={(e) => setSanKwalextra(e)}
        />
      </View>
      <View style={styles.container}>
        <Input
          style={styles.input}
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
    flexDirection: "row",
    gap: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
  },
  input: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
});

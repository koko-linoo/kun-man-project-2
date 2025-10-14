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
  const [extra, setExtra] = useState<string | undefined>("");
  const [half, setHalf] = useState<string | undefined>("");
  const [twoThreeFour, setTwoThreeFour] = useState<string | undefined>("");
  const [flowerNu, setFlowerNu] = useState<string | undefined>("");

  const { isPending, mutateAsync } = useCreateMilling();

  return (
    <BottomButton
      disabled={isPending}
      label="သိမ်းဆည်းမည်"
      onPress={() => {
        mutateAsync({
          count,
          extra,
          half,
          twoThreeFour,
          flowerNu,
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
          keyboardType="numeric"
          label="အိတ်"
          value={count}
          onChange={(e) => setCount(e)}
        />
      </View>
      <View style={styles.container}>
        <Input
          readonly
          style={{ flex: 2 }}
          placeholder="Extra"
          label="Extra အိတ်ရေ"
        />
        <Input
          style={styles.input}
          placeholder="000, 000"
          keyboardType="numeric"
          label="အိတ်"
          value={extra}
          onChange={(e) => setExtra(e)}
        />
      </View>
      <View style={styles.container}>
        <Input
          readonly
          style={{ flex: 2 }}
          placeholder="1 / 2"
          label="1 / 2 အိတ်ရေ"
        />
        <Input
          style={styles.input}
          placeholder="000, 000"
          keyboardType="numeric"
          label="အိတ်"
          value={half}
          onChange={(e) => setHalf(e)}
        />
      </View>
      <View style={styles.container}>
        <Input
          readonly
          style={{ flex: 2 }}
          placeholder="2 / 3 / 4"
          label="2 / 3 / 4 အိတ်ရေ"
        />
        <Input
          style={styles.input}
          placeholder="000, 000"
          keyboardType="numeric"
          label="အိတ်"
          value={twoThreeFour}
          onChange={(e) => setTwoThreeFour(e)}
        />
      </View>
      <View style={styles.container}>
        <Input
          readonly
          style={{ flex: 2 }}
          placeholder="000, 000"
          label="ဖွဲနု အိတ်ရေ"
        />
        <Input
          style={styles.input}
          placeholder="000, 000"
          keyboardType="numeric"
          label="အိတ်"
          value={flowerNu}
          onChange={(e) => setFlowerNu(e)}
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

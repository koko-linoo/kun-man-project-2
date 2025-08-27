import { theme } from "@/config/theme";
import { StyleSheet, View, ViewProps } from "react-native";
import { Button2 } from "./Button";

export function Container({ style, ...props }: ViewProps) {
  return <View style={[styles.container, style]} {...props} />;
}

export function BottomButton({
  label,
  onPress,
  disabled = false,
  ...content
}: ViewProps & {
  label: string;
  disabled?: boolean;
  onPress: () => void;
}) {
  return (
    <Container>
      <View style={styles.content} {...content} />
      <View style={styles.bottom}>
        <Button2 label={label} onPress={onPress} disabled={disabled} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 8,
    gap: 8,
  },
  bottom: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
});

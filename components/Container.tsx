import { theme } from "@/config/theme";
import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";
import { Button2 } from "./Button";

export function Container({ style, ...props }: ViewProps) {
  return <View style={[styles.container, style]} {...props} />;
}

type BottomButtonProps = ViewProps & {
  label: string;
  disabled?: boolean;
  onPress: () => void;
};

export function BottomButton({
  label,
  onPress,
  disabled = false,
  ...content
}: BottomButtonProps) {
  return (
    <Container>
      <View style={styles.content} {...content} />
      <View style={styles.bottom}>
        <Button2 label={label} onPress={onPress} disabled={disabled} />
      </View>
    </Container>
  );
}

type ButtonListProps<T> = BottomButtonProps & {
  items: T[];
  child: (item: T) => React.ReactNode;
  isLoading?: boolean;
};

export function BottomButtonList<T extends { id: number }>({
  child,
  items,
  isLoading = false,
  ...props
}: ButtonListProps<T>) {
  return (
    <BottomButton {...props}>
      {isLoading && (
        <View
          style={[
            styles.scrollView,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <ActivityIndicator />
        </View>
      )}
      {!isLoading && Boolean(!items.length) && (
        <View
          style={[
            styles.scrollView,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Text>No Content</Text>
        </View>
      )}
      {Boolean(items.length) && (
        <ScrollView style={styles.scrollView}>
          <View style={[styles.container, { gap: theme.spacing.md }]}>
            {items.map((item) => (
              <View key={item.id}>{child(item)}</View>
            ))}
          </View>
        </ScrollView>
      )}
    </BottomButton>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: theme.spacing.md,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
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

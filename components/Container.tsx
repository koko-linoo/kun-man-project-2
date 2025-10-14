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
  extra?: React.ReactNode;
  header?: React.ReactNode;
};

export function List<T extends { id: number }>({
  items,
  child,
  isLoading,
  ...props
}: ViewProps & {
  items: T[];
  child: (item: T) => React.ReactNode;
  isLoading?: boolean;
}) {
  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!items.length) {
    return (
      <View style={styles.loader}>
        <Text>No Content</Text>
      </View>
    );
  }

  return (
    <View style={styles.container} {...props}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { gap: theme.spacing.md }]}>
          {items.map((item) => (
            <View key={item.id}>{child(item)}</View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export function BottomButtonList<T extends { id: number }>({
  child,
  items,
  isLoading = false,
  label,
  onPress,
  disabled = false,
  extra,
  header,
}: ButtonListProps<T>) {
  return (
    <View style={[styles.scrollView]}>
      <View
        style={[
          styles.content,
          {
            padding: theme.spacing.md,
          },
        ]}
      >
        {header}
        <List items={items} child={child} isLoading={isLoading} />
      </View>
      <View style={styles.bottom}>
        {extra}
        <Button2 label={label} onPress={onPress} disabled={disabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: theme.spacing.md,
  },
  bottom: {
    gap: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
});

import { IconButton } from "@/components/Button";
import { BottomButton } from "@/components/Container";
import { theme } from "@/config/theme";
import { useDeleteSapa, useSapaList } from "@/quries/sapa.query";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function DeleteSapa({ id }: { id: number }) {
  const { mutate, isPending } = useDeleteSapa();

  if (isPending) return <ActivityIndicator style={{ marginRight: 16 }} />;

  return (
    <IconButton onPress={() => mutate(id)}>
      <Ionicons name="trash" size={24} color="orange" />
    </IconButton>
  );
}

export default function EmployeeList() {
  const { data, isLoading, refetch } = useSapaList();

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <IconButton onPress={() => refetch()}>
              <Ionicons name="reload" size={24} color="#ccc" />
            </IconButton>
          ),
        }}
      />
      <BottomButton
        label="စပါးအမျိုးအစား အသစ်ထည့်ရန်"
        onPress={() => router.push("/sapa-list/add-new")}
      >
        <ScrollView style={styles.scrollView}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <View style={styles.container}>
              {data?.data?.map((sapa) => (
                <View key={sapa.id} style={styles.item}>
                  <Text
                    style={{ fontWeight: 700, fontSize: theme.fontSizes.md }}
                  >
                    {sapa.name}
                  </Text>
                  <DeleteSapa id={sapa.id} />
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      </BottomButton>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  item: {
    padding: theme.spacing.md,
    backgroundColor: "white",
    borderRadius: theme.spacing.sm,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 6,
    margin: 2,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    padding: theme.spacing.sm - 2,
    gap: theme.spacing.md - 2,
    flex: 1,
  },
});

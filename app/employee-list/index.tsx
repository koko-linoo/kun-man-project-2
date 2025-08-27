import { IconButton } from "@/components/Button";
import { BottomButton } from "@/components/Container";
import { theme } from "@/config/theme";
import { useEmployeeList } from "@/quries/employee.query";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function EmployeeList() {
  const { data, isLoading, refetch } = useEmployeeList();

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
        label="အလုပ်သမား စာရင်း အသစ်ထည့်ရန်"
        onPress={() => router.push("/employee-list/add-new")}
      >
        <ScrollView style={styles.scrollView}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <View style={styles.container}>
              {data?.data?.map((employee) => (
                <View key={employee.id} style={styles.item}>
                  <Text>
                    {new Date(employee.created_at).toLocaleDateString()}
                  </Text>
                  <Text>{employee.name}</Text>
                  <Text>{employee.fee}</Text>
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
    padding: theme.spacing.md,
  },
  item: {
    alignItems: "center",
    gap: theme.spacing.sm,
    padding: theme.spacing.md,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: theme.spacing.sm,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 6,
    margin: 2,
  },
  avator: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    padding: theme.spacing.sm,
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  container: {
    gap: theme.spacing.md - 2,
    flex: 1,
  },
});

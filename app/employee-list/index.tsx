import { BottomButton } from "@/components/Container";
import { useEmployeeList } from "@/quries/employee.query";
import { router } from "expo-router";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function TableContainer({ style, ...props }: ViewProps) {
  return <View style={[styles.tableContainer, style]} {...props} />;
}

function TableRow({
  isHeader = false,
  ...props
}: {
  items: string[];
  isHeader?: boolean;
}) {
  const style: StyleProp<ViewStyle> = isHeader ? styles.rowHeader : {};
  const textStyle: StyleProp<TextStyle> = isHeader ? styles.textHeader : {};

  return (
    <View style={[styles.row, style]}>
      {props.items.map((item, index) => (
        <View style={styles.itemContainer} key={index}>
          <Text style={[styles.itemText, textStyle]}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export default function EmployeeList() {
  const { data, isLoading } = useEmployeeList();

  return (
    <BottomButton
      label="အလုပ်သမား စာရင်း အသစ်ထည့်ရန်"
      onPress={() => router.push("/employee-list/add-new")}
    >
      <TableContainer>
        <TableRow items={["နေ့စွဲ", "အမည်", "လုပ်အားခ"]} isHeader />
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              data?.data?.map((employee) => (
                <TableRow
                  items={[
                    new Date(employee.created_at).toLocaleDateString(),
                    employee.name,
                    (employee.fee as number)?.toLocaleString("en-US"),
                  ]}
                  key={employee.id}
                />
              ))
            )}
          </View>
        </ScrollView>
        <TableRow
          items={[
            "စုစုပေါင်း",
            "",
            isLoading
              ? "Loading ..."
              : data?.total?.toLocaleString("en-US") ?? "-",
          ]}
          isHeader
        />
      </TableContainer>
    </BottomButton>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    gap: 8,
  },
  row: {
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomWidth: 2,
    borderColor: "#aaaaaa",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 8,
    flex: 1,
  },
  itemText: {
    paddingLeft: 8,
  },
  rowHeader: {
    backgroundColor: "tomato",
  },
  textHeader: {
    color: "white",
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 8,
  },
});

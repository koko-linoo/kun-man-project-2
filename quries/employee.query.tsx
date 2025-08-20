import { employeeKeys } from "@/config/query-keys";
import { createEmployee, getEmployeeList } from "@/services/employee.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

export function useEmployeeList() {
  return useQuery({
    queryKey: employeeKeys.all,
    queryFn: async () => getEmployeeList(),
    select: (response) => response,
  });
}

export function useCreateEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (employee: Record<string, any>) =>
      createEmployee(employee),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: employeeKeys.all });
    },
    onError: (response) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: response.message,
      });
    },
  });
}

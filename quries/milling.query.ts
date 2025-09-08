import { millingKeys } from "@/config/query-keys";
import {
  createMilling,
  deleteMilling,
  getMillingList,
} from "@/services/milling.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

export function useMillingList() {
  return useQuery({
    queryKey: millingKeys.all,
    queryFn: async () => getMillingList(),
    select: (response) => response,
  });
}

export function useCreateMilling() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (Milling: Record<string, any>) => createMilling(Milling),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: millingKeys.all });
    },
    onError: (response) => {
      console.log(response);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: response.message,
      });
    },
  });
}

export function useDeleteMilling() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => deleteMilling(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: millingKeys.all });
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

import { distillationKeys } from "@/config/query-keys";
import {
  createDistillation,
  deleteDistillation,
  getDistillationList,
} from "@/services/distillation-list.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

export function useDistillationList() {
  return useQuery({
    queryKey: distillationKeys.all,
    queryFn: async () => getDistillationList(),
    select: (response) => response,
  });
}

export function useCreateDistillation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (distillation: Record<string, any>) =>
      createDistillation(distillation),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: distillationKeys.all,
      });
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

export function useDeleteDistillation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => deleteDistillation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: distillationKeys.all });
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

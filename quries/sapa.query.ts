import { sapaKeys } from "@/config/query-keys";
import { createSapa, deleteSapa, getSapaList } from "@/services/sapa.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

export function useSapaList() {
  return useQuery({
    queryKey: sapaKeys.all,
    queryFn: async () => getSapaList(),
    select: (response) => response,
  });
}

export function useCreateSapa() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (Sapa: Record<string, any>) => createSapa(Sapa),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: sapaKeys.all });
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

export function useDeleteSapa() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => deleteSapa(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: sapaKeys.all });
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

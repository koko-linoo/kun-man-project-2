import { sanKeys } from "@/config/query-keys";
import { createSan, deleteSan, getSanList } from "@/services/san.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

export function useSanList() {
  return useQuery({
    queryKey: sanKeys.all,
    queryFn: async () => getSanList(),
    select: (response) => response,
  });
}

export function useCreateSan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (San: Record<string, any>) => createSan(San),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: sanKeys.all });
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

export function useDeleteSan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => deleteSan(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: sanKeys.all });
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

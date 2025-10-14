import { otherMillingKeys } from "@/config/query-keys";
import {
  createOtherMilling,
  deleteOtherMilling,
  getOtherMillingList,
} from "@/services/other-milling.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

export function useOtherMillingList() {
  return useQuery({
    queryKey: otherMillingKeys.all,
    queryFn: async () => getOtherMillingList(),
    select: (response) => response,
  });
}

export function useCreateOtherMilling() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (OtherMilling: Record<string, any>) =>
      createOtherMilling(OtherMilling),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: otherMillingKeys.all,
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

export function useDeleteOtherMilling() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => deleteOtherMilling(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: otherMillingKeys.all });
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

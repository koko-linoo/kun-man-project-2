import { purchaseKeys, purchaseTotalKeys } from "@/config/query-keys";
import {
  createPurchase,
  deletePurchase,
  getPurchaseList,
  getTotalPurchase,
} from "@/services/purchase.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

export function usePurchaseList() {
  return useQuery({
    queryKey: purchaseKeys.list(),
    queryFn: async () => getPurchaseList(),
    select: (response) => response,
  });
}

export function useGetTotalPurchase() {
  return useQuery({
    queryKey: purchaseTotalKeys.all,
    queryFn: async () => getTotalPurchase(),
    select: (response) => response,
  });
}

export function useCreatePurchase() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (Purchase: Record<string, any>) =>
      createPurchase(Purchase),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: purchaseKeys.all });
      queryClient.invalidateQueries({ queryKey: purchaseTotalKeys.all });
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

export function useDeletePurchase() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => deletePurchase(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: purchaseKeys.all });
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

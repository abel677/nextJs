import {
  IProfileResponse,
  useGetProfileApiQuery,
} from "@/redux/api/authService";

interface IProfileHook {
  data: IProfileResponse | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const useProfile = (): IProfileHook => {
  const { data, isLoading, isError } = useGetProfileApiQuery();

  return {
    data: data?.data,
    isLoading,
    isError,
  };
};
